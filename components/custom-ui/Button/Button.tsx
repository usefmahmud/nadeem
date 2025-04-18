interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary"
}

const buttonVariants = {
  primary: "bg-primary text-white hover:bg-primary-hover",
};

const Button: React.FC<ButtonProps> = ({ children, className, onClick, variant = "primary" }) => {
  return (
    <button className={`${className} cursor-pointer font-dahab  text-white font-bold bg-primary shadow-[0_3px_0_0_var(--color-border)] active:shadow-none transition-all duration-100 hover:bg-primary-hover -translate-y-[3px] active:translate-y-0 rounded-md px-4 py-2 pt-3`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
