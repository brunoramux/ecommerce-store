import { cn } from "@/app/lib/utils";
import { forwardRef } from "react";

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {}

const Button = forwardRef< HTMLButtonElement ,ButtonProps>(({
  className,
  children,
  disabled,
  type = "button",
  ...props
}, ref) => {
  return (
    <button ref={ref} className={cn(
      `
        w-auto
        rounded-full
        bg-black
        border-transparent
        px-5
        py-3
        disabled:cursos-not-allowed
        disabled:opacity-50
        text-white
        font-semibold
        hover:opacity-75
        transition
      `,
      className
    )}>
      {children}
    </button>
  )
})

Button.displayName = "Button";

export default Button;