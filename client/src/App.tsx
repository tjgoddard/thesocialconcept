import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import TikTokPage from "@/pages/tiktok";
import SMSPage from "@/pages/sms";
import EmailPage from "@/pages/email";
import MetaPage from "@/pages/meta";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/tiktok" component={TikTokPage} />
      <Route path="/sms" component={SMSPage} />
      <Route path="/email" component={EmailPage} />
      <Route path="/meta" component={MetaPage} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
