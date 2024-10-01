"use client";

import Image from "next/image";
import { IoChevronDown, IoMenu } from "react-icons/io5";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import Link from "next/link";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";

const navigations = [
  {
    title: "Beranda",
    href: "/",
    subNav: null,
  },
  {
    title: "Tentang Sekolah",
    href: "#",
    subNav: [
      {
        title: "Profil Sekolah",
        href: "/profile",
      },
      {
        title: "Fasilitas",
        href: "/facility",
      },
      {
        title: "Guru dan Staff",
        href: "/staff",
      },
    ],
  },
  {
    title: "Berita dan Artikel",
    href: "/news",
    subNav: null,
  },
  {
    title: "Galeri",
    href: "/gallery",
    subNav: null,
  },
];

const Header = () => {
  return (
    <header>
      <nav className="border-gray-200 px-4 py-2.5 font-bold dark:bg-gray-800 lg:px-6">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="School Logo"
              width={36}
              height={36}
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              SMP Yapis
            </span>
          </Link>
          <div className="flex items-center lg:order-2 lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <IoMenu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <div className="flex flex-col gap-2">
                    {navigations.map((nav, index) => (
                      <>
                        {nav.subNav ? (
                          <div className="flex flex-col gap-2">
                            <Accordion key={index} type="multiple">
                              <AccordionItem
                                value={index.toString()}
                                className="border-b-0"
                              >
                                <AccordionTrigger className="hover:no-underline">
                                  <Button
                                    variant="ghost"
                                    className="w-full text-lg font-bold"
                                  >
                                    {nav.title}
                                  </Button>
                                </AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-2">
                                  {nav.subNav.map((subNav, index) => (
                                    <SheetClose asChild key={index}>
                                      <Link
                                        href={subNav.href}
                                        passHref
                                        className="rounded-md p-2 text-center"
                                      >
                                        {subNav.title}
                                      </Link>
                                    </SheetClose>
                                  ))}
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          </div>
                        ) : (
                          <div className="flex flex-col gap-2">
                            <SheetClose asChild>
                              <Link
                                href={nav.href}
                                passHref
                                key={index}
                                className="rounded-md p-2 text-center text-lg font-bold"
                              >
                                {nav.title}
                              </Link>
                            </SheetClose>
                          </div>
                        )}
                      </>
                    ))}
                  </div>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          <div
            className="hidden w-full items-center justify-between lg:order-2 lg:flex lg:w-auto"
            id="mobile-menu-2"
          >
            <NavigationMenu>
              <NavigationMenuList>
                {navigations.map((nav, index) => (
                  <NavigationMenuItem key={index} className="relative">
                    {nav.subNav ? (
                      <HoverCard>
                        <HoverCardTrigger asChild className="cursor-pointer">
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                          >
                            {nav.title} <IoChevronDown />
                          </NavigationMenuLink>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-56">
                          {
                            <div className="flex flex-col gap-2">
                              {nav.subNav.map((subNav, index) => (
                                <Link
                                  href={subNav.href}
                                  passHref
                                  key={index}
                                  legacyBehavior
                                >
                                  <NavigationMenuLink className="rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                                    {subNav.title}
                                  </NavigationMenuLink>
                                </Link>
                              ))}
                            </div>
                          }
                        </HoverCardContent>
                      </HoverCard>
                    ) : (
                      <Link href={nav.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          {nav.title}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
