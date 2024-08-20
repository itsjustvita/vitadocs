import { SignUp } from '@clerk/nextjs';
import { Sign } from 'crypto';

const SignUpPage = () => {
  return (
    <main className="auth-page">
      <SignUp />
    </main>
  );
};
export default SignUpPage;
