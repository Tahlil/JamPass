export function CreateEventForm() {
    return (
        <div className="bg-purple-200 p-3 flex items-center text-lg">
        <img className="float-left" width={"300px"} height={"700px"} src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"/>

        <form action="" className="mx-auto rounded">

          <div className="shadow w-[115%]">

            <div className="flex flex-row items-center bg-purple-400 rounded-t-lg border-purple-500 border-b">
              <label htmlFor="name" className="w-[30%] text-right mr-8 p-4 text-purple-200">Name</label>
              <input type="text" name="name" id="name" placeholder="Put in your name" className="flex w-[100%] p-4 pl-0 bg-transparent placeholder-purple-300 outline-none text-white overflow-ellipsis overflow-hidden"/>
            </div>
            <div className="flex flex-row items-center bg-purple-400  rounded-b-lg border-purple-500 mb-10">
              <label htmlFor="twitter" className="w-[30%] text-right p-4 mr-8 text-purple-200">Twitter</label>
              <input type="text" name="twitter" id="twitter" placeholder="Put in Twitter pseudonym" className="flex w-[100%] p-4 pl-0 bg-transparent placeholder-purple-300 outline-none text-white overflow-ellipsis overflow-hidden"/>
            </div>
          </div>
          <button className="bg-pink-400 block w-1/2 rounded py-4 text-white font-bold shadow">Submit</button>
     
        </form>
      </div>
    )

}