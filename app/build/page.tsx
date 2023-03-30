'use client';

import { Card } from '@/components/motion/Card';
import { Div } from '@/components/motion/Div';
import { H2, H3 } from '@/components/shared/typography';
import { useBuildForm } from '@/lib/hooks/useBuildForm';
import { cn } from '@/lib/utils';

const form = {
  destination: {
    domesticOrInternational: [
      {
        label: 'US',
        value: 'US',
        type: 'select',
      },
      {
        label: 'International',
        value: 'INTERNATIONAL',
        type: 'select',
      },
    ],
  },
};

export default function BuildForm() {
  const { isItemSelected, setFormValues } = useBuildForm();

  const handleOptionClick = (val: string) => {
    setFormValues({
      type: 'ADD_RESPONSE',
      section: 'destination',
      inputName: 'domesticOrInternational',
      payload: {
        value: val,
      },
    });
  };

  return (
    <div className="mt-2 w-full">
      <Div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1.0 }}
        transition={{ duration: 1 }}
      >
        <H2>Tell us about your destination preferences</H2>
      </Div>
      <Div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1.0 }}
        transition={{ duration: 1 }}
      >
        <H3>Where are you looking?</H3>
        <Div className="my-8 flex w-full flex-row flex-wrap justify-evenly gap-8">
          {form.destination.domesticOrInternational.map(({ value, label }) => (
            <Card
              className={cn(
                'flex h-48 w-11/12 items-center justify-center p-0 sm:w-5/12 lg:w-1/3 2xl:w-1/4',
                {
                  'shadow-camel-orange/80 ring-2 ring-camel-orange/80':
                    isItemSelected(value),
                }
              )}
              key={value}
              whileHover={{ scale: 1.05 }}
            >
              <button
                onClick={() => handleOptionClick(value)}
                className="h-full w-full"
              >
                <span className="text-2xl font-semibold">{label}</span>
              </button>
            </Card>
          ))}
        </Div>
      </Div>
    </div>
  );
}
