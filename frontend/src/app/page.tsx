import dynamic from "next/dynamic";
import { Body } from "./home/Body";
import { PropsWithChildren } from "react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";


export const FixedSizeWrapper = ({ children }: PropsWithChildren) => {
  const fixedStyle = {
    width: "1200px",
    // height: "800px",
    border: "6px solid",
    margin: "auto",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // height: "100vh",
        marginTop: "5rem"
      }}
    >
      <div style={fixedStyle}>{children}</div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="flex flex-col">
      <FixedSizeWrapper>
        <Header />
        <Body />
      </FixedSizeWrapper>
    </main>
  );
}

export function Header() {
 
  return (
    <header className="sticky top-0 z-10 flex justify-between items-center px-6 py-4 bg-gradient-to-r from-orange-300 via-orange-400 to-red-400 shadow-md w-full gap-2">
       <img src="JamPass.png" height={130} width={130} alt="" />
  
      <WalletButtons />
    </header>
  );
}

const WalletButtons = dynamic(
  async () => {
    const { WalletButtons } = await import("@/components/WalletButtons");
    return { default: WalletButtons };
  },
  {
    loading: () => (
      <div className="nes-btn is-primary opacity-50 cursor-not-allowed">
        Loading...
      </div>
    ),
    ssr: false,
  }
);
