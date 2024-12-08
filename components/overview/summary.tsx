import React from "react";
import { Sparkles } from "lucide-react";

const summaryData = [
  {
    summary: "Your earnings are mostly escrow payments from dance studios.",
  },
  {
    summary: "80% of your income comes from recurring payments.",
  },
  {
    summary: "Your top-paying client is dance studios, accounting for 10% of total payments.",
  },
  {
    summary: "You have 10 overdue invoices. Follow up with the client.",
  },
  {
    summary: "15% of your payments were processed on Ethereum Sepolia",
  },
];

const Summary = () => {
  return (
    <div className="border px-4 py-4 flex flex-col w-[642px] h-[479px] gap-2">
      <div className="flex flex-row items-center gap-2">
        <Sparkles className="text-[#F03603] text-2xl" size={14} />
        <p className="text-sm transition-colors font-pp-supply-sans font-extralight">
          Summary
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {summaryData.map((data, index) => (
          <div key={index} className="border border-[#F7F7F7]  p-3">
            <p className="text-sm transition-colors font-pp-neue-montreal font-light">
              {data.summary}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Summary;
