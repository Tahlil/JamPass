import Link from "next/link";
export function EventDetails(props: any) {
  
  return (
    <div className="nes-container with-title">
      <p className="title">Event Details</p>
      <div className="nes-container">
        <h5>Event Name</h5>
        <p className="nes-badge">Name</p>
      </div>
    </div>
  );
}
