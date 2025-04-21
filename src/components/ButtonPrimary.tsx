import { Button } from "@/components/ui/button";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/solid";

interface ButtonProps {
  text: string
  className: string
}

export function ButtonPrimary({
  text,
  className
}: ButtonProps) {
  return (
    <Button
      className={`
        p-6 rounded-none bg-brand-primary text-white text-lg font-semibold
        tablet:p-8 tablet:text-2xl
        ${className}
      `}
    >
      {text}
      <ArrowRightEndOnRectangleIcon 
        className={`
          size-[20px]
          tablet:size-[24px] tablet:mt-0.5
        `}
      />
    </Button>
  );
}
