'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
  HomeIcon, //dashboard
  ClipboardEditIcon, //general-journal
  BookOpenIcon, //ledger
  ClipboardListIcon, //working-trial-balance
  DollarSignIcon, //financial-statement
  ClipboardCheckIcon, //closing-entry
  CalculatorIcon, //tax
  BoxesIcon, //data-master
  ChevronLeftIcon,
  MoveDownIcon,
} from 'lucide-react';
import LogoBlack from '../../public/Logo-black.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Menus = [
  { title: 'Dashboard', icon: HomeIcon, href: '/dashboard' },
  { title: 'Jurnal Umum', icon: ClipboardEditIcon, href: '/general-journal' },
  { title: 'Buku Besar', icon: BookOpenIcon, href: '/ledger' },
  {
    title: 'Neraca Lajur',
    // spacing: true,
    icon: ClipboardListIcon,
    href: '/working-trial-balance',
  },
  {
    title: 'Laporan Keuangan',
    submenu: true,
    submenuItems: [
      {
        title: 'Posisi Keuangan',
        href: '/financial-statement/statement-of-financial-position',
      },
      { title: 'Laba Rugi', href: '/financial-statement/income-statement' },
      { title: 'CALK', href: '/financial-statement/calk' },
    ],
    icon: DollarSignIcon,
  },
  { title: 'Jurnal Penutup', icon: ClipboardCheckIcon, href: '/closing-entry' },
  { title: 'Perpajakan', icon: CalculatorIcon, href: '/tax' },
  { title: 'Data Master', icon: BoxesIcon, href: '/data-master' },
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubmenuOpen] = useState(false);
  const router = useRouter();

  const handleMenuItemClick = (href?: string) => {
    if (href) {
      router.push(href);
    }
  };

  return (
    <div className="flex">
      <div
        className={`bg-[#4194CB] h-screen p-5 pt-8 ${
          open ? 'w-72' : 'w-20'
        } duration-300 relative`}
      >
        <ChevronLeftIcon
          className={`bg-white text-black text-3xl rounded-full absolute -right-3 top-9 border border-neutral-950 cursor-pointer 
          ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <Image
            src={LogoBlack}
            alt="Logo"
            className={`bg-slate-100 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${
              open && 'rotate-[360deg] w-12'
            } ${!open && 'w-9 h-8'}`}
          />
          <h1
            className={`text-white origin-left font-medium text-2xl duration-300 pt-2 ${
              !open && 'scale-0'
            }`}
          >
            SIABDes TAXIon
          </h1>
        </div>
        <ul className="pt-20">
          {Menus.map((menu, index) => (
            <React.Fragment key={index}>
              <li
                className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-400 rounded-md mt-2 `} //${menu.spacing ? 'mt-9' : 'mt-2'}
                onClick={() => handleMenuItemClick(menu.href)}
              >
                <span className="text-2xl block float-left">
                  {React.createElement(menu.icon, { size: 24 })}
                </span>
                <span
                  className={`text-base font-medium flex-1 ${
                    !open && 'hidden'
                  }`}
                >
                  {menu.title}
                </span>
                {menu.submenu && open && (
                  <div
                    className={`${subMenuOpen && 'rotate-180'}`}
                    onClick={() => setSubmenuOpen(!subMenuOpen)}
                  >
                    👍
                  </div>
                )}
              </li>
              {menu.submenu && subMenuOpen && open && (
                <ul>
                  {menu.submenuItems.map((submenuItem, index) => (
                    <li
                      key={index}
                      className="text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-slate-400 rounded-md"
                      onClick={() =>
                        handleMenuItemClick(
                          submenuItem.href
                            ? `${menu.href}${submenuItem.href}`
                            : menu.href
                        )
                      }
                    >
                      {submenuItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}
