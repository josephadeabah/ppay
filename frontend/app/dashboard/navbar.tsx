"use client";
import { Avatar, AvatarFallback } from "@/components/avatar/Avatar";
import { BlurPopover } from "@/components/popover/Popover";
import { useSidebarContext } from "@/context/SidebarContext";
import { isSmallScreen } from "@/helpers/is-small-screen";
import { DarkThemeToggle } from "flowbite-react";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import {
  HiOutlineBell,
  HiOutlineLogout,
  HiOutlineMenuAlt1,
  HiOutlineUser,
  HiOutlineX,
} from "react-icons/hi";

export const DashboardNavbar: FC = function () {
  const { isCollapsed: isSidebarCollapsed, setCollapsed: setSidebarCollapsed } =
    useSidebarContext();
  const [user, setUser] = useState<{ email?: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserFromLocalStorage();
  }, []);

  useEffect(() => {
    const tokenString = localStorage.getItem("token");
    if (tokenString) {
      try {
        const token = JSON.parse(tokenString);
        const decodedToken: { exp: number; user: { email?: string } } =
          jwtDecode(token.token); // Assuming token structure includes a 'token' field with the JWT.
        // Check if token is expired
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp < currentTime) {
          handleLogout(); // Log out if the token has expired
        } else {
          // Set a timeout to log out when the token expires
          const expirationTime = (decodedToken.exp - currentTime) * 1000;
          setTimeout(() => {
            handleLogout();
          }, expirationTime);
        }
      } catch (error) {
        console.error("Failed to decode token:", error);
      }
    }
  }, []);

  const fetchUserFromLocalStorage = () => {
    const tokenString = localStorage.getItem("token");
    if (tokenString) {
      try {
        const token = JSON.parse(tokenString);
        setUser(token.user);
      } catch (error) {
        console.error("Failed to parse token from local storage:", error);
      }
    }
    setLoading(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null); // Clear user state on logout
    window.location.href = "/";
  };

  const getInitial = (email?: string) => {
    return email ? email[0].toUpperCase() : "?";
  };

  const renderSidebarToggleButton = () => (
    <button
      aria-controls="sidebar"
      aria-expanded
      className="mr-2 cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700"
      onClick={() => setSidebarCollapsed(!isSidebarCollapsed)}
    >
      {isSidebarCollapsed || !isSmallScreen() ? (
        <HiOutlineMenuAlt1 className="h-6 w-6" />
      ) : (
        <HiOutlineX className="h-6 w-6" />
      )}
    </button>
  );

  const renderLogo = () => (
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
  );

  const renderUserPopoverContent = () => (
    <div className="mt-2 flex w-full flex-col gap-2">
      <Link
        href="/dashboard"
        className="flex items-center truncate rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        {user?.email}
      </Link>
      <Link
        href="/dashboard/profile"
        className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        <HiOutlineUser className="mr-2 h-5 w-5 text-gray-600 dark:text-gray-400" />
        Profile
      </Link>
      <button
        onClick={handleLogout}
        className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        <HiOutlineLogout className="mr-2 h-5 w-5 text-gray-600 dark:text-gray-400" />
        Logout
      </button>
      <button className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white">
        <DarkThemeToggle className="mr-2 h-5 w-5 p-0 text-gray-600 dark:text-gray-400" />
        change theme
      </button>
    </div>
  );

  const renderUserActions = () => {
    if (loading) return null;

    return user ? (
      <>
        {/* Notification Icon */}
        <button
          aria-label="Notifications"
          className="relative cursor-pointer p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
        >
          <HiOutlineBell className="h-6 w-6" />
          {/* Notification Badge */}
          <span className="absolute right-0 top-0 inline-flex items-center justify-center rounded-full bg-red-600 px-1 py-0.5 text-xs font-bold leading-none text-white">
            3
          </span>
        </button>
        {/* User Avatar and Popover */}
        <BlurPopover
          triggerLabel={
            <Avatar>
              <AvatarFallback>{getInitial(user.email)}</AvatarFallback>
            </Avatar>
          }
          backdrop="transparent"
          content={renderUserPopoverContent()}
        />
      </>
    ) : (
      <>
        <Link
          href="/auth/login"
          className="rounded-sm bg-white px-2 py-1 text-gray-950 ring-1 ring-gray-200 hover:bg-gray-50 dark:bg-gray-900 dark:text-gray-50 dark:ring-gray-700 dark:hover:bg-gray-800"
        >
          Sign In
        </Link>
        <Link
          href="/auth/register"
          className="rounded-sm bg-blue-600 px-2 py-1 text-white hover:bg-blue-700 dark:bg-gray-900 dark:hover:bg-blue-800"
        >
          Sign Up
        </Link>
      </>
    );
  };

  return (
    <header>
      <nav className="fixed top-0 z-30 w-full border-b border-s-0 border-gray-200 bg-white p-0 dark:border-gray-700 dark:bg-gray-800 sm:p-0">
        <div className="flex w-full items-center justify-between p-3 pr-4">
          <div className="flex items-center">
            {user && renderSidebarToggleButton()}
            {renderLogo()}
          </div>
          <div className="flex items-center gap-2">{renderUserActions()}</div>
        </div>
      </nav>
    </header>
  );
};
