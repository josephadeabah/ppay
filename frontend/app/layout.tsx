// app/layout.tsx
import { SidebarProvider } from "@/context/SidebarContext";
import { Flowbite, ThemeModeScript } from "flowbite-react";
import { Inter } from "next/font/google";
import { FC, PropsWithChildren, Suspense } from "react";
import { twMerge } from "tailwind-merge";
import "./globals.css";
import Loading from "./loading";
import { flowbiteTheme } from "./theme";

const inter = Inter({ subsets: ["latin"] });

const RootLayout: FC<PropsWithChildren> = function ({ children }) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className={twMerge("bg-gray-50 dark:bg-gray-900", inter.className)}>
        <Flowbite theme={{ theme: flowbiteTheme }}>
          <SidebarProvider>
            <div>
              <main>
                <Suspense fallback={<Loading />}>{children}</Suspense>
              </main>
            </div>
          </SidebarProvider>
        </Flowbite>
      </body>
    </html>
  );
};

export default RootLayout;
