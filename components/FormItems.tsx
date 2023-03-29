import { FormInput } from '@/app/build/page';
import { Card } from '@/components/motion/Card';
import { cn } from '@/lib/utils';
import { redirect } from 'next/navigation';

type FormItemsProps = {
  items?: FormInput[];
  isItemSelected: (val: string) => boolean;
  handleOptionClick: (val: string) => void;
};

export const FormItems = ({
  items,
  isItemSelected,
  handleOptionClick,
}: FormItemsProps) => {
  if (!items) redirect('/build?section=destination');

  return (
    <>
      {items.map(({ value, label }) => (
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
    </>
  );
};
