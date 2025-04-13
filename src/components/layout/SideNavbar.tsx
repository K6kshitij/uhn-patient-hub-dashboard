
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Home, 
  Calendar, 
  MessageSquare, 
  FileText, 
  Pill, 
  Settings, 
  LogOut 
} from "lucide-react";

type NavItem = {
  title: string;
  href: string;
  icon: React.ElementType;
};

const mainNavItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Visits",
    href: "/visits",
    icon: Calendar,
  },
  {
    title: "Messages",
    href: "/messages",
    icon: MessageSquare,
  },
  {
    title: "Test Results",
    href: "/test-results",
    icon: FileText,
  },
  {
    title: "Medications",
    href: "/medications",
    icon: Pill,
  },
];

const bottomNavItems: NavItem[] = [
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
  {
    title: "Logout",
    href: "/logout",
    icon: LogOut,
  },
];

export default function SideNavbar() {
  const location = useLocation();

  return (
    <div className="flex flex-col h-screen w-64 bg-white border-r border-gray-200 p-4">
      <div className="mb-8">
        <img 
          src="/lovable-uploads/d556b41f-1c43-47c3-bc59-3c2c096896d9.png" 
          alt="myUHN Logo" 
          className="h-8 mb-8"
        />
      </div>

      <nav className="flex-1 space-y-2">
        {mainNavItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
              location.pathname === item.href
                ? "bg-[#F6F8FE] text-[#2051F4]"
                : "text-gray-500 hover:bg-gray-100"
            )}
          >
            <item.icon size={20} />
            <span className="text-sm">{item.title}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto space-y-2">
        {bottomNavItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-100 rounded-md text-sm"
          >
            <item.icon size={20} />
            <span>{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
