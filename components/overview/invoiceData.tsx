import React from "react";

const invoiceInfo = [
  {
    invoiceId: "#Graw-001",
    dateIssued: "5 / 10 / 1034",
    name: "Joshua Omobola",
    amount: "1 ETH",
    status: "Paid",
  },
  {
    invoiceId: "#Graw-001",
    dateIssued: "5 / 10 / 1034",
    name: "Joshua Omobola",
    amount: "1 ETH",
    status: "Pending",
  },
  {
    invoiceId: "#Graw-001",
    dateIssued: "5 / 10 / 1034",
    name: "Joshua Omobola",
    amount: "1 ETH",
    status: "Overdue",
  },
];

const InvoiceData = () => {
  return (
    <div className="container">
      <div className="border px-8 py-4 flex flex-col w-[668px] h-[479px]">
        <table className="table-auto w-full text-left">
          <thead>
            <tr className="border border-[#EFEFEF]">
              <th className="font-pp-supply-sans font-extralight text-sm py-2 px-4">
                Invoice ID
              </th>
              <th className="font-pp-supply-sans font-extralight text-sm py-2 px-4">
                Date Issued
              </th>
              <th className="font-pp-supply-sans font-extralight text-sm py-2 px-4">
                Name
              </th>
              <th className="font-pp-supply-sans font-extralight text-sm py-2 px-4">
                Amount
              </th>
              <th className="font-pp-supply-sans font-extralight text-sm py-2 px-4">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {invoiceInfo.map((invoice, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4 font-pp-neue-montreal font-light text-[13px]">
                  {invoice?.invoiceId}
                </td>
                <td className="py-2 px-4 font-pp-neue-montreal font-light text-[13px]">
                  {invoice?.dateIssued}
                </td>
                <td className="py-2 px-4 font-pp-neue-montreal font-light text-[13px]">
                  {invoice?.name}
                </td>
                <td className="py-2 px-4 font-pp-neue-montreal font-light text-[13px]">
                  {invoice?.amount}
                </td>
                <td className="py-2 px-4">
                  <span
                    className={`px-2 py-1 text-[13px] font-pp-neue-montreal ${
                      invoice.status === "Paid"
                        ? "bg-green-200 text-green-700"
                        : invoice.status === "Pending"
                        ? "bg-orange-200 text-orange-700"
                        : "bg-red-200 text-red-700"
                    }`}
                  >
                    {invoice.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoiceData;
