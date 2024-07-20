import { Link } from "react-router-dom";

export default function MainMenu() {
  return (
    <div className="nav z-69">
      <ul className="flex lg:flex-row flex-col lg:fixed  justify-start lg:justify-between bg-white z-50 py-6 px-5 font-medium  shadow-lg w-full">
        <Link className="w-full lg:w-auto mb-5 lg:mb-0 " to="/">
          <img
            id="logo"
            src="/epic-events-high-resolution-logo-transparent.png"
            alt="Epic Events Logo"
            className="w-[8rem] hover:pointer"
          />
        </Link>

        <div className="flex flex-wrap gap-6 items-center">
          <Link to={"/"} className="w-full sm:w-auto mx-3 hover:pointer">
            Home
          </Link>
          <Link to={"/events"} className="w-full sm:w-auto mx-3 hover:pointer">
            Events
          </Link>
          <Link
            to={"/createevent"}
            className="w-full sm:w-auto mx-3 hover:pointer"
          >
            Create Event
          </Link>
          <Link to={"/events"} className="w-full sm:w-auto mx-3 hover:pointer">
            User Profile
          </Link>
          <Link to={"/events"} className="w-full sm:w-auto mx-3 hover:pointer">
            Contact Us
          </Link>
        </div>
      </ul>
    </div>
  );
}
