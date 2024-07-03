import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Home, Info, DollarSign, MessageSquare, Users } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/default"; // available: default, navbar, sidebar
import Index from "./pages/Index.jsx";
const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Features",
    to: "/#features",
    icon: <Info className="h-4 w-4" />,
  },
  {
    title: "Pricing",
    to: "/#pricing",
    icon: <DollarSign className="h-4 w-4" />,
  },
  {
    title: "Testimonials",
    to: "/#testimonials",
    icon: <MessageSquare className="h-4 w-4" />,
  },
  {
    title: "About Us",
    to: "/about",
    icon: <Users className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              {/* Add more routes here as needed */}
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;