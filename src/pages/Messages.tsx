
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Edit, Inbox, Send, Archive } from "lucide-react";

const MessagesPage = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Messages</h1>
        <Button className="bg-uhn-accent hover:bg-uhn-accent/90 text-white">
          <Edit className="mr-2 h-4 w-4" />
          New Message
        </Button>
      </div>

      <div className="uhn-card">
        <div className="flex items-center gap-2 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-uhn-text-secondary" />
            <Input
              placeholder="Search messages..."
              className="pl-10 border-uhn-border"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="inbox">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="inbox" className="flex items-center gap-2">
              <Inbox className="h-4 w-4" />
              Inbox
            </TabsTrigger>
            <TabsTrigger value="sent" className="flex items-center gap-2">
              <Send className="h-4 w-4" />
              Sent
            </TabsTrigger>
            <TabsTrigger value="archived" className="flex items-center gap-2">
              <Archive className="h-4 w-4" />
              Archived
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="inbox" className="animate-fade-in">
            <div className="text-center py-8 text-uhn-text-secondary">
              <Inbox className="h-12 w-12 mx-auto mb-2 opacity-20" />
              <p>Your inbox is empty</p>
            </div>
          </TabsContent>
          
          <TabsContent value="sent" className="animate-fade-in">
            <div className="text-center py-8 text-uhn-text-secondary">
              <Send className="h-12 w-12 mx-auto mb-2 opacity-20" />
              <p>No sent messages</p>
            </div>
          </TabsContent>
          
          <TabsContent value="archived" className="animate-fade-in">
            <div className="text-center py-8 text-uhn-text-secondary">
              <Archive className="h-12 w-12 mx-auto mb-2 opacity-20" />
              <p>No archived messages</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MessagesPage;
