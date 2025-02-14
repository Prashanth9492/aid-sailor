
import { Card } from "@/components/ui/card";
import { 
  Activity, 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  LineChart,
  Ticket, 
  TrendingUp,
  Users,
  Wallet
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend
} from "recharts";

const Dashboard = () => {
  // Weekly analysis data
  const weeklyData = [
    { name: "Mon", tickets: 4, resolved: 3 },
    { name: "Tue", tickets: 6, resolved: 4 },
    { name: "Wed", tickets: 8, resolved: 7 },
    { name: "Thu", tickets: 5, resolved: 4 },
    { name: "Fri", tickets: 7, resolved: 6 },
    { name: "Sat", tickets: 3, resolved: 3 },
    { name: "Sun", tickets: 2, resolved: 2 }
  ];

  // Financial stats
  const stats = [
    {
      title: "Total Earnings",
      value: "$12,458",
      icon: <DollarSign className="h-6 w-6 text-green-500" />,
      trend: "+15.3%",
      color: "bg-green-500/10"
    },
    {
      title: "Total Deposits",
      value: "$4,875",
      icon: <Wallet className="h-6 w-6 text-blue-500" />,
      trend: "+8.2%",
      color: "bg-blue-500/10"
    },
    {
      title: "Active Users",
      value: "1,234",
      icon: <Users className="h-6 w-6 text-purple-500" />,
      trend: "+12.5%",
      color: "bg-purple-500/10"
    },
    {
      title: "Support Tickets",
      value: "89",
      icon: <Ticket className="h-6 w-6 text-orange-500" />,
      trend: "-2.3%",
      color: "bg-orange-500/10"
    }
  ];

  // Transactions data
  const transactions = [
    {
      id: "TX1",
      title: "Premium Subscription",
      amount: "+$299.00",
      time: "2 hours ago",
      status: "completed"
    },
    {
      id: "TX2",
      title: "Basic Plan Renewal",
      amount: "+$99.00",
      time: "5 hours ago",
      status: "completed"
    },
    {
      id: "TX3",
      title: "Enterprise License",
      amount: "+$999.00",
      time: "1 day ago",
      status: "pending"
    }
  ];

  // Pie chart data for ticket distribution
  const ticketDistribution = [
    { name: "Open", value: 30, color: "#ec4899" },
    { name: "In Progress", value: 45, color: "#8b5cf6" },
    { name: "Resolved", value: 25, color: "#10b981" }
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome to your analytics overview.</p>
        </div>
        <Button>
          <LineChart className="h-4 w-4 mr-2" />
          Download Report
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
                <span className={`text-sm ${
                  stat.trend.startsWith("+") ? "text-green-500" : "text-red-500"
                }`}>{stat.trend}</span>
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
            <h3 className="text-lg font-semibold">Weekly Analysis</h3>
            <Button variant="ghost" size="sm">
              <Clock className="h-4 w-4 mr-2" />
              Last 7 days
            </Button>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={weeklyData}>
                <defs>
                  <linearGradient id="tickets" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="resolved" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="name" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="tickets"
                  stroke="#8b5cf6"
                  fillOpacity={1}
                  fill="url(#tickets)"
                />
                <Area
                  type="monotone"
                  dataKey="resolved"
                  stroke="#10b981"
                  fillOpacity={1}
                  fill="url(#resolved)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Ticket Distribution</h3>
            <Button variant="ghost" size="sm">
              <TrendingUp className="h-4 w-4 mr-2" />
              Real-time
            </Button>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={ticketDistribution}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {ticketDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Recent Transactions</h3>
          <Button variant="ghost" size="sm">View all</Button>
        </div>
        <div className="space-y-6">
          {transactions.map((transaction, index) => (
            <motion.div
              key={transaction.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-full ${
                  transaction.status === "completed" ? "bg-green-500/10" : "bg-yellow-500/10"
                }`}>
                  <DollarSign className={`h-4 w-4 ${
                    transaction.status === "completed" ? "text-green-500" : "text-yellow-500"
                  }`} />
                </div>
                <div>
                  <h4 className="text-sm font-medium">{transaction.title}</h4>
                  <p className="text-xs text-muted-foreground">{transaction.time}</p>
                </div>
              </div>
              <span className={`text-sm font-medium ${
                transaction.amount.startsWith("+") ? "text-green-500" : "text-red-500"
              }`}>
                {transaction.amount}
              </span>
            </motion.div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
