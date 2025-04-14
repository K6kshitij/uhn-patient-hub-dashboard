
import { Bell, LogOut, User, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function TopBar() {
  const [notificationCount, setNotificationCount] = useState(3);

  // Sample notifications data
  const notifications = [
    {
      id: 1,
      title: "Appointment Reminder",
      description: "Your appointment with Dr. Smith is tomorrow at 2:00 PM",
      time: "1 hour ago",
      read: false
    },
    {
      id: 2,
      title: "Test Results Available",
      description: "Your recent lab results are now available to view",
      time: "Yesterday",
      read: false
    },
    {
      id: 3,
      title: "Prescription Refill",
      description: "Your prescription is ready for pickup",
      time: "2 days ago",
      read: false
    }
  ];

  const markAllAsRead = () => {
    setNotificationCount(0);
  };

  return (
    <div className="h-16 px-6 flex items-center justify-between border-b border-uhn-border bg-white">
      <div className="text-2xl font-bold text-uhn-text">
        {/* Logo removed from here */}
      </div>
      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative text-uhn-text-secondary">
              <Bell className="h-5 w-5" />
              {notificationCount > 0 && (
                <span className="absolute top-1 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel className="flex justify-between items-center">
              <span>Notifications</span>
              {notificationCount > 0 && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-xs text-uhn-primary hover:bg-transparent hover:text-uhn-primary/80"
                  onClick={markAllAsRead}
                >
                  Mark all as read
                </Button>
              )}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            
            {notifications.length > 0 ? (
              <>
                {notifications.map((notification) => (
                  <DropdownMenuItem key={notification.id} className="flex flex-col items-start p-3 cursor-pointer">
                    <div className="flex justify-between w-full">
                      <span className="font-medium">{notification.title}</span>
                      <span className="text-xs text-muted-foreground">{notification.time}</span>
                    </div>
                    <p className="text-sm text-uhn-text-secondary mt-1">{notification.description}</p>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem className="justify-center text-uhn-primary hover:text-uhn-primary/90">
                  View all notifications
                </DropdownMenuItem>
              </>
            ) : (
              <div className="py-6 text-center">
                <p className="text-muted-foreground">No new notifications</p>
              </div>
            )}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 px-2 text-uhn-text hover:bg-transparent">
              <Avatar className="h-8 w-8 border border-uhn-border bg-[#1a365d] text-white">
                <AvatarFallback className="bg-[#1a365d] text-white text-sm font-medium">
                  AS
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-500">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
