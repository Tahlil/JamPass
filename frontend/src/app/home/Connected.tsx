"use client";

import { useState, useEffect, useCallback } from "react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { NEXT_PUBLIC_CONTRACT_ADDRESS } from "@/utils/env";
import { AptosClient } from "aptos";

const client = new AptosClient("https://fullnode.devnet.aptoslabs.com");

export function Connected() {

  const [address, setAddress] = useState<String>("");
  const [accountIsWhitelisted, setAccountIsWhitelisted] = useState(false);
  const [transactionInProgress, setTransactionInProgress] =
    useState<boolean>(false);
  const { account, network, signAndSubmitTransaction } = useWallet();
  

  const whitelistAddress = async () => {
    if (!account?.address) return;
    setTransactionInProgress(true);
    console.log({ address });
    const payload = {
      type: "entry_function_payload",
      function: `${NEXT_PUBLIC_CONTRACT_ADDRESS}::test::whitelist_event_manager`,
      type_arguments: [],
      arguments: [address],
    };
 
    try {
      // sign and submit transaction to chain
      const response = await signAndSubmitTransaction(payload);
      console.log({response})
      // wait for transaction
      await client.waitForTransaction(response.hash);
    } catch (error) {
      console.log("error", error);
      console.log({error});
    } finally {
      setTransactionInProgress(false);
    }
  };

  const createEvent = async () => {
    if (!account?.address) return;
    setTransactionInProgress(true);
    console.log({ address });
    const payload = {
      type: "entry_function_payload",
      function: `${NEXT_PUBLIC_CONTRACT_ADDRESS}::test::mint_event`,
      type_arguments: [],
      arguments: ["eventCollection", "Test desc", 11, "name", "https://images.lumacdn.com/cdn-cgi/image", "as", "df", "jk"],
    };
 
    try {
      // sign and submit transaction to chain
      const response = await signAndSubmitTransaction(payload);
      console.log({response})
      // wait for transaction
      await client.waitForTransaction(response.hash);
    } catch (error) {
      console.log("error", error);
      console.log({error});
    } finally {
      setTransactionInProgress(false);
    }
  };

  return (
    <div className="flex flex-col gap-3 p-3">
      <div className="text-center">
        <p className="font-medium">
          Connected to
          <p className="bg-blue-100 text-blue-800 text-s font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
            {network?.name}
          </p>
        </p>
        <p className="font-medium">
          Connected address
          <p className="bg-blue-100 text-blue-800 text-s font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
            {account?.address}
          </p>
        </p>
        <div>
        <div className="flex rounded-md shadow-sm m-11">
            <span className="px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400">
              Address to Whitelist
            </span>
            <input
              type="text"
              onChange={(event) => setAddress(event.target.value + "")}
              className="py-2 px-12 pr-11 block w-full border-gray-200 shadow-sm rounded-r-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
              placeholder="public address"
            />
          </div>  

          <div className="flex items-center justify-center">
            <button
              onClick={whitelistAddress}
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Whitelist Address 📝
            </button>
          </div>

          <div className='flex'>
        <div className='p-10 bg-gradient-to-r from-purple-100'>
                 <h1 className="text-2xl">Account Type: <span className="text-purple-600">{
                 NEXT_PUBLIC_CONTRACT_ADDRESS === account?.address ? "Admin" : (accountIsWhitelisted ? "Whitelisted Event Manager" : "Customer")
                 } </span>  </h1>

        </div>
    </div>

    <div className="flex items-center justify-center m-2">
            <button
              onClick={createEvent}
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Create Event 📢
            </button>
          </div>


          <div>
         
</div>
        
        </div>

      </div>
    </div>
  );
}
