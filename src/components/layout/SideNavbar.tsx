
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Calendar, Home, MessageSquare, FileText, Pill, Settings, PanelLeft, PanelRight, LogOut } from "lucide-react";

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
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  // Enhanced active state check to also match nested routes
  const isActive = (href: string) => {
    return location.pathname === href || 
           (href === "/messages" && location.pathname.startsWith("/messages"));
  };

  return (
    <div
      className={cn(
        "flex flex-col h-screen bg-white border-r border-gray-100 transition-all duration-300 ease-in-out",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center h-16 px-4 border-b border-gray-100">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/f9dd6b3d-c73e-4ebf-8782-d43a4c46db62.png" 
            alt="myUHN logo" 
            className={cn("transition-all duration-300", 
              collapsed ? "h-8 w-8 object-contain" : "h-10 w-auto"
            )}
          />
        </Link>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto p-2 text-gray-400 hover:text-gray-600 rounded-md"
          aria-label={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {collapsed ? <PanelRight size={18} /> : <PanelLeft size={18} />}
        </button>
      </div>

      <nav className="flex-1 py-4">
        <ul className="space-y-1 px-3">
          {mainNavItems.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg transition-colors",
                    active 
                      ? "bg-blue-50 text-blue-600 font-semibold" 
                      : "text-gray-500 hover:bg-gray-50",
                    collapsed ? "justify-center px-0 py-2.5" : "px-3 py-2.5"
                  )}
                  title={collapsed ? item.title : ""}
                >
                  <item.icon 
                    size={20} 
                    strokeWidth={active ? 2.5 : 1.5} 
                    color={active ? "#4F46E5" : "#6B7280"} 
                  />
                  {!collapsed && <span>{item.title}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-auto py-4 border-t border-gray-100">
        <ul className="space-y-1 px-3">
          {bottomNavItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg transition-colors",
                    isActive 
                      ? "bg-blue-50 text-blue-600" 
                      : "text-gray-500 hover:bg-gray-50",
                    collapsed ? "justify-center px-0 py-2.5" : "px-3 py-2.5"
                  )}
                  title={collapsed ? item.title : ""}
                >
                  <item.icon size={20} strokeWidth={1.5} color={isActive ? "#4F46E5" : "#6B7280"} />
                  {!collapsed && <span>{item.title}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
