import RegisterForm from '../../../components/register/registerForm';
import Image from 'next/image';
import BgLogin from '@/public/undraw_sign_up_n6im.svg';
import Header from '@/components/header/header-landing-page';

export default function Register() {
  return (
    <main className="">
      <Header />
      <div className="flex space-x-16 mt-28 ml-36">
        <div>
          <Image src={BgLogin} alt="login" width={500} className="mt-14" />
        </div>
        <div>
          <RegisterForm />
        </div>
      </div>
    </main>
  );
}
