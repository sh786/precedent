import { Card } from '@/components/motion/Card';
import { Div } from '@/components/motion/Div';
import { cn } from '@/lib/utils';

type Option = {
  label: string;
  value: string;
};

type TileSelectProps = {
  options: Option[];
  onChange: (_val: string) => void;
  value: string;
};

export const TileSelect = ({ options, onChange, value }: TileSelectProps) => {
  const handleOptionClick = (option: Option) => {
    console.log('option: ', option);
    onChange(option.value);
  };

  const isOptionSelected = (option: Option) => option.value === value;

  return (
    <Div
      role="listbox"
      aria-label="Select an option"
      tabIndex={0}
      className="flex w-full flex-wrap justify-evenly gap-8"
    >
      {options.map((option) => (
        <Card
          key={option.value}
          role="option"
          aria-selected={isOptionSelected(option)}
          tabIndex={isOptionSelected(option) ? 0 : -1}
          onClick={() => handleOptionClick(option)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleOptionClick(option);
            }
          }}
          className={cn(
            'flex w-11/12 items-center justify-center py-16 text-lg font-medium sm:w-5/12 md:w-3/12',
            {
              'bg-camel-orange/60': isOptionSelected(option),
              'shadow-lg': isOptionSelected(option),
            }
          )}
          whileHover={{
            scale: 1.03,
          }}
          initial={{ x: 3000 }}
          animate={{
            x: 0,
            transition: {
              delay: 0.4,
              duration: 0.5,
              type: 'spring',
              stiffness: 100,
              damping: 20,
            },
          }}
        >
          {option.label}
        </Card>
      ))}
    </Div>
  );
};
