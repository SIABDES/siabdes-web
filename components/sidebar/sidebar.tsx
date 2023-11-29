'use client';
import React, { use, useEffect, useState } from 'react';
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
  ChevronDownIcon,
} from 'lucide-react';
import LogoBlack from '../../public/Logo-black.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { set } from 'date-fns';

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
    icon: DollarSignIcon,
    submenu: true,
    submenuItems: [
      {
        title: 'Posisi Keuangan',
        href: '/financial-statement/statement-of-financial-position',
      },
      { title: 'Laba Rugi', href: '/financial-statement/income-statement' },
      { title: 'CALK', href: '/financial-statement/calk' },
    ],
  },
  { title: 'Jurnal Penutup', icon: ClipboardCheckIcon, href: '/closing-entry' },
  {
    title: 'Perpajakan',
    submenu: true,
    submenuItems: [
      {
        title: 'Pajak Penghasilan Pasal 21',
        href: '',
      },
      { title: 'Pajak Pertambahan Nilai', href: '' },
    ],
    icon: CalculatorIcon,
  },
  {
    title: 'Data Master',
    icon: BoxesIcon,
    submenu: true,
    submenuItems: [
      {
        title: 'Daftar Akun',
        href: '/data-master/account',
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
  const pathname = usePathname();

  const handleMenuItemClick = (href?: string, index?: number) => {
    if (href) {
      router.push(href);
    }
    if (index !== undefined) {
      setActiveMenuIndex(index);
    }

    if (href) {
      return (
        <Link href={href}>
          <div>
            <a>{href}</a>
          </div>
        </Link>
      );
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
                className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-400 rounded-md mt-2 ${
                  activeMenuIndex === index && 'bg-red-400'
                }`}
                onClick={() => handleMenuItemClick(menu.href, index)}
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
                  <ChevronDownIcon
                    className={`${subMenuOpen[index] ? 'rotate-180' : ''}`}
                    onClick={() =>
                      setSubMenuOpen((prevSubMenuOpen) => [...prevSubMenuOpen])
                    }
                  />
                )}
              </li>
              {menu.submenu && subMenuOpen[index] && open && (
                <ul>
                  {menu.submenuItems.map((submenuItem, subIndex) => (
                    <li
                      key={subIndex}
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
