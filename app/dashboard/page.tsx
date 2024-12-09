"use client";
import InvoiceData from "@/components/overview/invoiceData";
import Summary from "@/components/overview/summary";
import { Download, LoaderPinwheel } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useAppKitAccount } from "@reown/appkit/react";
import { getRequestsByWalletAddress } from '@/request';

export default function Dashboard() {
  const { address } = useAppKitAccount();
  const [invoices, setInvoices] = useState<any[]>([]);
  const [invoicesSummary, setInvoicesSummary] = useState<{title: string, value: number}[]>([]);

    const formatInvoice = (invoice: any) => {
    if (!invoice) return null;
    const buyerInfo = {
      name: invoice.contentData?.buyerInfo?.businessName,
      address: invoice.payer?.value,
      email: invoice.contentData.buyerInfo?.email,
    };
    const sellerInfo = {
      name: invoice.contentData?.sellerInfo?.businessName,
      address: invoice.payee?.value,
      email: invoice.contentData.sellerInfo?.email,
    };
    const status =
      invoice.balance?.balance === invoice.expectedAmount ? 'Paid' : 'Pending';
    const items = invoice.contentData?.invoiceItems?.map((item: { quantity: any; unitPrice: any; }) => ({
      ...item,
      total: Number(item.quantity) * Number(item.unitPrice),
    }));
    console.log(
      {
        id: invoice.requestId,
        amount: invoice.expectedAmount,
        date: new Date(invoice.contentData?.creationDate).toLocaleDateString(),
        buyerInfo,
        sellerInfo,
        status,
        items,
      }
    )
    return {
      id: invoice.requestId,
      amount: invoice.expectedAmount,
      date: new Date(invoice.contentData?.creationDate).toLocaleDateString(),
      buyerInfo,
      sellerInfo,
      status,
      items,
    };
  };

  const getInvoices = useCallback(async () => {
    const res = await getRequestsByWalletAddress(address);
    const totalNumber = res.length;
    const pending = res.filter((item) => item.balance?.balance === '0');
    const paid = res.filter(
      (item) => item.balance?.balance === item.expectedAmount
    );
    const totalRevenue = res
      .filter((item) => item.payee?.value == address)
      .reduce((total, item) => total + Number(item.expectedAmount), 0);

    setInvoices(res.map((item) => formatInvoice(item)));
    setInvoicesSummary([
      {
        title: "Total Invoices",
        value: totalNumber,
      },
      {
        title: "Pending Invoices",
        value: pending.length,
      },
      {
        title: "Paid Invoices",
        value: paid.length,
      },
      {
        title: "Total Revenue",
        value: totalRevenue,
      }
    ]);
  }, [address]);

  useEffect(() => {
    if (address) getInvoices();
  }, [getInvoices, address]);

  return (
    <div className="flex flex-col gap-12 container w-9/12">
      <div className="flex flex-col gap-8">
        <h3 className="transition-colors font-pp-supply-sans text-2xl">
          Overview
        </h3>
        <div className="flex flex-row w-full">
        {invoicesSummary.length === 0 && Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="border px-8 flex flex-col items-start justify-center w-[263px] h-[100px]">
              <span className="text-2xl transition-colors font-pp-supply-sans font-extralight">
                <LoaderPinwheel className="animate-spin w-10 h-10" size={24} />
              </span>
              <span className="text-sm transition-colors font-pp-supply-sans font-extralight">
                Loading
              </span>
            </div>
          ))}
          
          {invoicesSummary && invoicesSummary?.map((invoice, index) => (
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
            <InvoiceData invoices={invoices} />
          </div>
        </div>
      </div>
    </div>
  );
}
