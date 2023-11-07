import Link from "next/link";
import EventProperty from "./event-property"
import { Event } from "@/utils/model/event"


export function EventDetails(eventProps: Event) {
  const imageLink = eventProps.image;
//   delete eventProps.image; 
  const eventDetails:any = Object.assign({}, eventProps);
  return (
    <div className="nes-container with-title">
      <p className="title">Event Details</p>
      <img src={imageLink+""} alt="" className="p-3"/>
      <div>
        {
            Object.keys(eventProps).map(key => (
                <EventProperty keyName={key} name={eventDetails[key]}/>
            ))
        }
      </div>
      {/* {
        Object.keys(eventProps).map((e) => {
            <EventProperty key={e} name={e}/>
        })
      } */}

    </div>
   
  );
}
