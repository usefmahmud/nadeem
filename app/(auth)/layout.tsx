const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-dvh flex items-center justify-center'>
      <div className='w-full max-w-md'>{children}</div>
    </div>
  );
};

export default AuthLayout;
