import { useReducer } from 'react';
import { redirect, useSearchParams } from 'next/navigation';

type FormItem = {
  value: string;
  [key: string]: string;
};

export type FormSection = 'destination' | 'tripDetails';

export type FormInputName = 'domesticOrInternational' | 'typeOfTrip';

type BuildFormState = {
  [K in FormSection]: {
    [T in FormInputName]?: {
      [key: string]: FormItem;
    };
  };
};

type BuildFormAction = {
  type: string;
  section: FormSection;
  inputName: FormInputName;
  payload: FormItem;
};

const initialFormState: BuildFormState = {
  destination: {
    domesticOrInternational: {},
  },
  tripDetails: {
    typeOfTrip: {},
  },
};

const newStateAfterAdd = (
  state: BuildFormState,
  section: FormSection,
  inputName: FormInputName,
  payload: FormItem
) => ({
  ...state,
  [section]: {
    ...state[section],
    [inputName]: {
      ...state[section][inputName],
      [payload.value]: payload,
    },
  },
});

export const useBuildForm = () => {
  const search = useSearchParams();
  const section = search?.get('section') as FormSection;

  const [formValues, setFormValues] = useReducer(
    (
      state: BuildFormState,
      { type, section, inputName, payload }: BuildFormAction
    ) => {
      switch (type) {
        case 'TOGGLE_RESPONSE': {
          if (isItemSelected(section, inputName, payload.value)) {
            const stateCopy = { ...state };
            delete stateCopy[section][inputName]?.[payload.value];
            return stateCopy;
          }

          return newStateAfterAdd(state, section, inputName, payload);
        }
        default:
          return state;
      }
    },
    initialFormState
  );

  const isItemSelected = (
    section: FormSection,
    inputName: FormInputName,
    val: string
  ) => {
    return !!formValues[section][inputName]?.[val];
  };

  if (!section || !initialFormState[section]) {
    return redirect('/build?section=destination');
  }

  return {
    formValues,
    setFormValues,
    isItemSelected,
  };
};
