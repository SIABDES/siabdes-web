import LoginForm from '@/components/login/login-form';
import TabsLogin from '@/components/login/tabs-login';
import Image from 'next/image';
import asLogin from '@/public/undraw_login_re_4vu2.svg';
import bgLogin from '../../public/bg-Login.jpg';
import Header from '@/components/header/header-landing-page';

export default function Login() {
  return (
    <main className="relative h-screen flex flex-col items-center justify-center">
      <Header />
      <div className="flex flex-row space-x-32">
        <Image src={asLogin} alt="login" width={600} />
        <LoginForm />
      </div>
    </main>
  );
}
