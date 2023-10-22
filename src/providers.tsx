import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";

import { WagmiConfig } from "wagmi";
import config from "./config";

const projectId = "1b601fd580e1a39d1897a52fc558177b";

const metadata = {
  name: "Buy me cupcake",
};

const chains = config.chains;
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

createWeb3Modal({ wagmiConfig, projectId, chains, defaultChain: chains[0] });

export default function Providers({ children }: { children: React.ReactNode }) {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}
