import React from "react";
import { Header } from "./header";
import { Sidebar } from "./sidebar";

export const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar items={["Home", "Projects", "Settings"]} />
      <div className="flex-1">
        <Header />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};
