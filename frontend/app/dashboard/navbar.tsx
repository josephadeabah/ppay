// app/dashboard/navbar.tsx
import { useSidebarContext } from "@/context/SidebarContext";
import { isSmallScreen } from "@/helpers/is-small-screen";
import { DarkThemeToggle } from "flowbite-react";
import Link from "next/link";
import type { FC } from "react";
import { HiMenuAlt1, HiX } from "react-icons/hi";

export const DashboardNavbar: FC = function () {
  const { isCollapsed: isSidebarCollapsed, setCollapsed: setSidebarCollapsed } =
    useSidebarContext();

  return (
    <header>
      <nav className="fixed top-0 z-30 w-full border-b border-gray-200 bg-white p-0 dark:border-gray-700 dark:bg-gray-800 sm:p-0">
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
          <div className="hidden items-center gap-x-4 lg:flex">
            <Link
              href="/dashboard"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
            >
              Pricing
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/auth/login"
              className="rounded-md bg-white px-4 py-2 text-gray-950 ring-1 ring-gray-200 hover:bg-gray-50 dark:bg-gray-900 dark:text-gray-50 dark:ring-gray-700 dark:hover:bg-gray-800"
            >
              Sign In
            </Link>
            <Link
              href="/auth/register"
              className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
            >
              Sign Up
            </Link>
            <DarkThemeToggle />
          </div>
        </div>
        {/* Mobile Menu */}
        <div className="absolute left-0 top-0 w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800 lg:hidden">
          <div className="flex flex-col gap-y-2 p-4">
            <Link
              href="/features"
              className="py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
            >
              Pricing
            </Link>
            <Link
              href="/auth/login"
              className="rounded-md bg-white px-4 py-2 text-gray-950 ring-1 ring-gray-200 hover:bg-gray-50 dark:bg-gray-900 dark:text-gray-50 dark:ring-gray-700 dark:hover:bg-gray-800"
            >
              Sign In
            </Link>
            <Link
              href="/auth/register"
              className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
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
