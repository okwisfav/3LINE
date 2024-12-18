import React from "react";
import RoleSection from "./RoleSection";
import UserRoles from "./UserRoles";
const Home = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Settings</h1>
        <p className="text-sm text-gray-500">
          Manage your team and preferences here.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {[
          "My details",
          "Profile",
          "Password",
          "Team",
          "Plan",
          "Roles",
          "Notifications",
          "Integrations",
          "API",
        ].map((tab, index) => (
          <button
            key={index}
            className={`py-2 px-4 text-sm rounded-md shadow-sm transition-all ${
              tab === "My detail"
                ? "bg-gray-900 text-white border-gray-900"
                : "text-gray-700 border border-gray-300 hover:bg-gray-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Role Section */}
      <RoleSection />
      <UserRoles />
    </div>
  );
};

export default Home;
