import React, { ReactNode } from 'react';
import Sidebar from '@/components/sidebar/sidebar';
import Header from '@/components/header/header-dashboard';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-row h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 bg-white">
        <Header />
        <div className="flex-1 p-4 min-h-0 overflow-auto pt-28">{children}</div>
      </div>
    </div>
  );
}
