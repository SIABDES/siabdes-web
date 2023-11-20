'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
  HomeIcon,
  ClipboardEditIcon,
  BookOpenIcon,
  ClipboardListIcon,
  DollarSignIcon,
  ClipboardCheckIcon,
  CalculatorIcon,
  BoxesIcon,
  ChevronLeftIcon,
} from 'lucide-react';

const SidebarItem = [
  { id: 1, icon: HomeIcon, label: 'Beranda', href: '/dashboard' },
  {
    id: 2,
    icon: ClipboardEditIcon,
    label: 'Jurnal Umum',
    href: '/general-journal',
  },
  { id: 3, icon: BookOpenIcon, label: 'Buku Besar', href: '/ledger' },
  {
    id: 4,
    icon: ClipboardListIcon,
    label: 'Neraca Lajur',
    href: '/working-trial-balance',
  },
  {
    id: 5,
    icon: DollarSignIcon,
    label: 'Laporan Keuangan',
    href: '/financial-statement',
  },
  {
    id: 6,
    icon: ClipboardCheckIcon,
    label: 'Jurnal Penutup',
    href: '/closing-entry',
  },
  { id: 7, icon: CalculatorIcon, label: 'Perpajakan', href: '/tax' },
  { id: 8, icon: BoxesIcon, label: 'Data Master', href: '/data-master' },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`bg-[#4194CB] text-white min-h-screen ${
        isCollapsed ? 'w-24' : 'w-[245px]'
      } ${isCollapsed ? 'collapsed' : ''}`}
    >
      <button
        onClick={handleToggleCollapse}
        className="p-4 focus:outline-none hover:bg-gray-700 transition-all duration-300"
      >
        {isCollapsed ? <ChevronLeftIcon size={20} /> : 'Tutup'}
      </button>
      <div className="p-4">
        <ul className="mt-20">
          {SidebarItem.map((item) => (
            <li key={item.id} className="mb-6 flex space-x-4 ml-4 mt-8">
              <Link href={item.href}>
                <div className="flex items-center hover:bg-slate-500">
                  {React.createElement(item.icon, { size: 24 })}
                  {!isCollapsed && <span className="ml-4">{item.label}</span>}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
