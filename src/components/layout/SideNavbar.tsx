
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Home, Calendar, MessageSquare, FileText, Pill } from "lucide-react";

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

export default function SideNavbar() {
  const location = useLocation();

  return (
    <div className="flex flex-col h-screen w-64 bg-white border-r border-uhn-border">
      <div className="flex items-center h-16 px-4 border-b border-uhn-border">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#F6F8FE] flex items-center justify-center">
            <img 
              src="/lovable-uploads/12d435aa-efbc-41a4-853c-fb0304c871db.png" 
              alt="myUHN Logo" 
              className="w-6 h-6 object-contain"
            />
          </div>
          <span className="text-xl font-medium">
            my<span className="text-blue-600">UHN</span>
          </span>
        </Link>
      </div>

      <nav className="flex-1 py-4 px-2">
        <ul className="space-y-1">
          {mainNavItems.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors",
                  location.pathname === item.href
                    ? "bg-[#F6F8FE] text-blue-600 font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                )}
                aria-current={location.pathname === item.href ? "page" : undefined}
              >
                <item.icon 
                  size={20} 
                  className={cn(
                    location.pathname === item.href ? "text-blue-600" : "text-gray-500"
                  )} 
                />
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
