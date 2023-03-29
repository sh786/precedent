'use client';

import { FormSection } from '@/components/FormSection';
import { Div } from '@/components/motion/Div';
import { H2 } from '@/components/shared/typography';
import {
  FormInputName,
  FormSection as IFormSection,
  useBuildForm,
} from '@/lib/hooks/useBuildForm';

export type FormInput = {
  label: string;
  value: string;
  type: 'select';
};

type FormQuestion = {
  title: string;
  inputs: FormInput[];
};

export type FormQuestions = {
  [T in FormInputName]?: FormQuestion;
};

type FormInputData = {
  [K in IFormSection]: FormQuestions;
};

const form: FormInputData = {
  destination: {
    domesticOrInternational: {
      title: 'Where are you looking to go?',
      inputs: [
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
        <FormSection
          section={form.destination}
          isItemSelected={(val) =>
            isItemSelected('destination', 'domesticOrInternational', val)
          }
          handleOptionClick={handleOptionClick}
        />
      </Div>
    </div>
  );
}
