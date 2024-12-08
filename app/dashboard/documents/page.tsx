import { File, Plus, Trash, Wallet } from "lucide-react";
import React from "react";

const Documents = () => {
  return (
    <div className="flex flex-col gap-12 container w-9/12">
      <div className="flex flex-col gap-8">
        <h3 className="transition-colors font-pp-supply-sans text-2xl">
          Documents
        </h3>
      </div>

      <div className="flex flex-row gap-8">
        <div className="flex flex-row w-full">
          <div className="border px-4 flex items-center gap-4 w-[434px] h-[100px]">
            <span className="bg-[#F6F6F6] w-20 h-20 items-center flex justify-center">
              <Wallet
                className="text-[#C1BFBF]  font-pp-supply-sans"
                size={24}
              />
            </span>
            <div className="flex flex-col">
              <span className="text-2xl text-black font-pp-supply-sans font-extralight">
                0x4037...6538f54
              </span>
              <span className="text-sm text-[#8B8B8B] font-pp-supply-sans font-extralight">
                Ethereum Sepolia
              </span>
            </div>
          </div>

          <div className="border px-8 flex flex-col items-center justify-center w-[23px] h-[100px]">
            <span className="">
              <Trash className="text-[#8A8AA3]" size={24} />
            </span>
          </div>
        </div>
        <div className="flex flex-row w-full">
          <div className="border px-4 flex items-center gap-4 w-[434px] h-[100px]">
            <span className="bg-[#F6F6F6] w-20 h-20 items-center flex justify-center">
              <File className="text-[#C1BFBF]  font-pp-supply-sans" size={24} />
            </span>
            <div className="flex flex-col">
              <span className="text-2xl text-black font-pp-supply-sans font-extralight">
                Grey bank
              </span>
              <span className="text-sm text-[#8B8B8B] font-pp-supply-sans font-extralight">
                800kb
              </span>
            </div>
          </div>

          <div className="border px-8 flex flex-col items-center justify-center w-[23px] h-[100px]">
            <span className="">
              <Trash className="text-[#8A8AA3]" size={24} />
            </span>
          </div>
        </div>
       
      </div>
      <div className="flex flex-row w-full">
          <div className="border px-4 flex items-center justify-center font-pp-supply-sans text-2xl font-extralight gap-4 w-[497px] h-[100px]">
            <Plus />
            Add document
          </div>
        </div>
    </div>
  );
};

export default Documents;
