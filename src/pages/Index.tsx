
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlusIcon, TicketIcon } from "lucide-react";

const Index = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold tracking-tight">Support Dashboard</h1>
        <Button className="animate-fadeIn">
          <PlusIcon className="mr-2 h-4 w-4" />
          New Ticket
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6 glass-card">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <TicketIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-sm font-medium">Total Tickets</h3>
              <p className="text-2xl font-semibold">0</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6 glass-card">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-green-500/10 rounded-full">
              <TicketIcon className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <h3 className="text-sm font-medium">Open Tickets</h3>
              <p className="text-2xl font-semibold">0</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6 glass-card">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-500/10 rounded-full">
              <TicketIcon className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <h3 className="text-sm font-medium">Closed Tickets</h3>
              <p className="text-2xl font-semibold">0</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="glass-card p-6">
        <div className="rounded-lg border bg-card">
          <div className="p-4">
            <h2 className="text-lg font-semibold">Recent Tickets</h2>
            <p className="text-sm text-muted-foreground">No tickets found. Create your first ticket to get started.</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Index;
