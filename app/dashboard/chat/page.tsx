"use client";

import { WandSparkles } from "lucide-react";
import React from "react";
import Image from "next/image";
import humanbaseLogo from "@/assets/humanbase_logo.svg";
import { useChat } from 'ai/react';

// import { getRequestsByWalletAddress } from '@/request';

const ChatPage = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  // useEffect(() => {
  //   if (address) getInvoices();
  // }, [getInvoices, address]);

  return (
    <div className="flex w-9/12 flex-col h-screen fixed">
      <div className="w-full py-4">
        <h3 className="font-pp-supply-sans text-2xl text-gray-800">Chat</h3>
      </div>
      <div className="w-9/12 flex justify-end flex-1 flex-col pb-60">
        <div className="flex flex-col gap-12">
          {messages.map((m, index) => (
            <React.Fragment key={index}>
              {m.role === "user" ? (
                <div className="ml-auto w-9/12">
                  <p className="bg-[#F7F7F7] rounded-lg p-4 text-[#727272] text-xl font-pp-neue-montreal">
                    {m.content}
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
                    {m.content}
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div
        className="w-9/12 justify-start items-start fixed bottom-0 py-4 pb-12 gap-4"
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
        <div className="text-[13px] flex mr-28 justify-center font-pp-supply-sans font-extralight transition-colors text-center mt-2">
          Humanbase can make mistakes. Verify important info.
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
