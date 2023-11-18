import React, { ReactNode } from 'react';
import Sidebar from '@/components/sidebar/sidebar';
import Header from '@/components/header/header-dashboard';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex-1 p-4 min-h-0 overflow-auto">{children}</div>
      </div>
    </div>
  );
  //   return (
  //     <div className="h-screen flex">
  //       <Sidebar />
  //       <div className="flex flex-col flex-1 relative">
  //         <div className="bg-slate-50 flex-1 p-4 text-black z-0">
  //           <Header />
  //           {children}
  //         </div>
  //       </div>
  //     </div>
  //   );
}
