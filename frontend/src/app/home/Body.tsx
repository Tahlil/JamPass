"use client";

import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { Connected } from "./Connected";
import { NotConnected } from "./NotConnected";
import Navigation from "@/components/navigation";

export function Body() {
  const { connected } = useWallet();

  if (connected) return (
    <>
     <Navigation />
     <Connected />
    </>
   
  )

  return <NotConnected />;
}
