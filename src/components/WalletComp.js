import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";
import { useAccount } from "wagmi";
import { useContract, useSigner } from "wagmi";

function WalletComp() {
  const { address, isConnecting, isDisconnected } = useAccount();
  const { data: signer, isError, isLoading } = useSigner();
  console.log(signer);
  if (isConnecting) return <div>Connecting…</div>;
  return (
    <div>
      <ConnectButton label="Mint NFT" />
      
    </div>
  );
}

export default WalletComp;
