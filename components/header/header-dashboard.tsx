'use client';

import UnitProfile from '@/app/unit/profile/page';
import { Avatar } from '../ui/avatar';
import UnitAvatar from '../pages/unit/unit-avatar';

export default function HeaderDashboard() {
  return (
    <nav className="bg-white p-6 fixed top-0 w-full pr-80">
      <div className="container mx-auto flex justify-end items-center">
        <div className="flex items-center">
          {/* <Avatar className="bg-white w-9 h-9" />
          <span className="text-black">BUMDes Cipagalo</span> */}
          <UnitAvatar />
        </div>
      </div>
    </nav>
  );
}
