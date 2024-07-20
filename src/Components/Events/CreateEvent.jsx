import { Link } from "react-router-dom";
import MainMenu from "../MainMenu";
import { useState } from "react";

function CreateEvent() {
  const [noField, setNoField] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData from the form element
    const formData = new FormData(e.target);

    // Convert FormData to a plain object
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    console.log(data);

    try {
      const response = await fetch("http://localhost:3001/eventcreate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
        

      const result = await response.json();
     const hiding = document.getElementById("successBox");
      const hiding2 = document.getElementById("failureBox");
      if(result.status == 200 && hiding)
       hiding.style.display = 'block';
      if(result.status != 200 && hiding2){
        
        if (result.status == 400 ) setNoField("true");
        hiding2.style.display = "block";
      }
        
      console.log(result); // Handle the response as needed
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <MainMenu></MainMenu>
      <div className="w-full flex justify-center lg:justify-between overlap ">
        <img src="/pexels-wendywei-1540406.jpg" className="hidden object-cover lg:block lg:w-[30rem]  xl:w-[45rem]"></img>
        <form
          onSubmit={handleSubmit}
          method="POST"
          class="w-full max-w-xl p-10 pb-5 mr-5 ml-5 xl:mr-20  bg-white lg:mt-[6rem] mt-10"
        >
          <div className="w-full text-center pb-10 text-2xl font-semibold">
            Add an event
          </div>

          <div class="w-full px-3 mb-6 ">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-event-name"
            >
              Event Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-event-name"
              type="text"
              name="name"
              placeholder=""
            />
          </div>
          <div class="flex flex-wrap mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-date"
              >
                Date
              </label>
              <input
                class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-date"
                type="date"
                name="date"
                placeholder=""
              />
            </div>
            <div class="w-full md:w-1/2 px-3 ">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-time"
              >
                Time
              </label>
              <input
                class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-time"
                type="time"
                name="time"
                placeholder=""
              />
            </div>
          </div>

          <div class="flex flex-wrap mb-6">
            <div class="w-full sm:w-1/2 px-3 mb-6 sm:mb-0 ">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-country"
              >
                Country
              </label>
              <input
                class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-country"
                type="text"
                name="country"
                placeholder=""
              />
            </div>
            <div class="w-full sm:w-1/2 px-3 mb-6 sm:mb-0 ">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-city"
              >
                City
              </label>
              <input
                class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="text"
                name="city"
                placeholder=""
              />
            </div>
          </div>
          <div class="w-full px-3 mb-6 ">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-address"
            >
              Address
            </label>
            <input
              class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-address"
              type="text"
              name="address"
              placeholder=""
            />
          </div>
          <div class="flex flex-wrap mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-desc"
              >
                Description
              </label>
              <textarea
                class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-desc"
                name="desc"
              />
            </div>
          </div>
          <div className="flex justify-evenly">
            <div
              className=" py-2 px-4 cursor-pointer border-2 rounded-md border-gray-400 border-solid mt-5 mb-5 "
              
            >
              Clear Fields
            </div>
            <button
              className=" py-2 px-4 bg-blue-300 border-2 rounded-md border-gray-400 border-solid mt-5 mb-5 "
              type="submit"
            >
              Submit
            </button>
          </div>

          <div role="alert" id="successBox" className="hidden">
            <div class="bg-green-500 text-white font-bold rounded-t px-4 py-2">
              Success
            </div>
            <div class="border border-t-0 border-green-400 rounded-b bg-green-100 px-4 py-3 text-green-700">
              <p>Event is Successfully Created!</p>
            </div>
          </div>
          <div role="alert" id="failureBox" className="hidden">
            <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
              Failure
            </div>
            <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
              <p>
                {noField === "true"
                  ? "Please Fill the Required Fields!"
                  : "Event Creation Failed!"}
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateEvent;
