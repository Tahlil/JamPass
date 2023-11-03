"use client";

import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { Connected } from "../home/Connected";
import { Header, FixedSizeWrapper } from "../page";
import { NotConnected } from "../home/NotConnected";
import Navigation from "@/components/navigation";

export function Events() {
  const { connected } = useWallet();

  if (connected)
    return (
      <FixedSizeWrapper>
        <Header />
        <Navigation />
        <Connected element="ticket" />
      </FixedSizeWrapper>
    );

  return <NotConnected />;
}

export default Events;
