"use client";

import React from "react";
import { useTypingEffect } from "@/utils/useTypingEffect";

export function NotConnected() {
 
  const text = useTypingEffect(
    `Welcome to Aptos Boilerplate COde! Make sure you have a wallet extension installed. Once you connect your wallet, you'll be able to interact with your custom contract.`
  );


  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="nes-container is-dark with-title">
        <p className="title">Welcome</p>
        <p>{text}</p>
      </div>
    </div>
  );
}
