import { Control, Controller, UseFormRegister } from 'react-hook-form';
import { Div } from '@/components/motion/Div';
import { TileSelect } from '@/components/shared/form/TileSelect';
import { H4 } from '@/components/shared/typography';
import { BuildFormData } from '@/app/build/page';
import { Input } from '@/lib/types/form';
import { Card } from './motion/Card';
import { Button } from './shared/ui/Button';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

type FormQuestionProps = {
  name: keyof BuildFormData;
  control: Control<BuildFormData>;
  register: UseFormRegister<BuildFormData>;
  soloInput?: Input;
  options?: Input[];
  title: string;
};

export const FormQuestion = ({
  name,
  control,
  soloInput,
  options,
  title,
}: FormQuestionProps) => {
  const [localValue, setLocalValue] = useState('');

  return (
    <Div
      initial={{ x: 3000 }}
      animate={{
        x: 0,
        transition: {
          delay: 0.2,
          duration: 0.5,
          type: 'spring',
          stiffness: 100,
          damping: 20,
        },
      }}
    >
      <H4>{title}</H4>
      <Div className="my-4 flex w-full flex-row flex-wrap justify-evenly gap-8">
        {options && (
          <Controller
            name={name}
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <TileSelect
                options={options}
                onChange={(val) => onChange(val)}
                value={value}
              />
            )}
          />
        )}
        {soloInput && (
          <div className="flex w-full flex-col">
            <div className="flex w-full flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
              <Controller
                name={name}
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <>
                    <Card className="flex-1 p-0">
                      <input
                        className="w-full bg-inherit px-2 py-3 font-medium focus-visible:outline-camel-orange/60"
                        value={localValue}
                        onChange={(e) => setLocalValue(e.target.value)}
                      />
                    </Card>
                    <Button
                      className="h-full text-base"
                      onClick={() => onChange(localValue)}
                    >
                      Next <ArrowRight className="ml-1 w-5" />
                    </Button>
                  </>
                )}
              />
            </div>
            {soloInput.helperText && (
              <span className="mt-2 text-xs text-slate-400">
                {soloInput.helperText}
              </span>
            )}
          </div>
        )}
      </Div>
    </Div>
  );
};
