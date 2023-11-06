export function EventProperty(props: any) {
    return (
        <div className="grid grid-cols-12 place-items-start">
         <div className="col-span-2 text-left">Name:</div>
          <div className="col-span-10 mb-3">
            <p className="nes-container is-rounded bg-gradient-to-r from-cyan-500 to-blue-500">
              Event Name
            </p>
          </div>
          </div>
    );
}

export default EventProperty;