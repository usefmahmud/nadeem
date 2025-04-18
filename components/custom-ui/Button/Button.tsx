interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary';
}

const buttonVariants = {
  primary: 'bg-primary text-white hover:bg-primary-hover',
};

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  variant = 'primary',
  ...props
}) => {
  return (
    <button
      className={`${className} font-dahab bg-primary hover:bg-primary-hover -translate-y-[3px] cursor-pointer rounded-md px-4 py-2 pt-3 font-bold text-white shadow-[0_3px_0_0_var(--color-border)] transition-all duration-100 select-none active:translate-y-0 active:shadow-none`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
