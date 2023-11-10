import { SetStateAction, useCallback, useEffect, useState } from "react";
import EventData from "../../data/events.json";
import { EventDetails } from "../EventDetails";
import { ToastContainer, toast } from "react-toastify";

import { NEXT_PUBLIC_CONTRACT_ADDRESS } from "@/utils/env";

import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { AptosClient, Provider, Network } from "aptos";

const client = new Provider(Network.DEVNET);
export function Events(props: { userType: string }) {
  const [allEventsSet, setAllEventsSet] = useState<Boolean>(true);
  const [allEvents, setAllEvents] = useState(EventData);
  const [eventDetails, setEvent] = useState<Event>();
  const [transactionInProgress, setTransactionInProgress] =
    useState<boolean>(false);
  const { account, network, signAndSubmitTransaction } = useWallet();

  function goToEventDetails(event: any) {
    setEvent(event);
    setAllEventsSet(false);
  }

  function gotoEvent() {
    setAllEventsSet(true);
  }

  const fetchValue = useCallback(async () => {
    if (!account?.address) return;
    console.log("Fetching event...")
    const adminResource = await client.getAccountResource(
      NEXT_PUBLIC_CONTRACT_ADDRESS,
      `${NEXT_PUBLIC_CONTRACT_ADDRESS}::test1::Config`
    );
    const creatorAddress = adminResource.data.extend_ref.self + "";

    console.log("Admin addresses Resources:");
    console.log(adminResource.data.whitelist.inline_vec[0])
    console.log(adminResource.data.extend_ref.self);
    let value = await client.getTokenOwnedFromCollectionNameAndCreatorAddress(
      adminResource.data.whitelist.inline_vec[0], // TODO: list all event manager events
      "Event Collection Name",
      creatorAddress
    );
    let eventsFromContract: SetStateAction<({ name: string; datetime: string; location: string; description: string; agenda: string; speakers: string; breaks: string; registration: string; contact: string; emergency: string; rules: string; image: string; price: string; transferrable: boolean; } | { name: string; datetime: string; location: string; description: string; agenda: string; speakers: string; breaks: string; registration: string; contact: string; emergency: string; image: string; price: string; rules?: undefined; transferrable?: undefined; } | { name: string; datetime: string; location: string; description: string; agenda: string; speakers: string; breaks: string; registration: string; contact: string; emergency: string; image: string; price: string; transferrable: boolean; rules?: undefined; })[]> | { name: string; datetime: any; location: any; description: string; agenda: any; speakers: any; breaks: any; registration: any; contact: any; emergency: any; image: string; price: any; transferrable: any; rules: any; }[] = []
    console.log({ value });
    const allTokens = value.current_token_ownerships_v2;
    for(let i=0; i<allTokens.length ; i++){
        const token = allTokens[i]
        const eventDetails = await client.getAccountResource(token.storage_id,
            `${NEXT_PUBLIC_CONTRACT_ADDRESS}::test1::EventToken`
            );
        console.log({eventDetails});
        console.log(eventDetails.data);
        
        eventsFromContract.push({
            name: token.current_token_data?.token_name+"",
            datetime: eventDetails.data.datetime,
            location: eventDetails.data.location,
            description: token.current_token_data?.description+"",
            agenda: eventDetails.data.agenda,
            speakers: eventDetails.data.speakers,
            breaks: eventDetails.data.breaks,
            registration: eventDetails.data.registration,
            contact: eventDetails.data.contact,
            emergency: eventDetails.data.emergency,
            image: token.current_token_data?.token_uri+"",
            price: eventDetails.data.price,
            transferrable: eventDetails.data.transferrable,
            rules: eventDetails.data.rules
        });
    }
  
    console.log("setting all events:")
    console.log({allEvents})
    console.log(eventsFromContract)
    setAllEvents((prev) => [...EventData, ...eventsFromContract])
    console.log({allEvents})
  }, [account?.address]);

  useEffect(() => {
    if (!account?.address || !network) return;

    fetchValue();
  }, [account?.address, fetchValue, network]);

  const buyTicket = async (e: any) => {
    e.preventDefault();
    if (!account?.address) return;
    console.log("buying ticket...");
    const payload = {
        function: `${NEXT_PUBLIC_CONTRACT_ADDRESS}::test1::event_token_address`,
        type_arguments: [],
        arguments: ["TestName"],
    };
    const resources = await client.view(payload);
    console.log(resources[0])
    // Returns the cleaned data in a standard, diges
    // setTransactionInProgress(true);
    // const payload = {
    //   type: "entry_function_payload",
    //   function: `${NEXT_PUBLIC_CONTRACT_ADDRESS}::test1::buy_ticket`,
    //   type_arguments: [],
    //   arguments: [
    //     "Test9 Description",
    //     "Test9 name",
    //     "https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg",
    //     "ticket9_collection",
    //     "ticket9_collection_description",
    //     "https://cdn.pixabay.com/photo/2018/03/19/00/40/entries-3238747_1280.png",
    //   ],
    // };

    try {
    //   // sign and submit transaction to chain
    //   const response = await signAndSubmitTransaction(payload);
    //   console.log({ response });

    //   toast(
    //     <span>
    //       Tx successful!{" "}
    //       <a
    //         href={`https://explorer.aptoslabs.com/txn/${response.version}?network=devnet`}
    //         target="_blank"
    //         className="underline p-1"
    //       >
    //         {" "}
    //         TX Link{" "}
    //       </a>
    //     </span>
    //   );
    //   // wait for transaction
    //   await client.waitForTransaction(response.hash);
    } catch (error) {
      console.log("error", error);
      console.log({ error });
    } finally {
      setTransactionInProgress(false);
    }
  };

  return (
    <>
      {allEventsSet ? (
        <>
          <div className="flex items-center bg-indigo-100">
            <ToastContainer />
            <div className="container ml-auto mr-auto flex flex-wrap items-start">
              <div className="w-full pl-5 lg:pl-2 mb-4 mt-4">
                <h1 className="text-3xl lg:text-4xl text-gray-700 font-extrabold">
                  All Events
                </h1>
              </div>
              {allEvents.map((event) => (
                <div
                  className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2"
                  onClick={() => goToEventDetails(event)}
                >
                  <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                    <figure className="mb-2">
                      <img
                        src={event.image}
                        alt=""
                        className="h-64 ml-auto mr-auto"
                      />
                    </figure>
                    <div className="rounded-lg p-4 bg-purple-700 flex flex-col">
                      <div>
                        <h5 className="text-white text-2xl font-bold leading-none h-24">
                          {event.name}
                        </h5>
                        <h5 className="text-xs text-gray-400 h-[150px] pt-3">
                          {event.description}
                        </h5>
                      </div>
                      <div className="flex items-center">
                        <div className="text-lg text-white font-light">
                          {event.price}
                        </div>
                        <button className="rounded-full bg-purple-900 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="stroke-current m-auto"
                          >
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                          </svg>
                        </button>
                      </div>
                      <div className="text-red-200 font-light m-2 h-[130px]">
                        📍 <h5>{event.location}</h5>
                      </div>
                      <div className="text-amber-500 font-light">
                        🕰 {event.datetime}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="mb-5">
            <EventDetails {...eventDetails} />
          </div>
          {props.userType === "customer" && (
            <div className="mb-10">
              <section>
                <button
                  type="button"
                  className="nes-btn is-primary"
                  onClick={() => {
                    document.getElementById("dialog-rounded").showModal();
                  }}
                >
                  Buy Ticket 🎫
                </button>
                <dialog className="nes-dialog is-rounded" id="dialog-rounded">
                  <form method="dialog">
                    <p className="title p-3">Click confirm to buy ticket</p>
                    <p>Event Name: {eventDetails?.name}</p>
                    <menu className="dialog-menu p-3">
                      <button className="nes-btn m-2">Cancel</button>
                      <button
                        onClick={(e) => {
                            buyTicket(e);
                        }}
                        className="nes-btn is-primary"
                      >
                        Confirm Buy Ticket 🎫
                      </button>
                    </menu>
                  </form>
                </dialog>
              </section>
            </div>
          )}

          <div>
            <button
              onClick={() => {
                gotoEvent();
              }}
              className="rounded-full bg-purple-900 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl duration-300 p-3"
            >
              GO To Events Page
            </button>
          </div>
        </>
      )}
    </>
  );
}
