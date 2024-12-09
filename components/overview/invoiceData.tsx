import React from "react";
import { formatEther } from 'viem';

const InvoiceData = ({invoices}: {invoices: any[]}) => {

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
            {invoices.map((invoice, index) => (
              <tr key={index} className="border border-t-0 transition-colors hover:bg-[#f3f3f3] cursor-pointer">
                <td className="py-2 px-4 font-pp-neue-montreal font-normal text-[13px]">
                  {invoice?.id.slice(0, 6)}...{invoice?.id.slice(-4)}
                </td>
                <td className="py-2 px-4 font-pp-neue-montreal font-light text-[13px]">
                  {invoice?.date === "Invalid Date" ? "♾️" : invoice?.date}
                </td>
                <td className="py-2 px-4 font-pp-neue-montreal font-light text-[13px]">
                  {invoice?.buyerInfo?.name || invoice?.sellerInfo?.name || `Client ${index + 1}`}
                </td>
                <td className="py-2 px-4 font-pp-neue-montreal font-light text-[13px]">
                  {formatEther(invoice?.amount)} ETH
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
            {invoices.length === 0 && (
              <tr className="border border-t-0">
                <td className="py-2 px-4 font-pp-neue-montreal font-light text-[13px]">
                  <div className="h-3 w-12 animate-pulse bg-gray-300"></div>
                </td>
                <td className="py-2 px-4 font-pp-neue-montreal font-light text-[13px]">
                  <div className="h-4 w-12 animate-pulse bg-gray-300"></div>
                </td>
                <td className="py-2 px-4 font-pp-neue-montreal font-light text-[13px]">
                  <div className="h-4 w-16 animate-pulse bg-gray-300"></div>
                </td>
                <td className="py-2 px-4 font-pp-neue-montreal font-light text-[13px]">
                  <div className="h-4 w-4 animate-pulse bg-gray-300"></div>
                </td>
                <td className="py-2 px-4">
                  <div className="h-4 w-6 animate-pulse bg-gray-300"></div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoiceData;
