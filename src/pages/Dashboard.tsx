
import { Card } from "@/components/ui/card";
import { 
  Activity, 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  PieChart, 
  Ticket, 
  UserCircle 
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Tickets",
      value: "124",
      icon: <Ticket className="h-6 w-6 text-primary" />,
      trend: "+12.5%",
      color: "bg-primary/10"
    },
    {
      title: "Open Tickets",
      value: "35",
      icon: <AlertCircle className="h-6 w-6 text-yellow-500" />,
      trend: "-2.3%",
      color: "bg-yellow-500/10"
    },
    {
      title: "Closed Tickets",
      value: "89",
      icon: <CheckCircle2 className="h-6 w-6 text-green-500" />,
      trend: "+8.4%",
      color: "bg-green-500/10"
    }
  ];

  const recentActivity = [
    {
      title: "Ticket #1234 updated",
      description: "Status changed to In Progress",
      time: "2 hours ago",
      icon: <Activity className="h-4 w-4" />
    },
    {
      title: "New ticket created",
      description: "Network connectivity issue reported",
      time: "4 hours ago",
      icon: <Ticket className="h-4 w-4" />
    },
    {
      title: "User feedback received",
      description: "Rating: 5 stars",
      time: "6 hours ago",
      icon: <UserCircle className="h-4 w-4" />
    }
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Welcome back</h1>
          <p className="text-muted-foreground">Here's an overview of your support system.</p>
        </div>
        <Button>
          Download Report
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-full ${stat.color}`}>
                  {stat.icon}
                </div>
                <span className="text-sm text-muted-foreground">{stat.trend}</span>
              </div>
              <h3 className="text-2xl font-semibold mb-1">{stat.value}</h3>
              <p className="text-sm text-muted-foreground">{stat.title}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Recent Activity</h3>
            <Button variant="ghost" size="sm">View all</Button>
          </div>
          <div className="space-y-6">
            {recentActivity.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="p-2 rounded-full bg-primary/10">
                  {activity.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium">{activity.title}</h4>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  {activity.time}
                </span>
              </motion.div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Performance</h3>
            <Button variant="ghost" size="sm">
              <Clock className="h-4 w-4 mr-2" />
              Last 7 days
            </Button>
          </div>
          <div className="flex items-center justify-center h-[300px]">
            <PieChart className="h-48 w-48 text-muted-foreground" />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
