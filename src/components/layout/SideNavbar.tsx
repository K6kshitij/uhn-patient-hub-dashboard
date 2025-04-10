
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Calendar, Home, MessageSquare, FileText, Pill, Settings, ChevronLeft, ChevronRight } from "lucide-react";

type NavItem = {
  title: string;
  href: string;
  icon: React.ElementType;
};

const navItems: NavItem[] = [
  {
    title: "Dashboard",
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
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function SideNavbar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div
      className={cn(
        "flex flex-col h-screen bg-white border-r border-uhn-border transition-all duration-300 ease-in-out",
        collapsed ? "w-20" : "w-64"
      )}
    >
      <div className="flex items-center p-4 border-b border-uhn-border">
        <Link to="/" className="flex items-center gap-2">
          <span className={cn("text-2xl font-bold text-uhn-text", collapsed ? "hidden" : "inline-block")}>
            my<span className="text-blue-600">UHN</span>
          </span>
          {collapsed && (
            <span className="text-2xl font-bold text-blue-600">
              U
            </span>
          )}
        </Link>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto p-2 text-uhn-text-secondary hover:text-uhn-text rounded-full hover:bg-uhn-bg"
          aria-label={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      <nav className="flex-1 py-4 px-2">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-3 rounded-md transition-colors",
                  "hover:bg-uhn-bg",
                  location.pathname === item.href
                    ? "bg-uhn-bg text-uhn-text font-medium"
                    : "text-uhn-text-secondary"
                )}
              >
                <item.icon size={20} />
                {!collapsed && <span>{item.title}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
