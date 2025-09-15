import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Progress } from "../ui/progress";
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from "recharts";
import { 
  ArrowLeft, 
  BarChart3, 
  Eye, 
  MessageSquare, 
  Heart,
  TrendingUp,
  TrendingDown,
  Users,
  MapPin,
  Calendar,
  Search,
  Filter,
  Download,
  Share,
  Zap,
  Target,
  DollarSign,
  Clock,
  Star,
  Phone,
  Mail,
  Wifi,
  Car,
  Utensils,
  AlertCircle,
  CheckCircle,
  Info,
  RefreshCw
} from "lucide-react";

interface AnalyticsInsightsProps {
  onViewChange: (view: string) => void;
}

export function AnalyticsInsights({ onViewChange }: AnalyticsInsightsProps) {
  const [timeRange, setTimeRange] = useState("30days");
  const [selectedProperty, setSelectedProperty] = useState("all");

  // Mock data for analytics
  const viewsData = [
    { date: "Jan 1", views: 45, enquiries: 8, bookings: 2 },
    { date: "Jan 7", views: 52, enquiries: 12, bookings: 3 },
    { date: "Jan 14", views: 38, enquiries: 6, bookings: 1 },
    { date: "Jan 21", views: 65, enquiries: 15, bookings: 4 },
    { date: "Jan 28", views: 58, enquiries: 11, bookings: 2 }
  ];

  const propertyPerformance = [
    {
      id: 1,
      name: "Modern Student Apartment - Room 201",
      views: 324,
      enquiries: 45,
      bookings: 8,
      revenue: 120000,
      occupancyRate: 95,
      avgRating: 4.7,
      status: "high-performing"
    },
    {
      id: 2,
      name: "Cozy Shared Room - Room 101",
      views: 186,
      enquiries: 28,
      bookings: 5,
      revenue: 40000,
      occupancyRate: 80,
      avgRating: 4.3,
      status: "moderate"
    },
    {
      id: 3,
      name: "Premium PG - Room 301",
      views: 412,
      enquiries: 62,
      bookings: 12,
      revenue: 240000,
      occupancyRate: 100,
      avgRating: 4.9,
      status: "excellent"
    }
  ];

  const searchFiltersData = [
    { filter: "WiFi", usage: 85, count: 234 },
    { filter: "Food Included", usage: 72, count: 198 },
    { filter: "AC", usage: 68, count: 187 },
    { filter: "Parking", usage: 45, count: 124 },
    { filter: "Near University", usage: 92, count: 253 },
    { filter: "Budget Friendly", usage: 58, count: 159 }
  ];

  const demographicsData = [
    { category: "Engineering Students", value: 45, color: "#8884d8" },
    { category: "MBA Students", value: 25, color: "#82ca9d" },
    { category: "Medical Students", value: 20, color: "#ffc658" },
    { category: "Others", value: 10, color: "#ff7c7c" }
  ];

  const enquirySourcesData = [
    { source: "Direct Search", value: 40, color: "#8884d8" },
    { source: "Social Media", value: 25, color: "#82ca9d" },
    { source: "Referrals", value: 20, color: "#ffc658" },
    { source: "University Portal", value: 15, color: "#ff7c7c" }
  ];

  const monthlyRevenue = [
    { month: "Aug", revenue: 180000, bookings: 12 },
    { month: "Sep", revenue: 195000, bookings: 14 },
    { month: "Oct", revenue: 170000, bookings: 11 },
    { month: "Nov", revenue: 220000, bookings: 16 },
    { month: "Dec", revenue: 205000, bookings: 13 },
    { month: "Jan", revenue: 240000, bookings: 18 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'bg-green-100 text-green-800';
      case 'high-performing': return 'bg-blue-100 text-blue-800';
      case 'moderate': return 'bg-yellow-100 text-yellow-800';
      case 'needs-attention': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTrendIcon = (current: number, previous: number) => {
    if (current > previous) return <TrendingUp className="w-4 h-4 text-green-600" />;
    if (current < previous) return <TrendingDown className="w-4 h-4 text-red-600" />;
    return <span className="w-4 h-4" />;
  };

  const overallStats = {
    totalViews: 922,
    totalEnquiries: 135,
    totalBookings: 25,
    conversionRate: 18.5,
    avgResponseTime: "2.4 hours",
    totalRevenue: 400000
  };

  const insights = [
    {
      type: "positive",
      title: "Peak Interest Hours",
      description: "Most enquiries come between 6-9 PM. Consider promoting listings during this time.",
      action: "Optimize timing"
    },
    {
      type: "warning",
      title: "Room 101 Performance",
      description: "Views are 20% lower than average. Consider updating photos or description.",
      action: "Update listing"
    },
    {
      type: "info",
      title: "Popular Amenities",
      description: "WiFi and Food inclusion are the most searched filters. Highlight these features.",
      action: "Update keywords"
    }
  ];

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'positive': return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'warning': return <AlertCircle className="w-5 h-5 text-orange-600" />;
      case 'info': return <Info className="w-5 h-5 text-blue-600" />;
      default: return <Info className="w-5 h-5 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => onViewChange('dashboard')}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Dashboard</span>
            </Button>
            <div>
              <h1 className="text-3xl font-semibold flex items-center space-x-2">
                <BarChart3 className="w-8 h-8 text-blue-600" />
                <span>Analytics & Insights</span>
              </h1>
              <p className="text-gray-600 mt-1">Track performance and optimize your listings</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 days</SelectItem>
                <SelectItem value="30days">Last 30 days</SelectItem>
                <SelectItem value="90days">Last 90 days</SelectItem>
                <SelectItem value="1year">Last year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <Eye className="w-5 h-5" />
                <span>Total Views</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">{overallStats.totalViews.toLocaleString()}</div>
              <div className="flex items-center space-x-1 text-sm text-green-600">
                {getTrendIcon(overallStats.totalViews, 850)}
                <span>+8.5% vs last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <MessageSquare className="w-5 h-5" />
                <span>Enquiries</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">{overallStats.totalEnquiries}</div>
              <div className="flex items-center space-x-1 text-sm text-green-600">
                {getTrendIcon(overallStats.totalEnquiries, 120)}
                <span>+12.5% vs last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Bookings</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">{overallStats.totalBookings}</div>
              <div className="flex items-center space-x-1 text-sm text-green-600">
                {getTrendIcon(overallStats.totalBookings, 20)}
                <span>+25% vs last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <Target className="w-5 h-5" />
                <span>Conversion</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">{overallStats.conversionRate}%</div>
              <div className="flex items-center space-x-1 text-sm text-green-600">
                {getTrendIcon(18.5, 16.2)}
                <span>+2.3% vs last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>Avg Response</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">{overallStats.avgResponseTime}</div>
              <div className="flex items-center space-x-1 text-sm text-green-600">
                {getTrendIcon(2.4, 3.1)}
                <span>-23% faster</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <DollarSign className="w-5 h-5" />
                <span>Revenue</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">₹{overallStats.totalRevenue.toLocaleString()}</div>
              <div className="flex items-center space-x-1 text-sm text-green-600">
                {getTrendIcon(400000, 350000)}
                <span>+14.3% vs last month</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Analytics */}
          <div className="lg:col-span-2 space-y-6">
            {/* Views and Enquiries Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Views & Enquiries Trend</CardTitle>
                <CardDescription>Track how your listings are performing over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={viewsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="views" stroke="#8884d8" strokeWidth={2} />
                    <Line type="monotone" dataKey="enquiries" stroke="#82ca9d" strokeWidth={2} />
                    <Line type="monotone" dataKey="bookings" stroke="#ffc658" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Property Performance */}
            <Card>
              <CardHeader>
                <CardTitle>Property Performance</CardTitle>
                <CardDescription>Individual property metrics and performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {propertyPerformance.map((property) => (
                    <div key={property.id} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-medium">{property.name}</h4>
                          <Badge className={getStatusColor(property.status)}>
                            {property.status.replace('-', ' ')}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">₹{property.revenue.toLocaleString()}</div>
                          <div className="text-sm text-gray-600">Revenue</div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-4 gap-4 text-sm">
                        <div>
                          <div className="flex items-center space-x-1">
                            <Eye className="w-3 h-3" />
                            <span className="font-medium">{property.views}</span>
                          </div>
                          <div className="text-gray-600">Views</div>
                        </div>
                        <div>
                          <div className="flex items-center space-x-1">
                            <MessageSquare className="w-3 h-3" />
                            <span className="font-medium">{property.enquiries}</span>
                          </div>
                          <div className="text-gray-600">Enquiries</div>
                        </div>
                        <div>
                          <div className="flex items-center space-x-1">
                            <CheckCircle className="w-3 h-3" />
                            <span className="font-medium">{property.bookings}</span>
                          </div>
                          <div className="text-gray-600">Bookings</div>
                        </div>
                        <div>
                          <div className="flex items-center space-x-1">
                            <Star className="w-3 h-3" />
                            <span className="font-medium">{property.avgRating}</span>
                          </div>
                          <div className="text-gray-600">Rating</div>
                        </div>
                      </div>
                      
                      <div className="mt-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Occupancy Rate</span>
                          <span>{property.occupancyRate}%</span>
                        </div>
                        <Progress value={property.occupancyRate} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Revenue Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Revenue Trend</CardTitle>
                <CardDescription>Monthly revenue and booking patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={monthlyRevenue}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value, name) => [
                      name === 'revenue' ? `₹${value.toLocaleString()}` : value,
                      name === 'revenue' ? 'Revenue' : 'Bookings'
                    ]} />
                    <Legend />
                    <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    <Bar dataKey="bookings" fill="#82ca9d" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Analytics */}
          <div className="space-y-6">
            {/* Popular Search Filters */}
            <Card>
              <CardHeader>
                <CardTitle>Popular Search Filters</CardTitle>
                <CardDescription>What students are looking for</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {searchFiltersData.map((filter, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{filter.filter}</span>
                        <span>{filter.count} searches</span>
                      </div>
                      <Progress value={filter.usage} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Student Demographics */}
            <Card>
              <CardHeader>
                <CardTitle>Student Demographics</CardTitle>
                <CardDescription>Who's viewing your listings</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={demographicsData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ category, value }) => `${category} (${value}%)`}
                    >
                      {demographicsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Enquiry Sources */}
            <Card>
              <CardHeader>
                <CardTitle>Enquiry Sources</CardTitle>
                <CardDescription>Where your leads come from</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={enquirySourcesData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ source, value }) => `${value}%`}
                    >
                      {enquirySourcesData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value, name) => [`${value}%`, name]} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* AI Insights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="w-5 h-5" />
                  <span>AI Insights</span>
                </CardTitle>
                <CardDescription>Smart recommendations to improve performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {insights.map((insight, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-start space-x-3">
                        {getInsightIcon(insight.type)}
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{insight.title}</h4>
                          <p className="text-xs text-gray-600 mb-2">{insight.description}</p>
                          <Button variant="outline" size="sm" className="text-xs">
                            {insight.action}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}