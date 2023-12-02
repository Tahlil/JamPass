import Link from "next/link";
import EventData from "../../data/events.json";
import { AptosClient, Provider, Network } from "aptos";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useCallback, useEffect, useState } from "react";
import { NEXT_PUBLIC_CONTRACT_ADDRESS } from "@/utils/env";

const client = new Provider(Network.DEVNET);

export function MyTickets() {
  const events = EventData.slice(1, 3);
  const { account, network, signAndSubmitTransaction } = useWallet();
  const [allEvents, setAllEvents] = useState(events);

  const fetchValue = useCallback(async () => {
    console.log("fetching info...");

    if (!account?.address) return;
    console.log("Fetching event...");
    const adminResource = await client.getAccountResource(
      NEXT_PUBLIC_CONTRACT_ADDRESS,
      `${NEXT_PUBLIC_CONTRACT_ADDRESS}::test::Config`
    );
    const creatorAddress = adminResource.data.extend_ref.self + "";
    console.log({ creatorAddress });

    // const eventDetailsFromContract = await client.getAccountResource(creatorAddress,
    //     `${NEXT_PUBLIC_CONTRACT_ADDRESS}::test::EventToken`
    //     );
    // console.log({eventDetailsFromContract});

    console.log({ adminResource });
    let value = await client.getTokenOwnedFromCollectionNameAndCreatorAddress(
      adminResource.data.whitelist.inline_vec[0], // TODO: list all event manager events
      "Event Collection Name",
      creatorAddress
    );

    const tickets = [];
    for (const elm of value.current_token_ownerships_v2) {
      console.log(elm.storage_id);
      console.log(elm.current_token_data?.token_name);
      try {
        const ticket =
          await client.getTokenOwnedFromCollectionNameAndCreatorAddress(
            account?.address,
            elm.current_token_data?.token_name + "",
            elm.storage_id
          );
        const eventDetailsFromContract = await client.getAccountResource(
          elm.storage_id,
          `${NEXT_PUBLIC_CONTRACT_ADDRESS}::test::EventToken`
        );
        console.log({ eventDetailsFromContract });

        tickets.push({
          name: elm.current_token_data?.token_name + "",
          datetime: eventDetailsFromContract.data.datetime,
          location: eventDetailsFromContract.data.location,
          description: elm.current_token_data?.description + "",
          agenda: eventDetailsFromContract.data.agenda,
          speakers: eventDetailsFromContract.data.speakers,
          breaks: eventDetailsFromContract.data.breaks,
          registration: eventDetailsFromContract.data.registration,
          contact: eventDetailsFromContract.data.contact,
          emergency: eventDetailsFromContract.data.emergency,
          image: elm.current_token_data?.token_uri + "",
          price: eventDetailsFromContract.data.price,
          transferrable: eventDetailsFromContract.data.transferrable,
          rules: eventDetailsFromContract.data.rules,
        });
       
      } catch (error) {
		
	  }
    }
	setAllEvents((prev) => [...events, ...tickets])
        
  }, [account?.address]);

  useEffect(() => {
    if (!account?.address || !network) return;

    fetchValue();
  }, [account?.address, fetchValue, network]);
  // const event = events[0]
  return (
    <div>
      {allEvents.map((event) => (
        <section className="w-full flex-grow bg-zinc-200 flex items-center justify-center p-4 mb-5">
          <div className="flex w-full max-w-3xl text-zinc-50 h-64">
            <div className="h-full bg-zinc-900 flex items-center justify-center px-8 rounded-l-3xl">
              <img
                src="https://cdn.qrplanet.com/img/kb/5b4352bb6d961556373d88d0/kb/attachments/QPwdrb2XKN.png"
                alt=""
              />
            </div>
            <div className="relative h-full flex flex-col items-center border-dashed justify-between border-2 bg-zinc-900 border-zinc-50">
              <div className="absolute rounded-full w-8 h-8 bg-zinc-200 -top-5"></div>
              <div className="absolute rounded-full w-8 h-8 bg-zinc-200 -bottom-5"></div>
            </div>
            <div className="h-full py-8 px-10 bg-zinc-900 flex-grow rounded-r-3xl flex flex-col">
              <span className="font-bold text-xs">{event.name}</span>

              <div className="flex w-full justify-between items-center">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold">📍</span>
                  <span className="text-zinc-500 text-sm">
                    {event.location}
                  </span>
                </div>

                <div className="flex flex-col flex-grow items-center px-10">
                  <div className="w-full flex items-center mt-2">
                    <div className="w-3 h-3 rounded-full border-2 border-zinc-900"></div>
                    <div className="flex-grow border-t-2 border-zinc-400 border-dotted h-px"></div>
                    <svg
                      width="64px"
                      height="64px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M16.9949 4H6.99488C3.16488 4 2.09488 4.92 2.00488 8.5C3.93488 8.5 5.49488 10.07 5.49488 12C5.49488 13.93 3.93488 15.49 2.00488 15.5C2.09488 19.08 3.16488 20 6.99488 20H16.9949C20.9949 20 21.9949 19 21.9949 15V9C21.9949 5 20.9949 4 16.9949 4Z"
                          stroke="#50198e"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M8.99316 4V7.5"
                          stroke="#50198e"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M8.99316 16.5V20"
                          stroke="#50198e"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M15.025 9.32991L15.645 10.5799C15.705 10.6999 15.825 10.7899 15.955 10.8099L17.335 11.0099C17.675 11.0599 17.815 11.4799 17.565 11.7199L16.565 12.6899C16.465 12.7799 16.425 12.9199 16.445 13.0599L16.685 14.4299C16.745 14.7699 16.385 15.0299 16.085 14.8699L14.855 14.2199C14.735 14.1599 14.585 14.1599 14.465 14.2199L13.235 14.8699C12.925 15.0299 12.575 14.7699 12.635 14.4299L12.875 13.0599C12.895 12.9199 12.855 12.7899 12.755 12.6899L11.765 11.7199C11.515 11.4799 11.655 11.0599 11.995 11.0099L13.375 10.8099C13.515 10.7899 13.625 10.7099 13.685 10.5799L14.295 9.32991C14.435 9.01991 14.875 9.01991 15.025 9.32991Z"
                          stroke="#50198e"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                    <div className="flex-grow border-t-2 border-zinc-400 border-dotted h-px"></div>
                    <div className="w-3 h-3 rounded-full border-2 border-zinc-900"></div>
                  </div>
                  <div className="flex items-center px-3 py-2 rounded-full bg-lime-400">
                    <span className="text-sm text-zinc-900">{event.price}</span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xl font-bold">⏳</span>
                  <p className="text-zinc-500 text-sm text-bold">
                    {event.datetime}
                  </p>
                </div>
              </div>
              <div className="flex w-full mt-auto justify-between p-3 text-sm">
                {event.description}
              </div>
            </div>
          </div>
          <img src={event.image} width="200" className="mb-11" />
        </section>
      ))}
    </div>
  );
}
