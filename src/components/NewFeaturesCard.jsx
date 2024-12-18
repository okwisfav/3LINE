import React from "react";
import { IoPlaySharp } from "react-icons/io5"; 
import { FiExternalLink } from "react-icons/fi";
import users from "../assets/users.png";

const NewFeaturesCard = () => {
  return (
    <div
      className="flex flex-col mx-auto p-6 max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-md border bg-white"
      style={{
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Header Section */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-800">New features available!</h3>
        <p className="text-sm text-gray-500 mt-1">
          Check out the new dashboard view. Pages now load faster.
        </p>
      </div>

      {/* Media Section */}
      <div className="relative mb-4">
        <img
          src={users}  
          alt="New Feature Demo"
          className="w-full rounded-lg object-cover"
        />
      </div>

      {/* Footer Section */}
      <div className="flex items-center justify-between">
        <button className="text-sm text-gray-400 hover:text-gray-700">Dismiss</button>
        <a
          href="#"
          className="text-sm text-purple-600 hover:text-purple-800 font-medium"
        >
          What's new?
        </a>
      </div>

      {/* Profile Section */}
      <div className="flex items-center gap-3 mt-6 border-t pt-4">
        <img
          src={users}  
          alt="Olivia Rhye"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h4 className="text-sm font-semibold text-gray-800">Olivia Rhye</h4>
          <p className="text-sm text-gray-500">olivia@untitledui.com</p>
        </div>
        <a
          href="#"
          className="ml-auto text-gray-400 hover:text-gray-600"
          aria-label="External link"
        >
          <FiExternalLink className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default NewFeaturesCard;
