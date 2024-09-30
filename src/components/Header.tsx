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
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";

const navigations = [
  {
    title: "Beranda",
    href: "#",
    subNav: null,
  },
  {
    title: "Tentang Sekolah",
    href: "#",
    subNav: [
      {
        title: "Sejarah",
        href: "#",
      },
      {
        title: "Visi dan Misi",
        href: "#",
      },
      {
        title: "Fasilitas",
        href: "#",
      },
      {
        title: "Guru dan Staff",
        href: "#",
      },
    ],
  },
  {
    title: "Berita dan Artikel",
    href: "#",
    subNav: null,
  },
  {
    title: "Galeri",
    href: "#",
    subNav: null,
  },
];

const Header = () => {
  return (
    <header>
      <nav className="border-gray-200 bg-white px-4 py-2.5 dark:bg-gray-800 lg:px-6">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <Link href="https://flowbite.com" className="flex items-center">
            <Image
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="School Logo"
              width={36}
              height={36}
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              School Name
            </span>
          </Link>
          <div className="flex items-center lg:order-2 lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <IoMenu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-white dark:bg-gray-800">
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
                                    <Link
                                      href={subNav.href}
                                      passHref
                                      key={index}
                                      className="rounded-md p-2 text-center hover:bg-gray-100 dark:hover:bg-gray-700"
                                    >
                                      {subNav.title}
                                    </Link>
                                  ))}
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          </div>
                        ) : (
                          <div className="flex flex-col gap-2">
                            <Link
                              href={nav.href}
                              passHref
                              key={index}
                              className="rounded-md p-2 text-center text-lg font-bold hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              {nav.title}
                            </Link>
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
                                  className="rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                  <NavigationMenuLink>
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
