"use client";
import CompensationComponentAnalysis from "./compensationcomponentanalysis";
import CostOfLivingArea from "./constofliving";
import MarketRates from "./market-rates";
import RemediationRecommendations from "./remediation-recommendations";
import RootCauseAnalysis from "./rootcauseanalysis";

const PayFactors = ({ userData }: { userData: any[] }) => {
  return (
    <div className="w-full max-w-full">
      {/* Top row with 3 components */}
      <div className="grid grid-cols-1">
        <div className="col-span-1 mb-2">
          <CostOfLivingArea data={userData} />
        </div>
      </div>

      <div className="grid grid-cols-1">
        <div className="col-span-1 mb-2">
          <MarketRates data={userData} />
        </div>
      </div>

      <div className="grid grid-cols-1">
        <div className="col-span-1 mb-2">
          <CompensationComponentAnalysis data={userData} />
        </div>
      </div>

      <div className="grid grid-cols-1">
        <div className="col-span-1 mb-2">
          <RootCauseAnalysis data={userData} />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1">
        <div className="col-span-1">
          <RemediationRecommendations data={userData} />
        </div>
      </div>
    </div>
  );
};

export default PayFactors;
