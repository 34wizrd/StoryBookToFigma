import React from "react";
import { Sidebar } from "../src/stories/components/sidebar";

export default function App() {
  return (
    <div className="flex">
      <Sidebar items={["Dashboard", "Projects", "Settings"]} />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold">Main Content Area</h1>
      </div>
    </div>
  );
}
