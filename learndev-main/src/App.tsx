import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HTMLPage from "./pages/HTMLPage";
import CSSPage from "./pages/CSSPage";
import JavaScriptPage from "./pages/JavaScriptPage";
import PythonPage from "./pages/PythonPage";
import DjangoPage from "./pages/DjangoPage";
import AZ900Page from "./pages/AZ900Page";
import AZ104Page from "./pages/AZ104Page";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/html" element={<HTMLPage />} />
          <Route path="/css" element={<CSSPage />} />
          <Route path="/javascript" element={<JavaScriptPage />} />
          <Route path="/python" element={<PythonPage />} />
          <Route path="/django" element={<DjangoPage />} />
          <Route path="/az900" element={<AZ900Page />} />
          <Route path="/az104" element={<AZ104Page />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
