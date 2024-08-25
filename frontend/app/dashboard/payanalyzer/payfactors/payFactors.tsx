"use client";
import CompensationComponentAnalysis from "./compensationcomponentanalysis";
import CostOfLivingArea from "./constofliving";
import MarketRates from "./market-rates";
import RemediationRecommendations from "./remediation-recommendations";
import RootCauseAnalysis from "./rootcauseanalysis";

const PayFactors = ({ userData }: { userData: any[] }) => {
  return (
    <div className="flex w-full max-w-full flex-col gap-8">
      <h2 className="text-xl font-bold">Pay Factors</h2>
      {/* Top row with 3 components */}
      <div className="grid grid-cols-1">
        <div className="col-span-1">
          <CostOfLivingArea data={userData} />
        </div>
      </div>

      <div className="grid grid-cols-1">
        <div className="col-span-1">
          <MarketRates data={userData} />
        </div>
      </div>

      <div className="grid grid-cols-1">
        <div className="col-span-1">
          <CompensationComponentAnalysis data={userData} />
        </div>
      </div>

      <div className="grid grid-cols-1">
        <div className="col-span-1">
          <RootCauseAnalysis data={userData} />
        </div>
      </div>

      <div className="grid grid-cols-1">
        <div className="col-span-1">
          <RemediationRecommendations data={userData} />
        </div>
      </div>
    </div>
  );
};

export default PayFactors;
