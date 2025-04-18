import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type: 'text' | 'password';
  name: string;
  placeholder?: string;
  error?: string;
}
const Input: React.FC<InputProps> = ({
  label,
  type,
  name,
  placeholder,
  error,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className='relative flex flex-col gap-1'>
      {label && (
        <label htmlFor={name} className='ms-2 font-extrabold'>
          {label}
        </label>
      )}
      <input
        type={showPassword ? 'text' : type}
        name={name}
        placeholder={placeholder ?? ''}
        className='rounded-lg border-2 border-gray-300/70 bg-gray-200/60 px-4 py-2 pt-3 font-bold outline-none'
        {...props}
      />

      {type === 'password' && (
        <span
          className='absolute end-[10px] bottom-[12px] cursor-pointer text-black/50'
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <Eye /> : <EyeOff />}
        </span>
      )}
    </div>
  );
};

export default Input;
