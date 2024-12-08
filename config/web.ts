import { Chain } from "wagmi/chains";

export const projectId =
  process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID ||
  "8c5c43b65e4a8cea2c10511cbbed36c4";

// Set up metadata
export const metadata = {
  name: "Humanbase",
  description: "AppKit Example",
  url: "https://reown.com/appkit", // origin must match your domain & subdomain
  icons: ["https://assets.reown.com/reown-profile-pic.png"],
};

export const chains: Chain[] = [
  {
    id: 1,
    name: "Ethereum",
    nativeCurrency: {
      decimals: 18,
      name: "Ether",
      symbol: "ETH",
    },
    rpcUrls: {
      public: { http: ["https://eth.llamarpc.com"] },
      default: { http: ["https://eth.llamarpc.com"] },
    },
    blockExplorers: {
      etherscan: { name: "Etherscan", url: "https://etherscan.io" },
      default: { name: "Etherscan", url: "https://etherscan.io" },
    },
  },
];
