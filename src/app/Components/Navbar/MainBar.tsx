import React from "react";
import Image from "next/image";
import logo from "@/app/assets/logo.png";
import {
  MegaMenu,
  MegaMenuDropdown,
  MegaMenuDropdownToggle,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { HiChevronDown } from "react-icons/hi";
import Link from "next/link";

const NavbarData = [
  { id: "1", name: "Clothes" },
  { id: "2", name: "Electronics" },
  { id: "3", name: "Furniture" },
  { id: "4", name: "Shoes" },
  { id: "5", name: "Miscellaneous" },
];

const MainBar = () => {
  return (
    <div className="container">
      {/* Hidden logo for larger screens */}
      <div className="md:flex justify-center hidden">
        <Image src={logo} alt="logo" width={190} height={24} priority />
      </div>
      {/* MegaMenu Component */}
      <MegaMenu className="md:flex block py-sm">
        <NavbarBrand href="/" className="block md:hidden">
          <Image src={logo} alt="logo" width={190} height={24} priority />
        </NavbarBrand>
        <NavbarToggle aria-label="Toggle navigation menu" />
        <NavbarCollapse
          style={{ width: "100%" }}
          className="md:flex justify-center"
        >
          <Link href="/" aria-label="Home">
            Home
          </Link>

          <NavbarLink href="#" aria-haspopup="true" aria-expanded="false">
            <MegaMenuDropdownToggle aria-label="Store dropdown">
              Store <HiChevronDown className="ml-2" aria-hidden="true" />
            </MegaMenuDropdownToggle>
          </NavbarLink>

          {NavbarData.map((ele) => {
            return (
              <Link
                key={ele.id}
                href={`/category/${ele.id}/${ele.name}`}
                aria-label="Home"
              >
                {ele.name}
              </Link>
            );
          })}
        </NavbarCollapse>
        <MegaMenuDropdown className="hidden">
          <ul className="mx-auto mt-6 grid max-w-screen-xl border-y border-gray-200 px-2 py-5 shadow-sm sm:grid-cols-2 md:grid-cols-3 dark:border-gray-600 dark:bg-gray-800 dark:text-white">
            <li>
              <Link
                href="#"
                className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                aria-label="Online Stores"
              >
                <div className="font-semibold">Online Stores</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Connect with third-party tools that you already using.
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                aria-label="Segmentation"
              >
                <div className="font-semibold">Segmentation</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Connect with third-party tools that you already using.
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                aria-label="Marketing CRM"
              >
                <div className="font-semibold">Marketing CRM</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Connect with third-party tools that you already using.
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                aria-label="Online Stores"
              >
                <div className="font-semibold">Online Stores</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Connect with third-party tools that you already using.
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                aria-label="Segmentation"
              >
                <div className="font-semibold">Segmentation</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Connect with third-party tools that you already using.
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                aria-label="Marketing CRM"
              >
                <div className="font-semibold">Marketing CRM</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Connect with third-party tools that you already using.
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                aria-label="Audience Management"
              >
                <div className="font-semibold">Audience Management</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Connect with third-party tools that you already using.
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                aria-label="Creative Tools"
              >
                <div className="font-semibold">Creative Tools</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Connect with third-party tools that you already using.
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                aria-label="Marketing Automation"
              >
                <div className="font-semibold">Marketing Automation</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Connect with third-party tools that you already using.
                </span>
              </Link>
            </li>
          </ul>
        </MegaMenuDropdown>
      </MegaMenu>
    </div>
  );
};

export default MainBar;
