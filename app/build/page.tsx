'use client';

import { FormItems } from '@/components/FormItems';
import { Div } from '@/components/motion/Div';
import { H2, H3 } from '@/components/shared/typography';
import {
  FormInputName,
  FormSection,
  useBuildForm,
} from '@/lib/hooks/useBuildForm';

export type FormInput = {
  label: string;
  value: string;
  type: 'select';
};

type FormInputData = {
  [K in FormSection]: {
    [T in FormInputName]?: FormInput[];
  };
};

const form: FormInputData = {
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
  tripDetails: {},
};

export default function BuildForm() {
  const { isItemSelected, setFormValues } = useBuildForm();

  const handleOptionClick = (val: string) => {
    setFormValues({
      type: 'TOGGLE_RESPONSE',
      section: 'destination',
      inputName: 'domesticOrInternational',
      payload: {
        value: val,
      },
    });
  };

  return (
    <div className="mt-2 w-full text-slate-800">
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
          <FormItems
            items={form.destination.domesticOrInternational}
            isItemSelected={(val) =>
              isItemSelected('destination', 'domesticOrInternational', val)
            }
            handleOptionClick={handleOptionClick}
          />
        </Div>
      </Div>
    </div>
  );
}
