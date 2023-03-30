import { useReducer } from 'react';

type FormItem = {
  value: string;
  [key: string]: string;
};

type BuildFormState = {
  destination: {
    domesticOrInternational: {
      [key: string]: FormItem;
    };
  };
  tripDetails: {
    [key: string]: FormItem;
  };
};

type BuildFormAction = {
  type: string;
  section: 'destination' | 'tripDetails';
  inputName: 'domesticOrInternational';
  payload: FormItem;
};

const initialFormState: BuildFormState = {
  destination: {
    domesticOrInternational: {},
  },
  tripDetails: {},
};

export const useBuildForm = () => {
  const [formValues, setFormValues] = useReducer(
    (state: BuildFormState, action: BuildFormAction) => {
      switch (action.type) {
        case 'ADD_RESPONSE':
          return {
            ...state,
            [action.section]: {
              ...state[action.section],
              [action.inputName]: {
                ...state[action.section][action.inputName],
                [action.payload.value]: action.payload,
              },
            },
          };
        default:
          return state;
      }
    },
    initialFormState
  );

  const isItemSelected = (val: string) => {
    return formValues.destination.domesticOrInternational[val];
  };

  return {
    formValues,
    setFormValues,
    isItemSelected,
  };
};
