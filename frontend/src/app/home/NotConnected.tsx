"use client";

import React from "react";
import { useTypingEffect } from "@/utils/useTypingEffect";

export function NotConnected() {
 
  const text = useTypingEffect(
    `Jampass operates as an innovative event ticketing platform designed to provide seamless access to a wide range of events and activities. Users can browse, select, and purchase tickets for various events, from concerts and sports games to cultural festivals. Please connect to wallet to start the app`
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
