'use client';

import { Avatar } from '../ui/avatar';

export default function HeaderDashboard() {
  return (
    <nav className="bg-white p-6 fixed w-full top-0">
      <div className="container mx-auto flex justify-end items-center">
        <div className="flex items-center">
          <Avatar className="bg-white w-9 h-9" />
          <span className="text-black">BUMDes Cipagalo</span>
        </div>
      </div>
    </nav>
  );
}
