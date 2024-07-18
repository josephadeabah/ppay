import WagesChart from "@/components/wageschart/WagesChart";
import type { NextPage } from "next";

export const HomePageContent: NextPage = function () {
  return (
    <div className="bg-white">
      <main className="h-auto">
        <WagesChart />
      </main>
    </div>
  );
};
