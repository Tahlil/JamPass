import Link from "next/link";
export function EventDetails(props: any) {
  return (
    <div className="nes-container with-title">
      <p className="title">Event Details</p>
      <div className="nes-container">
        <div className="grid grid-cols-12 place-items-start">
          <div className="col-span-1">
           Name:
          </div>
          <div className="col-span-11">
            <p className="nes-container is-rounded bg-gradient-to-r from-indigo-500">
              <span className="is-dark">Event Name</span>
            </p>
          </div>

            

        </div>
        <hr />
      </div>
    </div>
  );
}
