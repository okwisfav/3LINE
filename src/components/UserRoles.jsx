import React from "react";
import { FaCheckCircle, FaRegCircle, FaDownload } from "react-icons/fa";
import group from '../assets/group.png'

const rolesData = [
  {
    name: "Superadmin",
    type: "DEFAULT",
    date: "Jan 1, 2023",
    status: "Active",
    users: "+2",
  },
  {
    name: "Merchantadmin",
    type: "DEFAULT",
    date: "Feb 1, 2023",
    status: "Active",
    users: "+1",
  },
  {
    name: "Supportadmin",
    type: "DEFAULT",
    date: "Feb 1, 2023",
    status: "Active",
    users: "",
  },
  {
    name: "Sales personnel",
    type: "CUSTOM",
    date: "Mar 1, 2023",
    status: "Active",
    users: "",
  },
  {
    name: "Deputy sales personnel",
    type: "CUSTOM",
    date: "Apr 1, 2023",
    status: "Inactive",
    users: "",
  },
  {
    name: "Developeradmin",
    type: "SYSTEM-CUSTOM",
    date: "May 1, 2023",
    status: "Active",
    users: "",
  },
  {
    name: "Developer-basic",
    type: "SYSTEM-CUSTOM",
    date: "Jun 1, 2023",
    status: "Active",
    users: "",
  },
];

const UserRoles = () => {
  return (
    <div className="p-4 bg-gray-50">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">User Roles</h2>
        <button className="flex items-center gap-2 text-gray-600 border rounded-md px-3 py-1 hover:bg-gray-100">
          <FaDownload />
          <span>Download all</span>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto bg-white rounded-md shadow-md overflow-hidden">
          {/* Table Header */}
          <thead className="bg-gray-100">
            <tr className="text-gray-600 text-sm text-left">
              <th className="py-3 px-4">
                <input type="checkbox" />
              </th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Type</th>
              <th className="py-3 px-4">Date created</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Role users</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {rolesData.map((role, index) => (
              <tr
                key={index}
                className="text-gray-700 text-sm border-t hover:bg-gray-50"
              >
                {/* Checkbox */}
                <td className="py-3 px-4">
                  <input type="checkbox" />
                </td>

                {/* Name */}
                <td className="py-3 px-4">{role.name}</td>

                {/* Type */}
                <td className="py-3 px-4">{role.type}</td>

                {/* Date Created */}
                <td className="py-3 px-4">{role.date}</td>

                {/* Status */}
                <td className="py-3 px-4">
                  {role.status === "Active" ? (
                    <span className="inline-flex items-center gap-1 text-green-500">
                      <FaCheckCircle />
                      Active
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-orange-500">
                      <FaRegCircle />
                      Inactive
                    </span>
                  )}
                </td>

                {/* Role Users */}
                <td className="py-3 px-4 flex items-center">
                  <div className="flex -space-x-2">
                    {/* Placeholder avatars */}
                    <img
                      src={group}
                      alt="user"
                      className="h-6 rounded-full border border-white"
                    />
                    {role.users && (
                      <span className="w-6 h-6 bg-gray-200 text-xs flex items-center justify-center rounded-full border">
                        {role.users}
                      </span>
                    )}
                  </div>
                </td>

                {/* Actions */}
                <td className="py-3 px-4">
                  <button className="text-gray-500 hover:text-gray-700">
                    <FaDownload />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserRoles;
