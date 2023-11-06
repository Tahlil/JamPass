import { Datepicker } from 'flowbite-react';
import Link from 'next/link';
export function CreateEventForm() {
  return (
    <div>
      <h1 className="text-transparent bg-clip-text text-5xl bg-gradient-to-r to-emerald-600 from-sky-400 mb-2">
        Create Event
      </h1>

      <div className="bg-purple-200 p-3 flex items-center align-top text-lg">
        <div className='flex flex-col items-start'>
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
                placeholder="Event phone number"
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
                placeholder="Event image link"
                className="flex w-[100%] p-4 pl-0 bg-transparent placeholder-purple-300 outline-none text-white overflow-ellipsis overflow-hidden"
              />
            </div>

            <div className='mb-10 flex justify-start'>
                <label htmlFor="" className='mr-3'>Event Date: </label>
            <Datepicker minDate={new Date()}/>
            </div>
          </div>
          <Link href={"/"}>
          <button className="mt-7 bg-pink-400 hover:bg-purple-700  block w-1/2 rounded py-4 text-white font-bold shadow">
            Create Event
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
