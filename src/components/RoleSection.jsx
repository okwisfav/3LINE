import React from "react";
import { FiUser } from "react-icons/fi";

const RoleSection = () => {
  const roles = [
    { name: "Superadmin", active: "06/2023", selected: true },
    { name: "Developeradmin", active: "01/2023", selected: false },
    { name: "Supportadmin", active: "10/2022", selected: false },
  ];

  return (
    <div className="p-6 bg-gray-50">
      {/* Active Role Title */}
      <h2 className="text-lg font-medium text-gray-800 mb-2">Active Role</h2>
      <p className="text-sm text-gray-500 mb-4">
        Select active role available to the user.
      </p>

      {/* Role List */}
      <div className="space-y-4">
        {roles.map((role, index) => (
          <div
            key={index}
            className={`flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border rounded-md ${
              role.selected
                ? "bg-purple-50 border-purple-300"
                : "border-gray-300"
            }`}
          >
            {/* Left Section - Role Info */}
            <div className="flex items-center gap-4 mb-3 sm:mb-0">
              <div className="flex items-center justify-center h-8 w-8 bg-gray-200 rounded-full">
                <FiUser className="text-gray-600 h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-800">
                  {role.name}
                </h3>
                <p className="text-xs text-gray-500 mb-1">
                  Last active {role.active}
                </p>
                <div className="flex gap-4 text-xs text-blue-600">
                  <button className="hover:underline">Set as default</button>
                  <button className="hover:underline">Edit</button>
                </div>
              </div>
            </div>

            {/* Right Section - Radio Button */}
            <div className="sm:mt-0 mt-2">
              <input
                type="radio"
                name="role"
                defaultChecked={role.selected}
                className="h-4 w-4 text-purple-600 focus:ring-purple-500"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Add Role Button */}
      <div className="mt-4">
        <button className="text-blue-600 text-sm hover:underline">
          + Add role to user
        </button>
      </div>
    </div>
  );
};

export default RoleSection;
