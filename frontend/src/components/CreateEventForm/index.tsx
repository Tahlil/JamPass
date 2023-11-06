export function CreateEventForm() {
    return (
        <div>
            <h1 className="text-transparent bg-clip-text text-5xl bg-gradient-to-r to-emerald-600 from-sky-400 mb-2">
                Create Event
                </h1>
        
        <div className="bg-purple-200 p-3 flex items-center text-lg">
           
        <img className="float-left" width={"300px"} height={"2500px"} src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"/>

        <form action="" className="mx-auto rounded">

          <div className="shadow w-[115%]">

            

            <div className="flex flex-row items-center bg-purple-400 rounded-b-lg border-purple-500 mb-10">
              <label htmlFor="name" className="w-[30%] text-right p-4 mr-8 text-purple-200">Name</label>
              <input type="text" name="name" id="name" placeholder="Event name" className="flex w-[100%] p-4 pl-0 bg-transparent placeholder-purple-300 outline-none text-white overflow-ellipsis overflow-hidden"/>
            </div>

            <div className="box border rounded flex flex-col shadow bg-white bg-purple-400 border-purple-500 mb-10">
        <div className="box__title bg-purple-400 text-purple-200 px-3 py-2 border-b"><h3 className="text-sm text-grey-darker font-medium">Description</h3></div>
        <textarea placeholder="Event description" className="text-grey-darkest h-32 p-2 m-1 bg-transparent resize-y rounded-md" name="description"></textarea>
      </div>

      <div className="box border rounded flex flex-col shadow bg-white bg-purple-400 border-purple-500 mb-10">
        <div className="box__title bg-purple-400 text-purple-200 px-3 py-2 border-b"><h3 className="text-sm text-grey-darker font-medium">Agendas</h3></div>
        <textarea placeholder="Event agendas" className="text-grey-darkest h-32 p-2 m-1 bg-transparent resize-y rounded-md" name="agendas"></textarea>
      </div>

      <div className="box border rounded flex flex-col shadow bg-white bg-purple-400 border-purple-500 mb-10">
        <div className="box__title bg-purple-400 text-purple-200 px-3 py-2 border-b"><h3 className="text-sm text-grey-darker font-medium">Speakers</h3></div>
        <textarea placeholder="Event speakers" className="text-grey-darkest h-32 p-2 m-1 bg-transparent resize-y rounded-md" name="speakers"></textarea>
      </div>

      <div className="box border rounded flex flex-col shadow bg-white bg-purple-400 border-purple-500 mb-10">
        <div className="box__title bg-purple-400 text-purple-200 px-3 py-2 border-b"><h3 className="text-sm text-grey-darker font-medium">Breaks</h3></div>
        <textarea placeholder="Event breaks" className="text-grey-darkest h-32 p-2 m-1 bg-transparent resize-y rounded-md" name="breaks"></textarea>
      </div>

      <div className="box border rounded flex flex-col shadow bg-white bg-purple-400 border-purple-500 mb-10">
        <div className="box__title bg-purple-400 text-purple-200 px-3 py-2 border-b"><h3 className="text-sm text-grey-darker font-medium">Registration</h3></div>
        <textarea placeholder="Enter registration process" className="text-grey-darkest h-32 p-2 m-1 bg-transparent resize-y rounded-md" name="registration"></textarea>
      </div>

      <div className="box border rounded flex flex-col shadow bg-white bg-purple-400 border-purple-500 mb-10">
        <div className="box__title bg-purple-400 text-purple-200 px-3 py-2 border-b"><h3 className="text-sm text-grey-darker font-medium">Emergency</h3></div>
        <textarea placeholder="Enter detailed protocol on emergency" className="text-grey-darkest h-32 p-2 m-1 bg-transparent resize-y rounded-md" name="emergency"></textarea>
      </div>

            <div className="flex flex-row items-center bg-purple-400  rounded-b-lg border-purple-500 mb-10">
              <label htmlFor="location" className="w-[30%] text-right p-4 mr-8 text-purple-200">Location</label>
              <input type="text" name="location" id="location" placeholder="Event location" className="flex w-[100%] p-4 pl-0 bg-transparent placeholder-purple-300 outline-none text-white overflow-ellipsis overflow-hidden"/>
            </div>
            
            <div className="flex flex-row items-center bg-purple-400  rounded-b-lg border-purple-500 mb-10">
              <label htmlFor="email" className="w-[30%] text-right p-4 mr-8 text-purple-200">Email</label>
              <input type="text" name="email" id="email" placeholder="Event email" className="flex w-[100%] p-4 pl-0 bg-transparent placeholder-purple-300 outline-none text-white overflow-ellipsis overflow-hidden"/>
            </div>
            <div className="flex flex-row items-center bg-purple-400  rounded-b-lg border-purple-500 mb-10">
              <label htmlFor="phone" className="w-[30%] text-right p-4 mr-8 text-purple-200">Phone Number</label>
              <input type="text" name="phone" id="phone" placeholder="Event phone number" className="flex w-[100%] p-4 pl-0 bg-transparent placeholder-purple-300 outline-none text-white overflow-ellipsis overflow-hidden"/>
            </div>

            <div className="flex flex-row items-center bg-purple-400  rounded-b-lg border-purple-500 mb-10">
              <label htmlFor="image" className="w-[30%] text-right p-4 mr-8 text-purple-200">Image Link</label>
              <input type="text" name="image" id="image" placeholder="Event image link" className="flex w-[100%] p-4 pl-0 bg-transparent placeholder-purple-300 outline-none text-white overflow-ellipsis overflow-hidden"/>
            </div>
            
          </div>
          <button className="bg-pink-400 hover:bg-purple-700  block w-1/2 rounded py-4 text-white font-bold shadow">Create Event</button>
     
        </form>
      </div>
          </div>
    )

}