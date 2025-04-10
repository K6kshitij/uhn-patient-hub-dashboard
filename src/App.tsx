
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./components/layout/DashboardLayout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MessagesPage from "./pages/Messages";
import ContactCareTeam from "./pages/ContactCareTeam";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout><Index /></DashboardLayout>} />
          <Route path="/messages" element={<DashboardLayout><MessagesPage /></DashboardLayout>} />
          <Route path="/contact-care-team" element={<DashboardLayout><ContactCareTeam /></DashboardLayout>} />
          <Route path="/visits" element={<DashboardLayout><div className="p-4">Visits Content Coming Soon</div></DashboardLayout>} />
          <Route path="/test-results" element={<DashboardLayout><div className="p-4">Test Results Content Coming Soon</div></DashboardLayout>} />
          <Route path="/medications" element={<DashboardLayout><div className="p-4">Medications Content Coming Soon</div></DashboardLayout>} />
          <Route path="/settings" element={<DashboardLayout><div className="p-4">Settings Content Coming Soon</div></DashboardLayout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
