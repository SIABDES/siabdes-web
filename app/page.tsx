'use client';

import Header from '@/components/header/header-landing-page';
import Section1 from '@/components/landing/section1';
import Section2 from '@/components/landing/section2';
import { useSession } from 'next-auth/react';
import { Backend_URL } from '@/lib/constants';

export default function Home() {

  const session = useSession();

  const handleClick = () => {
    const fetcher = async () => {
      
      const res = await fetch(Backend_URL + '/auth/me', {
        headers: {
          Authorization: `Bearer ${session.data?.backendTokens.accessToken}`,
        }
      });

      console.log(await res.json());
    }

    void fetcher();
  }

  return (
    <>
      <Header />
      <Section1 />
      <Section2 />

      <button onClick={handleClick}>
        Check Me
      </button>
    </>
  );
}
