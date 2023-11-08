import { Datepicker } from "flowbite-react";
import { useRouter } from 'next/router'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect, useCallback, MouseEvent } from "react";
import { NEXT_PUBLIC_CONTRACT_ADDRESS } from "@/utils/env";

import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { AptosClient } from "aptos";

const client = new AptosClient("https://fullnode.devnet.aptoslabs.com");
export function CreateEventForm() {
  const router = useRouter()
  const [transactionInProgress, setTransactionInProgress] =
    useState<boolean>(false);

  const [name, setName] = useState("");
  const [datetime, setDatetime] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [agenda, setAgenda] = useState("");
  const [speakers, setSpeakers] = useState("");
  const [breaks, setBreaks] = useState("");
  const [registration, setRegistration] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emergency, setEmergency] = useState("");
  const [rules, setRules] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [price, setPrice] = useState("");
  const [transferrable, setTransferrable] = useState(true);

  const { account, network, signAndSubmitTransaction } = useWallet();

  const createEvent = async (e: any) => {
    e.preventDefault();
    if (!account?.address) return;
    console.log({
        name,
        datetime,
        location,
        description,
        agenda,
        speakers,
        breaks,
        registration,
        email,
        phone,
        emergency,
        rules,
        imageLink,
        price,
        transferrable
    })
    console.log("Creating event...");
    setTransactionInProgress(true);
    const payload = {
      type: "entry_function_payload",
      function: `${NEXT_PUBLIC_CONTRACT_ADDRESS}::test1::mint_event`,
      type_arguments: [],
      arguments: [
        description,
        name,
        imageLink,
        datetime,
        location,
        agenda,
        speakers,
        breaks,
        registration,
        `Email: ${email}, Phone: ${phone}`,
        emergency,
        rules,
        price,
        transferrable,
        name,
        description,
        ""
      ],
    };

    try {
      // sign and submit transaction to chain
      const response = await signAndSubmitTransaction(payload);
      console.log({ response });

      toast(
        <span>
          Tx successful!{" "}
          <a
            href={`https://explorer.aptoslabs.com/txn/${response.version}?network=devnet`}
            target="_blank"
            className="underline p-1"
          >
            {" "}
            TX Link{" "}
          </a>
        </span>
      );
      // wait for transaction
      await client.waitForTransaction(response.hash);
      router.push('/events')
    } catch (error) {
      console.log("error", error);
      console.log({ error });
    } finally {
      setTransactionInProgress(false);
    }
  };

  return (
    <div>
      <ToastContainer />
      <h1 className="text-transparent bg-clip-text text-5xl bg-gradient-to-r to-emerald-600 from-sky-400 mb-2">
        Create Event
      </h1>

      <div className="bg-purple-200 p-3 flex items-center align-top text-lg">
        <div className="flex flex-col items-start">
          <img
            className="py-3"
            width={"350px"}
            src="https://thumbs.dreamstime.com/b/vertical-shot-electronic-music-festival-electrifinity-bad-aibling-dj-dancing-crowd-vertical-shot-260429060.jpg"
          />
          <img
            className="py-3"
            width={"350px"}
            src="https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbmNlcnR8ZW58MHx8MHx8fDA%3D"
          />
          <img
            className="py-3"
            width={"350px"}
            src="https://img.freepik.com/premium-photo/people-walking-large-room-with-lot-lights_524486-786.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1699056000&semt=ais"
          />
          <img
            className="py-3"
            width={"350px"}
            src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbmZlcmVuY2V8ZW58MHx8MHx8fDA%3D"
          />
          <img
            className="py-3"
            width={"350px"}
            src="https://media.istockphoto.com/id/1363169212/photo/girl-holds-tickets-boarding-passes-for-a-flight.jpg?s=612x612&w=0&k=20&c=sLpjtW-G0r8jQX9HNZf2ldnlS57xJgxAIIJYCtI_AiY="
          />

          <img
            className="py-3"
            width={"350px"}
            src="https://crokepark.ie/BlankSite/media/optimised/Home/EOTF-590.jpg?ext=.jpg"
          />
         
        </div>

        <form action="" className="mx-auto rounded">
          <div className="shadow w-[115%] p-3">
            <div className="flex flex-row items-center bg-purple-400 rounded-b-lg border-purple-500 mb-10">
              <label
                htmlFor="name"
                className="w-[30%] text-right p-4 mr-8 text-purple-200"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Event name"
                onChange={(e) => setName(e.currentTarget.value)}
                className="flex w-[100%] p-4 pl-0 bg-transparent placeholder-purple-300 outline-none text-white overflow-ellipsis overflow-hidden"
              />
            </div>

            <div className="box border rounded flex flex-col shadow bg-white bg-purple-400 border-purple-500 mb-10">
              <div className="box__title bg-purple-400 text-purple-200 px-3 py-2 border-b">
                <h3 className="text-sm text-grey-darker font-medium">
                  Description
                </h3>
              </div>
              <textarea
                placeholder="Event description"
                className="text-grey-darkest h-32 p-2 m-1 bg-transparent resize-y rounded-md"
                name="description"
                onChange={(e) => setDescription(e.currentTarget.value)}
              ></textarea>
            </div>

            <div className="box border rounded flex flex-col shadow bg-white bg-purple-400 border-purple-500 mb-10">
              <div className="box__title bg-purple-400 text-purple-200 px-3 py-2 border-b">
                <h3 className="text-sm text-grey-darker font-medium">
                  Agendas
                </h3>
              </div>
              <textarea
                placeholder="Event agendas"
                className="text-grey-darkest h-32 p-2 m-1 bg-transparent resize-y rounded-md"
                name="agendas"
                onChange={(e) => setAgenda(e.currentTarget.value)}
              ></textarea>
            </div>

            <div className="box border rounded flex flex-col shadow bg-white bg-purple-400 border-purple-500 mb-10">
              <div className="box__title bg-purple-400 text-purple-200 px-3 py-2 border-b">
                <h3 className="text-sm text-grey-darker font-medium">
                  Speakers
                </h3>
              </div>
              <textarea
                placeholder="Event speakers"
                className="text-grey-darkest h-32 p-2 m-1 bg-transparent resize-y rounded-md"
                name="speakers"
                onChange={(e) => setSpeakers(e.currentTarget.value)}
              ></textarea>
            </div>

            <div className="box border rounded flex flex-col shadow bg-white bg-purple-400 border-purple-500 mb-10">
              <div className="box__title bg-purple-400 text-purple-200 px-3 py-2 border-b">
                <h3 className="text-sm text-grey-darker font-medium">Breaks</h3>
              </div>
              <textarea
                placeholder="Event breaks"
                className="text-grey-darkest h-32 p-2 m-1 bg-transparent resize-y rounded-md"
                name="breaks"
                onChange={(e) => setBreaks(e.currentTarget.value)}
              ></textarea>
            </div>

            <div className="box border rounded flex flex-col shadow bg-white bg-purple-400 border-purple-500 mb-10">
              <div className="box__title bg-purple-400 text-purple-200 px-3 py-2 border-b">
                <h3 className="text-sm text-grey-darker font-medium">
                  Registration
                </h3>
              </div>
              <textarea
                placeholder="Enter registration process"
                className="text-grey-darkest h-32 p-2 m-1 bg-transparent resize-y rounded-md"
                name="registration"
                onChange={(e) => setRegistration(e.currentTarget.value)}
              ></textarea>
            </div>

            <div className="box border rounded flex flex-col shadow bg-white bg-purple-400 border-purple-500 mb-10">
              <div className="box__title bg-purple-400 text-purple-200 px-3 py-2 border-b">
                <h3 className="text-sm text-grey-darker font-medium">
                  Emergency
                </h3>
              </div>
              <textarea
                placeholder="Enter detailed protocol on emergency"
                className="text-grey-darkest h-32 p-2 m-1 bg-transparent resize-y rounded-md"
                name="emergency"
                onChange={(e) => setEmergency(e.currentTarget.value)}
              ></textarea>
            </div>

            <div className="box border rounded flex flex-col shadow bg-white bg-purple-400 border-purple-500 mb-10">
              <div className="box__title bg-purple-400 text-purple-200 px-3 py-2 border-b">
                <h3 className="text-sm text-grey-darker font-medium">Rules</h3>
              </div>
              <textarea
                placeholder="Enter event rules"
                className="text-grey-darkest h-32 p-2 m-1 bg-transparent resize-y rounded-md"
                name="rules"
                onChange={(e) => setRules(e.currentTarget.value)}
              ></textarea>
            </div>

            <div className="flex flex-row items-center bg-purple-400  rounded-b-lg border-purple-500 mb-10">
              <label
                htmlFor="location"
                className="w-[30%] text-right p-4 mr-8 text-purple-200"
              >
                Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                placeholder="Event location"
                onChange={(e) => setLocation(e.currentTarget.value)}
                className="flex w-[100%] p-4 pl-0 bg-transparent placeholder-purple-300 outline-none text-white overflow-ellipsis overflow-hidden"
              />
            </div>

            <div className="flex flex-row items-center bg-purple-400  rounded-b-lg border-purple-500 mb-10">
              <label
                htmlFor="email"
                className="w-[30%] text-right p-4 mr-8 text-purple-200"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.currentTarget.value)}
                placeholder="Event email"
                className="flex w-[100%] p-4 pl-0 bg-transparent placeholder-purple-300 outline-none text-white overflow-ellipsis overflow-hidden"
              />
            </div>

            <div className="flex flex-row items-center bg-purple-400  rounded-b-lg border-purple-500 mb-10">
              <label
                htmlFor="phone"
                className="w-[30%] text-right p-4 mr-8 text-purple-200"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                onChange={(e) => setPhone(e.currentTarget.value)}
                placeholder="Event phone number"
                className="flex w-[100%] p-4 pl-0 bg-transparent placeholder-purple-300 outline-none text-white overflow-ellipsis overflow-hidden"
              />
            </div>

            <div className="flex flex-row items-center bg-purple-400  rounded-b-lg border-purple-500 mb-10">
              <label
                htmlFor="price"
                className="w-[30%] text-right p-4 mr-8 text-purple-200"
              >
                Price In USD
              </label>
              <input
                type="number"
                name="price"
                id="price"
                onChange={(e) => setPrice(e.currentTarget.value+" $")}
                placeholder="$$.$$"
                className="flex w-[100%] p-4 pl-0 bg-transparent placeholder-purple-300 outline-none text-white overflow-ellipsis overflow-hidden"
              />
            </div>

            <div className="flex flex-row items-center bg-purple-400  rounded-b-lg border-purple-500 mb-10">
              <label
                htmlFor="image"
                className="w-[30%] text-right p-4 mr-8 text-purple-200"
              >
                Image Link
              </label>
              <input
                type="text"
                name="image"
                id="image"
                onChange={(e) => setImageLink(e.currentTarget.value)}
                placeholder="Event image link"
                className="flex w-[100%] p-4 pl-0 bg-transparent placeholder-purple-300 outline-none text-white overflow-ellipsis overflow-hidden"
              />
            </div>

            <div className="mb-10 flex justify-start">
              <label htmlFor="" className="mr-3">
                Event Date:{" "}
              </label>
              <Datepicker
                minDate={new Date()}
                onSelectedDateChanged={(val) => setDatetime(val.toString().slice(0, 15))}
              />
            </div>


          <div className="mb-10 flex justify-start">
            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center pl-3">
                  <input
                    id="horizontal-list-radio-millitary"
                    type="radio"
                    value="t"
                    name="list-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    onChange={(e) =>
                      setTransferrable(e.currentTarget.value === "t")
                    }
                  />
                  <label
                    htmlFor="horizontal-list-radio-millitary"
                    className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Transferrable
                  </label>
                </div>
              </li>
              <li className="w-full dark:border-gray-600">
                <div className="flex items-center pl-3">
                  <input
                    id="horizontal-list-radio-passport"
                    type="radio"
                    value="nt"
                    name="list-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    onChange={(e) =>
                      setTransferrable(e.currentTarget.value !== "nt")
                    }
                  />
                  <label
                    htmlFor="horizontal-list-radio-passport"
                    className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Non Transferrable
                  </label>
                </div>
              </li>
            </ul>
          </div>

          </div>

          <button
            onClick={(e) => createEvent(e)}
            className="mt-7 bg-pink-400 hover:bg-purple-700  block w-1/2 rounded py-4 text-white font-bold shadow"
          >
            Create Event ➕
          </button>
        </form>
      </div>
    </div>
  );
}
