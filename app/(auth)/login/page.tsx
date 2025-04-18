'use client';
import Button from '@/components/custom-ui/Button/Button';
import Input from '@/components/custom-ui/Input/Input';
import toast from 'react-hot-toast';

const LoginPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success('تم تسجيل الدخول بنجاح');
  };

  const handleGoogleLogin = () => {
    toast.success('تسجيل الدخول بواسطة جوجل');
  };

  return (
    <div className='flex w-full justify-center p-10'>
      <form className='w-full' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
          <div>
            <Input
              label='اسم المستخدم'
              type='text'
              name='username'
              placeholder='اسم المستخدم'
            />
          </div>
          <div>
            <Input
              label='كلمة المرور'
              type='password'
              name='password'
              placeholder='كلمة المرور'
            />
          </div>
          <div>
            <Button className='w-full' type='submit'>
              تسجيل الدخول
            </Button>
          </div>

          <div className='flex items-center justify-center gap-2'>
            <div className='h-[1px] w-full bg-gray-300' />
            <span className='text-gray-500'>أو</span>
            <div className='h-[1px] w-full bg-gray-300' />
          </div>

          <div>
            <Button
              type='button'
              className='w-full'
              onClick={handleGoogleLogin}
            >
              تسجيل الدخول بجوجل
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
