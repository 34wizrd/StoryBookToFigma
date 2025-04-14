import React from "react";
import { cn } from "../../lib/utils"; // Only if you're using a utility like classnames

export const Sidebar = ({ items = [], collapsed = false }) => {
  return (
    <aside
      className={cn(
        "bg-gray-100 dark:bg-gray-900 min-h-screen p-4 transition-all",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            key={index}
            className={cn("text-gray-800 dark:text-white", collapsed ? "text-xs text-center" : "text-base")}
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
};
