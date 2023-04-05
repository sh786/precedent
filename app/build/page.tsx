'use client';

import { FormQuestion } from '@/components/FormQuestion';
import { Div } from '@/components/motion/Div';
import { H2 } from '@/components/shared/typography';
import { Button } from '@/components/shared/ui/Button';
import { Input } from '@/lib/types/form';
import { scrollToElement } from '@/lib/utils';
import { ArrowDown, Car, Globe2, Grip, Home, Plane, Train } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export type BuildFormData = {
  domesticOrInternational: string;
  departureCity: string;
  gettingThere: string;
};

type Section = 'destination' | 'tripDetails';
const sections: Section[] = ['destination', 'tripDetails'];

const questionToSelectOptions: Record<string, Input[]> = {
  domesticOrInternational: [
    { label: 'Domestic', value: 'domestic', icon: Home },
    { label: 'International', value: 'international', icon: Globe2 },
    { label: 'Anywhere', value: 'anywhere', icon: Grip },
  ],
  gettingThere: [
    { label: 'Drive', value: 'drive', icon: Car },
    { label: 'Fly', value: 'fly', icon: Plane },
    { label: 'Train', value: 'train', icon: Train },
    { label: 'All', value: 'any transportation method', icon: Grip },
  ],
};

const questionToInput: Record<string, Input> = {
  departureCity: {
    label: 'Departure City',
    value: 'departureCity',
    helperText: 'e.g. "New York City" or "New York City or Los Angeles"',
  },
};

export default function BuildForm() {
  const [currentSection, setCurrentSection] = useState(1);

  const { control, register, handleSubmit, watch } = useForm<BuildFormData>();
  const router = useRouter();
  const searchParams = useSearchParams();

  const domesticOrInternational = watch('domesticOrInternational');
  const departureCity = watch('departureCity');
  const gettingThere = watch('gettingThere');

  useEffect(() => {
    const sectionFromParam = searchParams?.get('section') as Section;
    if (!sectionFromParam || !sections.includes(sectionFromParam)) {
      router.push(`${location.pathname}?section=${sections[0]}`);
    } else {
      setCurrentSection(sections.indexOf(sectionFromParam));
    }
  }, [router, searchParams]);

  const onSubmit = (data: BuildFormData) => {
    console.log('Form data: ', data);
  };

  const handleContinueBtn = () => {
    // TODO: Change to a scroll to of the furthest incomplete FormQuestion
    scrollToElement('departureCity');
  };

  const renderSection = (section: number): ReactNode => {
    switch (section) {
      case 0:
        return (
          <>
            <Div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1.0 }}
              transition={{ duration: 0.5 }}
            >
              <H2>Tell us about your destination preferences</H2>
            </Div>
            <FormQuestion
              name="domesticOrInternational"
              control={control}
              register={register}
              options={questionToSelectOptions.domesticOrInternational}
              title="Would you prefer to stay in the US, or travel internationally?"
            />
            {domesticOrInternational && (
              <FormQuestion
                name="departureCity"
                control={control}
                register={register}
                soloInput={questionToInput.departureCity}
                title="What city(s) would you like to depart from?"
              />
            )}
            {departureCity && (
              <FormQuestion
                name="gettingThere"
                control={control}
                register={register}
                options={questionToSelectOptions.gettingThere}
                title="How would you like to get there?"
              />
            )}
            {gettingThere && <Button className="mt-4 w-full">Continue</Button>}
          </>
        );
      default:
        return <></>;
    }
  };

  return (
    <>
      <div className="mt-2 w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          {renderSection(currentSection)}
        </form>
      </div>
      {currentSection === 0 && domesticOrInternational && (
        <div className="fixed right-4 bottom-4 flex items-center justify-center rounded-full bg-slate-800 p-3 text-white shadow-lg sm:hidden">
          <button onClick={handleContinueBtn}>
            <ArrowDown size={32} />
          </button>
        </div>
      )}
    </>
  );
}
