import { useEffect, useState } from "react";
import MainMenu from "../MainMenu";
import Footer from "../Footer";
import getApiUrl from "../getApiUrl";

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  const [fEvents, setFEvents] = useState([]);

  const apiUrl = getApiUrl();
  useEffect(() => {
    const even = async () => {
      let array1 = [];
      await fetch(apiUrl + "events")
        .then((response) => response.json())
        .then((data) => {
          setEvents(data);
          data.forEach((element) => {
            console.log(element.isFeatured);
            if (element.isFeatured) {
              array1.push(element);
            }
          });
          setFEvents(array1);
          console.log(array1);
          console.log(fEvents);
        })
        .catch((err) => console.log(err));
    };
    even();
  }, []);

  return (
    <div>
      <MainMenu></MainMenu>
      <div className="w-full flex pt-10 lg:pt-[6rem] p-5 pr-10  justify-end">
        <input
          className="py-2 px-4 w-[20rem] border-2 border-black   rounded-md"
          style={{}}
          placeholder="Search Events"
        ></input>
      </div>
      <div className=" p-10 pt-5 flex flex-col">
        <div className="font-semibold text-2xl">Featured This Week</div>
        <div className="">
          <div className="  mt-8 overflow-auto flex gap-8 justify-left">
            {fEvents && fEvents.length > 0 ? (
              fEvents.map((item) => (
                <div className="w-[20rem] relative mb-3 h-[28rem] bg-white flex-shrink-0 border border-gray-200 rounded-lg shadow-md ">
                  <a href="">
                    <img
                      className="rounded-t-lg h-2/5 w-full object-cover"
                      src={
                        item.eventPhoto
                          ? "http://localhost:3001/images/" + item.eventPhoto
                          : "http://localhost:3001/images/" + "no-image.png"
                      }
                      alt=""
                    />
                  </a>
                  <div className="p-5 flex flex-col">
                    <div className="mb-3">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                        {item.eventName ? item.eventName : ""}
                      </h5>
                    </div>
                    <div className="w-full flex">
                      <div className="mb-3 w-1/2 font-normal text-gray-700 ">
                        {item.eventDate ? item.eventDate : ""}
                      </div>
                      <div className="mb-3 w-1/2 font-normal text-gray-700 ">
                        {item.eventTime ? item.eventTime : ""}
                      </div>
                    </div>

                    <div className="w-full flex mb-3">
                      {item.eventCity ? item.eventCity : ""}
                      {item.eventCountry ? ", " + item.eventCountry : ""}
                    </div>
                    <div className="absolute bottom-5 left-5">
                      <a
                        href="#"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                      >
                        Read more
                        <svg
                          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="pl-4 font-medium text-gray-500">
                No Featured Events This Week
              </div>
            )}
          </div>
        </div>
      </div>
      <div className=" p-10 pt-5 mb-20 flex flex-col">
        <div className="font-semibold text-2xl">Upcoming Events</div>
        <div className="">
          <div className="  mt-8 overflow-auto flex gap-8 justify-left">
            {events.length > 0 ? (
              events.map((item) => (
                <div className="w-[20rem] relative mb-3 h-[32rem] bg-white flex-shrink-0 border border-gray-200 rounded-lg shadow-md ">
                  <a href="#">
                    <img
                      className="rounded-t-lg h-2/5 object-cover"
                      src={
                        item.eventPhoto
                          ? "http://localhost:3001/images/" + item.eventPhoto
                          : "http://localhost:3001/images/" + "no-image.png"
                      }
                      alt=""
                    />
                  </a>
                  <div className="p-5 flex flex-col">
                    <div className="mb-3">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                        {item.eventName ? item.eventName : ""}
                      </h5>
                    </div>
                    <div className="w-full flex">
                      <div className="mb-3 w-1/2 font-normal text-gray-700 ">
                        {item.eventDate ? item.eventDate : ""}
                      </div>
                      <div className="mb-3 w-1/2 font-normal text-gray-700 ">
                        {item.eventTime ? item.eventTime : ""}
                      </div>
                    </div>

                    <div className="w-full mb-3">
                      {item.eventAddress ? item.eventAddress : ""}
                    </div>
                    <div className="w-full flex mb-3">
                      {item.eventCity ? item.eventCity : ""}
                      {item.eventCountry ? ", " + item.eventCountry : ""}
                    </div>
                    <div className="absolute bottom-5 left-5">
                      <a
                        href="#"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                      >
                        Read more
                        <svg
                          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="pl-4 font-medium text-gray-500">
                No Upcoming Events
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer> </Footer>
    </div>
  );
};
export default AllEvents;
