'use client';
import RegisterForm from '@/components/register/registerForm';
import Link from 'next/link';
import React, { useRef } from 'react';

const SignupPage = () => {
  return (
    <RegisterForm />
    // <div className="m-2 border rounded overflow-hidden shadow">
    //   <div className="p-2 bg-gradient-to-b from-white to-slate-200 text-slate-600">
    //     Sign up
    //   </div>
    //   <div className="p-2 flex flex-col gap-6">
    //     <InputBox
    //       autoComplete="off"
    //       name="name"
    //       labelText="Name"
    //       required
    //       onChange={(e) => (data.current.name = e.target.value)}
    //     />
    //     <InputBox
    //       name="email"
    //       labelText="Email"
    //       required
    //       onChange={(e) => (data.current.email = e.target.value)}
    //     />
    //     <InputBox
    //       name="password"
    //       labelText="password"
    //       type="password"
    //       required
    //       onChange={(e) => (data.current.password = e.target.value)}
    //     />
    //     <div className="flex justify-center items-center gap-2">
    //       <Button onClick={register}>Submit</Button>
    //       <Link className="" href={'/'}>
    //         Cancel
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
};

export default SignupPage;
