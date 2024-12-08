import InvoiceData from "@/components/overview/invoiceData";
import Summary from "@/components/overview/summary";
import { Download } from "lucide-react";

export default function Dashboard() {
  const invoiceData = [
    {
      title: "Total Invoices",
      value: 10,
    },
    {
      title: "Total Invoices",
      value: 10,
    },
    {
      title: "Total Invoices",
      value: 10,
    },
    {
      title: "Total Invoices",
      value: 10,
    },
  ];

  return (
    <div className="flex flex-col gap-12 container w-9/12">
      <div className="flex flex-col gap-8">
        <h3 className="transition-colors font-pp-supply-sans text-2xl">
          Overview
        </h3>
        <div className="flex flex-row w-full">
          {invoiceData?.map((invoice, index) => (
            <div key={index} className="border px-8 flex flex-col items-start justify-center w-[263px] h-[100px]">
              <span className="text-2xl transition-colors font-pp-supply-sans font-extralight">
                {invoice?.value}
              </span>
              <span className="text-sm transition-colors font-pp-supply-sans font-extralight">
                {invoice?.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-row  justify-between">
          <h3 className="transition-colors font-pp-supply-sans text-2xl">
            Insights
          </h3>
         <span className="">
         <Download
            className="text-black border border-[#E8E8E8] text-2xl font-pp-supply-sans w-10 h-10 px-2"
            size={24}
          />
         </span>
        </div>

        <div className="flex flex-row w-full">
          <Summary />
          <div className="flex flex-row w-full">
            <InvoiceData />
          </div>
        </div>
      </div>
    </div>
  );
}
