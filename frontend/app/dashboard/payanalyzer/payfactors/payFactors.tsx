"use client";
import { EmployeeData } from "@/types/payaid.data";
import CompensationComponentAnalysis from "./compensationcomponentanalysis";
import PromotionDeterminant from "./promotiondeterminant";

const PayFactors = ({ userData }: { userData: EmployeeData[] }) => {
  return (
    <div className="flex w-full max-w-full flex-col gap-8">
      <h2 className="text-xl font-bold">Pay Factors</h2>
      {/* Top row with 3 components */}
      <div className="grid grid-cols-1">
        <div className="col-span-1">
          <PromotionDeterminant data={userData} />
        </div>
      </div>

      <div className="grid grid-cols-1">
        <div className="col-span-1">
          <CompensationComponentAnalysis data={userData} />
        </div>
      </div>
    </div>
  );
};

export default PayFactors;
