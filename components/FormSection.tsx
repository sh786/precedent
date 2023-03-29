import type { FormQuestions } from '@/app/build/page';
import { H3 } from '@/components/shared/typography';
import { Div } from '@/components/motion/Div';
import { FormItems } from './FormItems';

type FormSectionProps = {
  section: FormQuestions;
  isItemSelected: (val: string) => boolean;
  handleOptionClick: (val: string) => void;
};

export const FormSection = ({
  section,
  isItemSelected,
  handleOptionClick,
}: FormSectionProps) => {
  return (
    <Div>
      {Object.entries(section).map(([key, val]) => (
        <>
          <H3>{val.title}</H3>
          <Div className="my-8 flex w-full flex-row flex-wrap justify-evenly gap-8">
            <FormItems
              key={key}
              items={val.inputs}
              isItemSelected={isItemSelected}
              handleOptionClick={handleOptionClick}
            />
          </Div>
        </>
      ))}
    </Div>
  );
};
