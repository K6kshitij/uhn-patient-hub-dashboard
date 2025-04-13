
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

export default function TopBar() {
  return (
    <div className="h-16 px-6 flex items-center justify-between border-b border-uhn-border bg-white">
      <div className="text-2xl font-bold text-uhn-text">
        {/* Logo removed from here */}
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative text-uhn-text-secondary">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 px-2 text-uhn-text hover:bg-transparent">
              <div className="flex flex-col items-start text-sm">
                <span className="font-medium">My account</span>
                <span className="text-xs text-muted-foreground">sample.mobile@gmail.com</span>
              </div>
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
