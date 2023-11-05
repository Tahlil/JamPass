"use client";

import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { Connected } from "../home/Connected";
import { Header, FixedSizeWrapper } from "../page";
import { NotConnected } from "../home/NotConnected";
import Navigation from "@/components/navigation";

export function CreateEvents() {
  const { connected } = useWallet();

  if (connected)
    return (
      <FixedSizeWrapper>
        <Header />
        <Navigation />
        <Connected element="create" />
      </FixedSizeWrapper>
    );

  return <NotConnected />;
}

export default CreateEvents;