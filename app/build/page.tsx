'use client';

// import { Card } from '@/components/motion/Card';
// import { FormSection } from '@/components/FormSection';
import { Div } from '@/components/motion/Div';
import { TileSelect } from '@/components/shared/form/TileSelect';
import { H2, H4 } from '@/components/shared/typography';
// import { cn } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

export type BuildFormData = {
  domesticOrInternational: string;
};

type Section = 'destination' | 'tripDetails';
const sections: Section[] = ['destination', 'tripDetails'];

export default function BuildForm() {
  const [currentSection, setCurrentSection] = useState(1);

  const { control, handleSubmit } = useForm<BuildFormData>();
  const router = useRouter();
  const searchParams = useSearchParams();

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

  // const handleNext = () => {
  //   setCurrentSection(currentSection + 1);
  //   router.push(`${location.pathname}?section=${sections[currentSection + 1]}`);
  // };

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
            <Div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1.0 }}
              transition={{ duration: 0.5 }}
            >
              <H4>Would you prefer to stay in the US, or seek beyond?</H4>
              <Div className="my-8 flex w-full flex-row flex-wrap justify-evenly gap-8">
                <Controller
                  name="domesticOrInternational"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, value } }) => (
                    <TileSelect
                      options={[
                        { label: 'Domestic', value: 'domestic' },
                        { label: 'International', value: 'international' },
                        { label: 'Anywhere', value: 'anywhere' },
                      ]}
                      onChange={(val) => onChange(val)}
                      value={value}
                    />
                  )}
                />
              </Div>
            </Div>
          </>
        );
      default:
        return <></>;
    }
  };

  return (
    <div className="mt-2 w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        {renderSection(currentSection)}
      </form>
    </div>
  );
}
