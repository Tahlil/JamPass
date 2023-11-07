import Link from "next/link";
import EventProperty from "./event-property"
export function EventDetails(eventProps: any) {
  console.log({eventProps})
  return (
    <div className="nes-container with-title">
      <p className="title">Event Details</p>
      <EventProperty key="" name= "Test Event"/>

    </div>
  );
}
