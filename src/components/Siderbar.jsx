import { useState } from "react";
import NewFeaturesCard from "./NewFeaturesCard";
import Home from "./Home";

const Siderbar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Home", src: "Home" },
    { title: "Dashboard", src: "barchart" },
    { title: "Project", src: "Project" },
    { title: "Tasks", src: "Tasks" },
    { title: "Reporting", src: "Reporting" },
    { title: "User", src: "user" },
    { title: "Support", src: "Support" },
    { title: "Setting", src: "Setting" },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`${
          open ? "w-72" : "w-20"
        } bg-white p-5 pt-8 relative duration-300 
        lg:w-72 md:w-60 sm:w-20 
        `}
        style={{
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Control Button Section */}
        <div className="relative w-full">
          <img
            src="./src/assets/control.png"
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
              border-2 rounded-full ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
            alt="control"
          />
          <div className="flex gap-x-4 items-center">
            <img
              src="./src/assets/Header.png"
              className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`}
              alt="header"
            />
            <h1
              className={`text-gray-900 origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"
              }`}
            >
            </h1>
          </div>
          {/* Navigation Menu */}
          <ul className="pt-6">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex rounded-md p-2 cursor-pointer hover:bg-gray-200 text-gray-900 text-sm items-center gap-x-4 
                  ${Menu.gap ? "mt-9" : "mt-2"} ${
                    index === 0 && "bg-gray-100"
                  }`}
              >
                <img src={`./src/assets/${Menu.src}.png`} alt={Menu.title} />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
        {/* Footer Section */}
        <div className="mt-auto">
          <NewFeaturesCard />
        </div>
      </div>

      {/* Main Content */}
      <div className="h-screen flex-1 p-7 overflow-auto">
        <Home />
      </div>
    </div>
  );
};

export default Siderbar;
