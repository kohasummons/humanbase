"use client";

import { WandSparkles } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import humanbaseLogo from "@/assets/humanbase_logo.svg";
import { useChat } from 'ai/react';

import { getRequestsByWalletAddress } from '@/request';
import { useAppKitAccount } from "@reown/appkit/react";

const ChatPage = () => {
  const [invoices, setInvoices] = useState<any[]>([]);
  const { messages, input, handleInputChange, handleSubmit: originalHandleSubmit } = useChat();
  const { address } = useAppKitAccount();

  const getInvoices = useCallback(async () => {
    const res = await getRequestsByWalletAddress(address);
    setInvoices(res);
  }, [address]);


  useEffect(() => {
    if (address) getInvoices();
  }, [getInvoices, address]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const res = await getRequestsByWalletAddress(address);
    const invoiceContext = {
      totalInvoices: res.length,
      pendingInvoices: res.filter((item) => item.balance?.balance === '0').length,
      paidInvoices: res.filter((item) => item.balance?.balance === item.expectedAmount).length,
      totalRevenue: res.filter((item) => item.payee?.value == address)
        .reduce((total, item) => total + Number(item.expectedAmount), 0)
    };

    originalHandleSubmit(e, {
      data: {
        invoicesSummary: invoiceContext,
        invoices: invoices
      }
    });
  };

  return (
    <div className=" w-full flex flex-col h-screen overflow-y-scroll scrollbar-hide">
      <div className="w-full py-4 fixed">
        <h3 className="font-pp-supply-sans text-2xl text-gray-800">Chat</h3>
      </div>
      <div className="w-[calc(100dvw-500px)] mx-auto flex justify-end flex-1 flex-col pb-60">
        <div className="flex flex-col overflow-y-auto scrollbar-hide gap-12">
          {messages.map((m, index) => (
            <React.Fragment key={index}>
              {m.role === "user" ? (
                <div className="ml-auto w-[600px]">
                  <p className="bg-[#F7F7F7] rounded-lg p-4 text-[#727272] text-xl font-pp-neue-montreal">
                    {m?.content}
                  </p>
                </div>
              ) :(
                <div className="flex gap-4 items-start">
                  <Image
                    src={humanbaseLogo}
                    alt="Humanbase"
                    width={40}
                    height={40}
                  />
                  <div className="bg-white pt-0 pb-2 rounded-lg text-xl text-[#727272] font-pp-neue-montreal">
                    {m?.content}
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div
        className="w-11/12 justify-start items-start fixed bottom-0 py-4 pb-12 gap-4"
        style={{ zIndex: 50 }}
      >
        <div className="w-10/12">
          <div className="flex flex-row bg-[#F7F7F7] w-full text-center items-center mb-6">
            <input
              type="text"
              placeholder="How many unpaid invoices do I have?"
              value={input}
              onChange={handleInputChange}
              className="flex-1 bg-transparent px-4 py-4 text-gray-700 shadow-sm focus:outline-none"
            />
            <button onClick={handleSubmit}>
              <WandSparkles
                className="text-white border bg-black text-2xl font-pp-supply-sans w-14 h-14 px-2"
                size={24}
              />
            </button>
          </div>
        </div>
        <div className="text-[13px] flex justify-center font-pp-supply-sans font-extralight transition-colors text-center mt-2">
          Humanbase can make mistakes. Verify important info.
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
