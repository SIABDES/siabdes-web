'use client';
import React, { use, useEffect, useState } from 'react';
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
  ChevronDownIcon,
  LucideIcon,
} from 'lucide-react';
import LogoBlack from '../../public/Logo-black.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type MenuItem = {
  title: string;
  icon?: LucideIcon;
  href?: string;
  subMenuItems?: MenuItem[];
};

const Menus: MenuItem[] = [
  { title: 'Dashboard', icon: HomeIcon, href: '/dashboard' },
  { title: 'Jurnal Umum', icon: ClipboardEditIcon, href: '/general-journal' },
  { title: 'Buku Besar', icon: BookOpenIcon, href: '/ledger' },
  {
    title: 'Neraca Lajur',
    icon: ClipboardListIcon,
    href: '/working-trial-balance',
  },
  {
    title: 'Laporan Keuangan',
    icon: DollarSignIcon,
    subMenuItems: [
      { title: 'Laba Rugi', href: '/financial-statement/income-statement' },
      {
        title: 'Posisi Keuangan',
        href: '/financial-statement/statement-of-financial-position',
      },
      { title: 'CALK', href: '/financial-statement/calk' },
    ],
  },
  { title: 'Jurnal Penutup', icon: ClipboardCheckIcon, href: '/closing-entry' },
  {
    title: 'Perpajakan',

    subMenuItems: [
      {
        title: 'Pajak Penghasilan Pasal 21',
        href: '/tax/pph21',
      },
      { title: 'Pajak Pertambahan Nilai', href: '/tax/ppn' },
    ],
    icon: CalculatorIcon,
  },
  {
    title: 'Data Master',
    icon: BoxesIcon,

    subMenuItems: [
      {
        title: 'Daftar Akun',
        href: '/data-master/accounts',
      },
      { title: 'Data Tenaga Kerja', href: '/data-master/employees' },
    ],
  },
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(
    Array(Menus.length).fill(false)
  );
  const router = useRouter();
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | undefined>(
    undefined
  );

  const handleMenuItemClick = (href?: string, index?: number) => {
    if (href) {
      router.push(href);
    }
    if (index !== undefined) {
      setActiveMenuIndex(index);
    }

    if (index !== undefined) {
      setSubMenuOpen((prevSubMenuOpen) => {
        const newSubMenuOpen = [...prevSubMenuOpen];
        newSubMenuOpen[index] = !prevSubMenuOpen[index];
        return newSubMenuOpen;
      });
    }
  };

  return (
    <div className="flex">
      <div
        className={`bg-[#4194CB] h-screen p-5 pt-8 ${
          open ? 'w-72' : 'w-20'
        } duration-300 relative`}
        // className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${
        //   open ? 'translate-x-0' : '-translate-x-64'
        // }`}
      >
        <ChevronLeftIcon
          className={`bg-white z-10 text-black text-3xl rounded-full absolute -right-3 top-9 border border-neutral-950 cursor-pointer 
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
              <div
                className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-400 rounded-md mt-2 ${
                  activeMenuIndex === index && 'bg-red-400'
                }`}
                onClick={() => handleMenuItemClick(menu.href, index)}
              >
                <span className="text-2xl block float-left">
                  {menu.icon
                    ? React.createElement(menu.icon, { size: 24 })
                    : undefined}
                </span>
                <span
                  className={`text-base font-medium flex-1 ${
                    !open && 'hidden'
                  }`}
                >
                  {menu.title}
                </span>
                {menu.subMenuItems && open && (
                  <ChevronDownIcon
                    className={`${subMenuOpen[index] ? 'rotate-180' : ''}`}
                    onClick={() =>
                      setSubMenuOpen((prevSubMenuOpen) => [...prevSubMenuOpen])
                    }
                  />
                )}
              </div>
              {menu.subMenuItems && subMenuOpen[index] && open && (
                <div>
                  {menu.subMenuItems.map((submenuItem, subIndex) => (
                    <Link href={`${submenuItem.href}`} key={subIndex}>
                      <div className=" text-white text-sm flex items-center gap-x-4 cursor-pointer ml-10 p-2 px-5 hover:bg-slate-400 rounded-md">
                        {submenuItem.title}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}
