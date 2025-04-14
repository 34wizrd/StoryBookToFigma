import React from "react";

export const Header = ({ title = "Dashboard" }) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow p-4 text-xl font-semibold text-gray-900 dark:text-white">
      {title}
    </header>
  );
};
