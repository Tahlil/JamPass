import EventData from "../../data/events.json";
import Link from "next/link";

export function Events() {
    console.log(EventData)
    return (
        <div className="flex items-center bg-indigo-100">
  <div className="container ml-auto mr-auto flex flex-wrap items-start">
    <div className="w-full pl-5 lg:pl-2 mb-4 mt-4">
      <h1 className="text-3xl lg:text-4xl text-gray-700 font-extrabold">
        All Events
      </h1>
    </div>
    {EventData.map(event => 
        //   <Link href={"/event-details"}>
           <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
            <Link href={"/event-details"}>
           <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
             <figure className="mb-2">
               <img src={event.image} alt="" className="h-64 ml-auto mr-auto" />
             </figure>
             <div className="rounded-lg p-4 bg-purple-700 flex flex-col">
               <div>
                 <h5 className="text-white text-2xl font-bold leading-none h-24">
                   {event.name}
                 </h5>
                 <h5 className="text-xs text-gray-400 h-[150px] pt-3">{event.description}</h5>
               </div>
               <div className="flex items-center">
                 <div className="text-lg text-white font-light">
                 {event.price}
                 </div>
                 
                 <button className="rounded-full bg-purple-900 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="stroke-current m-auto">
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
           </Link>
         </div>
        )}
  </div>
</div>

    );
}