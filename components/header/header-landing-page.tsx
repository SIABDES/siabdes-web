'use client';

import React, { useState, useEffect } from 'react';
import { Dialog, Popover } from '@headlessui/react';
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
import logo from '../../public/logo.png';
import Image from 'next/image';
import LogoBlack from '../../public/Logo-black.png';
import { Button } from '../ui/button';
import Link from 'next/link';
import SignInButton from '../example/sign-in-button';

export default function HeaderLandingPage() {
  const [isTransparent, setIsTransparent] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldTransparent = window.scrollY < 100;
      setIsTransparent(shouldTransparent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isTransparent
          ? 'bg-transparent text-black text-lg font-medium leading-6'
          : 'bg-[#00BFA6] shadow-xl'
      } fixed w-full top-0 left-0 z-50 transition-all duration-1000 ease-in-out`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" //padding 6
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link rel="stylesheet" href="/">
            <Image src={LogoBlack} alt="logo" width={27} className="w-auto" />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <HamburgerMenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Popover className="hidden lg:flex lg:gap-x-12 lg:justify-start lg:mr-4 md:mr-0">
          <a href="#">Kelebihan Aplikasi</a>
          <a href="#">Fitur Aplikasi</a>
          <a href="#">Cara Order</a>
          <a href="#">Kontak Kami</a>
        </Popover>

        {/* <Popover className="hidden lg:flex lg:flex-1 lg:gap-x-5 lg:justify-end">
          <Link href="/auth/login">
            <Button variant="outline" size="default">
              Login
            </Button>{' '}
          </Link>
          <Link href="/auth/register">
            <Button
              variant="outline"
              size="default"
              className="px-12 bg-[#00BFA6]"
            >
              Daftar
            </Button>
          </Link>
        </Popover> */}
        <SignInButton />
      </nav>

      {/* Mobile menu, show/hide based on menu open state. */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <Cross1Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {/* <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure> */}
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
