import { useState } from "react";
import EventData from "../../data/events.json";
import { EventDetails } from "../EventDetails";

export function Events(props: { userType: string }) {
  const [allEventsSet, setAllEventsSet] = useState<Boolean>(true);
  const [eventDetails, setEvent] = useState<Event>();
  function goToEventDetails(event: any) {
    setEvent(event);
    setAllEventsSet(false);
  }

  function gotoEvent() {
    setAllEventsSet(true);
  }

  return (
    <>
      {allEventsSet ? (
        <>
          <div className="flex items-center bg-indigo-100">
            <div className="container ml-auto mr-auto flex flex-wrap items-start">
              <div className="w-full pl-5 lg:pl-2 mb-4 mt-4">
                <h1 className="text-3xl lg:text-4xl text-gray-700 font-extrabold">
                  All Events
                </h1>
              </div>
              {EventData.map((event) => (
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
                    document.getElementById('dialog-rounded').showModal();
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
                        onClick={() => {
                          gotoEvent();
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
