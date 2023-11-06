import Link from "next/link";
import EventProperty from "./event-property"
export function EventDetails(props: any) {
  return (
    <div className="nes-container with-title">
      <p className="title">Event Details</p>
      <EventProperty/>

    </div>
  );
}
