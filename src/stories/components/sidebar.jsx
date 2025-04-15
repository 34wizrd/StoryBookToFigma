import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  HomeIcon,
  LayoutDashboardIcon,
  SettingsIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";

const navItems = [
  { icon: <HomeIcon className="h-5 w-5" />, label: "Home" },
  { icon: <LayoutDashboardIcon className="h-5 w-5" />, label: "Dashboard" },
  { icon: <SettingsIcon className="h-5 w-5" />, label: "Settings" },
];

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <TooltipProvider>
      <aside
        className={`bg-gray-100 dark:bg-gray-900 min-h-screen p-4 flex flex-col transition-all duration-300 ${
          collapsed ? "w-16" : "w-64"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          {!collapsed && (
            <h1 className="text-lg font-bold text-gray-800 dark:text-white">MyApp</h1>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed((prev) => !prev)}
            className="ml-auto"
          >
            {collapsed ? <MenuIcon className="w-4 h-4" /> : <XIcon className="w-4 h-4" />}
          </Button>
        </div>

        <Separator className="mb-4" />

        {/* Nav Items */}
        <nav className="space-y-2 flex-1">
          {navItems.map(({ icon, label }, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${
                    collapsed ? "p-2 justify-center" : "pl-2"
                  }`}
                >
                  {icon}
                  {!collapsed && <span className="ml-2">{label}</span>}
                </Button>
              </TooltipTrigger>
              {collapsed && <TooltipContent side="right">{label}</TooltipContent>}
            </Tooltip>
          ))}
        </nav>
      </aside>
    </TooltipProvider>
  );
};
