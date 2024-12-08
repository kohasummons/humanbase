"use client";

import Link from "next/link";
import { cn, truncateAddress } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  MessageSquare,
  FileText,
  Files,
  CircleGauge,
  WalletCards,
} from "lucide-react";
import humanbaseLogo from "@/assets/humanbase_logo.svg";
// import profilePicture from "@/assets/profile_picture.png";

import { useAppKitAccount, useAppKit } from "@reown/appkit/react";

const navItems = [
  { icon: CircleGauge, label: "Overview", path: "/dashboard" },
  { icon: MessageSquare, label: "Chat", path: "/dashboard/chat" },
  { icon: FileText, label: "Statements", path: "/dashboard/statements" },
  { icon: Files, label: "Documents", path: "/dashboard/documents" },
];

export function Sidebar() {
  const pathname = usePathname();
  const { isConnected, address } = useAppKitAccount();
  const { open } = useAppKit();

  const handleWalletClick = () => {
    if (!isConnected) {
      open();
    } else {
      open({ view: "Account" });
    }
  };

  return (
    <div className="w-64 pt-6 px-8 bg-white h-screen flex flex-col ">
      <div className="p-4">
        <Link href="/" className="font-medium flex items-center gap-2">
          <Image src={humanbaseLogo} alt="Humanbase" width={40} height={40} />
          <span className="text-xl font-medium font-pp-neue-montreal">
            Humanbase
          </span>
        </Link>
      </div>
      <nav className="flex-1 p-4">
        <ul className="">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;
            return (
              <li key={item?.path}>
                <Link
                  href={item?.path}
                  className={cn(
                    `flex text-sm items-center gap-3 px-4 py-2 transition-colors font-pp-supply-sans`,
                    {
                      "bg-[#F7F7F8] text-shock-orange": isActive,
                      "hover:bg-[#F7F7F8]": !isActive,
                    }
                  )}
                >
                  <Icon
                    className={cn({
                      "text-[#8A8AA3]": !isActive,
                    })}
                    size={20}
                  />
                  <span>{item?.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div
        onClick={handleWalletClick}
        className="hover:bg-[#F7F7F8] h-auto mb-12 cursor-pointer flex text-base items-center gap-3 px-4 py-2 transition-colors font-pp-supply-sans"
      >
        <WalletCards size={24} />
        <p>{isConnected ? truncateAddress(address || "") : "Connect Wallet"}</p>
      </div>
    </div>
  );
}
