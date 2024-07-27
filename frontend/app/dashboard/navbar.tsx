// app/dashboard/navbar.tsx
import { useSidebarContext } from "@/context/SidebarContext";
import { isSmallScreen } from "@/helpers/is-small-screen";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { DarkThemeToggle } from "flowbite-react";
import Link from "next/link";
import type { FC } from "react";
import {
  HiMenuAlt1,
  HiOutlineChatAlt2,
  HiOutlineExternalLink,
  HiOutlineInformationCircle,
  HiX,
} from "react-icons/hi";

export const DashboardNavbar: FC = function () {
  const { isCollapsed: isSidebarCollapsed, setCollapsed: setSidebarCollapsed } =
    useSidebarContext();

  return (
    <header>
      <nav className="fixed top-0 z-30 w-full border-b border-s-0 border-gray-200 bg-white p-0 dark:border-gray-700 dark:bg-gray-800 sm:p-0">
        <div className="flex w-full items-center justify-between p-3 pr-4">
          <div className="flex items-center">
            <button
              aria-controls="sidebar"
              aria-expanded
              className="mr-2 cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700"
              onClick={() => setSidebarCollapsed(!isSidebarCollapsed)}
            >
              {isSidebarCollapsed || !isSmallScreen() ? (
                <HiMenuAlt1 className="h-6 w-6" />
              ) : (
                <HiX className="h-6 w-6" />
              )}
            </button>
            <div className="flex items-center">
              <Link
                href="/"
                className="flex items-center justify-center overflow-hidden rounded-xl"
              >
                <span className="flex h-7 w-auto items-center justify-center rounded-xl bg-blue-600 p-1 text-xs font-extrabold text-white dark:bg-blue-700 dark:text-white">
                  Pay
                </span>
                <span className="inline-block py-2 text-xs font-extrabold text-blue-600 dark:text-white">
                  Sight
                </span>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Popover>
              <PopoverTrigger>
                <button
                  className="rounded-full p-2 text-gray-600 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-label="Help"
                >
                  <HiOutlineInformationCircle className="h-6 w-6" />
                </button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="bg-gray-800 p-4 text-gray-50 dark:bg-gray-700 dark:text-gray-200 ">
                  <div className="mb-2">
                    <HiOutlineChatAlt2 className="mr-2 inline-block h-5 w-5" />
                    <Link
                      href="https://pnpmmedia.com"
                      target="_blank"
                      className="bg-gray-800 text-gray-50 dark:bg-gray-700 dark:text-gray-200"
                    >
                      Need help? Join us on
                    </Link>
                  </div>
                  <div>
                    <HiOutlineExternalLink className="mr-2 inline-block h-5 w-5" />
                    <Link
                      href="https://pnpmmedia.com/journal"
                      target="_blank"
                      className="bg-gray-800 text-gray-50 dark:bg-gray-700 dark:text-gray-200"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            <Link
              href="/auth/login"
              className="bg-white px-2 py-1 text-gray-950 ring-1 ring-gray-200 hover:bg-gray-50 dark:bg-gray-900 dark:text-gray-50 dark:ring-gray-700 dark:hover:bg-gray-800"
            >
              Sign In
            </Link>
            <Link
              href="/auth/register"
              className="bg-blue-600 px-2 py-1 text-white hover:bg-blue-700 dark:bg-gray-900 dark:hover:bg-blue-800"
            >
              Sign Up
            </Link>
            <DarkThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};
