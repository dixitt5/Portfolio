import React from "react";
import App from "./App";
import "@rainbow-me/rainbowkit/styles.css";
import {
  RainbowKitProvider,
  getDefaultWallets,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { mainnet, polygon, polygonMumbai, sepolia, goerli } from "wagmi/chains";

const { chains, provider } = configureChains(
  /**@notice you can add or remove more chains as you see fit*/
  [mainnet, polygon, polygonMumbai, sepolia, goerli],
  /**@notice This is Alchemy's default API key.
      You can get your own at https://dashboard.alchemyapi.io */
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Portfolio",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const RainbowAppWrapper = () => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        coolMode
        chains={chains}
        theme={darkTheme({
          accentColor: "white",
          accentColorForeground: "black",
          borderRadius: "medium",
          fontStack: "system",
          overlayBlur: "small",
        })}
      >
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default RainbowAppWrapper;
