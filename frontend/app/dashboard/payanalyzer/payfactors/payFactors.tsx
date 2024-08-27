"use client";
import CompensationComponentAnalysis from "./compensationcomponentanalysis";
import PromotionDeterminant from "./promotiondeterminant";

const PayFactors = ({ userData }: { userData: any[] }) => {
  const compensationComponentAnalysisData = [
    {
      name: "John Doe",
      actualCompensation: 90000,
      predictedCompensation: 85000,
    },
    {
      name: "Jane Smith",
      actualCompensation: 95000,
      predictedCompensation: 91000,
    },
    {
      name: "Sam Johnson",
      actualCompensation: 88000,
      predictedCompensation: 87000,
    },
    {
      name: "Emily Davis",
      actualCompensation: 92000,
      predictedCompensation: 89000,
    },
    // more data...
  ];

  const genderPromotionData = [
    {
      name: "John Doe",
      gender: "Male",
      salary: 90000,
      location: "USA",
      promoted: true,
    },
    {
      name: "Jane Smith",
      gender: "Female",
      salary: 85000,
      location: "Canada",
      promoted: false,
    },
    {
      name: "Sam Johnson",
      gender: "Male",
      salary: 88000,
      location: "United Kingdom",
      promoted: true,
    },
    {
      name: "Mary Adams",
      gender: "Female",
      salary: 92000,
      location: "USA",
      promoted: true,
    },
    // More data...
  ];

  return (
    <div className="flex w-full max-w-full flex-col gap-8">
      <h2 className="text-xl font-bold">Pay Factors</h2>
      {/* Top row with 3 components */}
      <div className="grid grid-cols-1">
        <div className="col-span-1">
          <PromotionDeterminant data={genderPromotionData} />
        </div>
      </div>

      <div className="grid grid-cols-1">
        <div className="col-span-1">
          <CompensationComponentAnalysis
            data={compensationComponentAnalysisData}
          />
        </div>
      </div>
    </div>
  );
};

export default PayFactors;
