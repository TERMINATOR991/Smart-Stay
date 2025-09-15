import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Progress } from "../ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Alert, AlertDescription } from "../ui/alert";
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from "recharts";
import { 
  ArrowLeft, 
  Target, 
  Brain,
  Users,
  TrendingUp,
  TrendingDown,
  Star,
  Eye,
  MessageSquare,
  Phone,
  Mail,
  Calendar,
  MapPin,
  GraduationCap,
  Building,
  Clock,
  Zap,
  CheckCircle,
  AlertCircle,
  Info,
  Sparkles,
  Filter,
  Search,
  RefreshCw,
  Download,
  Share,
  Settings,
  ThumbsUp,
  ThumbsDown,
  Activity,
  BarChart3,
  PieChart,
  Flame,
  Snowflake,
  DollarSign,
  Home
} from "lucide-react";

interface LeadScoringProps {
  onViewChange: (view: string) => void;
}

export function LeadScoring({ onViewChange }: LeadScoringProps) {
  const [selectedProperty, setSelectedProperty] = useState("all");
  const [sortBy, setSortBy] = useState("score");
  const [filterBy, setFilterBy] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const leads = [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul.sharma@email.com",
      phone: "+91 98765 43210",
      photo: "https://images.unsplash.com/photo-1600178572204-6ac8886aae63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU3MTU1NTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      university: "Stanford University",
      course: "Computer Science",
      year: "2nd Year",
      budget: "15000-18000",
      score: 92,
      scoreBreakdown: {
        profileComplete: 95,
        budgetMatch: 90,
        timeOnSite: 85,
        engagement: 98,
        responseRate: 90,
        references: 95
      },
      interestedProperty: "Modern Student Apartment - Room 201",
      enquiryDate: "2024-01-15",
      lastActivity: "2 hours ago",
      status: "hot",
      activities: [
        { action: "Viewed property details", time: "2 hours ago" },
        { action: "Requested virtual tour", time: "4 hours ago" },
        { action: "Downloaded brochure", time: "6 hours ago" }
      ],
      conversionProbability: 85,
      expectedMoveIn: "February 2024",
      priorityFactors: ["Budget match", "Quick response", "Complete profile"],
      redFlags: []
    },
    {
      id: 2,
      name: "Priya Patel",
      email: "priya.patel@email.com",
      phone: "+91 87654 32109",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b95b7db1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Nzg4Nzd8MHwxfHNlYXJjaHwyfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzEzMTM4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      university: "MIT",
      course: "Mechanical Engineering",
      year: "1st Year",
      budget: "8000-12000",
      score: 78,
      scoreBreakdown: {
        profileComplete: 85,
        budgetMatch: 75,
        timeOnSite: 70,
        engagement: 80,
        responseRate: 85,
        references: 75
      },
      interestedProperty: "Cozy Shared Room - Room 101",
      enquiryDate: "2024-01-14",
      lastActivity: "1 day ago",
      status: "warm",
      activities: [
        { action: "Viewed photos", time: "1 day ago" },
        { action: "Read reviews", time: "2 days ago" },
        { action: "Bookmarked property", time: "2 days ago" }
      ],
      conversionProbability: 65,
      expectedMoveIn: "March 2024",
      priorityFactors: ["University proximity", "Shared accommodation"],
      redFlags: ["Budget concern"]
    },
    {
      id: 3,
      name: "Amit Kumar",
      email: "amit.kumar@email.com",
      phone: "+91 76543 21098",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtYW4lMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTcxMzEzODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      university: "Harvard University",
      course: "MBA",
      year: "1st Year",
      budget: "20000-25000",
      score: 58,
      scoreBreakdown: {
        profileComplete: 60,
        budgetMatch: 85,
        timeOnSite: 45,
        engagement: 40,
        responseRate: 50,
        references: 65
      },
      interestedProperty: "Premium PG - Room 301",
      enquiryDate: "2024-01-10",
      lastActivity: "5 days ago",
      status: "cold",
      activities: [
        { action: "Initial enquiry", time: "5 days ago" }
      ],
      conversionProbability: 25,
      expectedMoveIn: "April 2024",
      priorityFactors: ["Premium amenities"],
      redFlags: ["Low engagement", "Delayed responses", "Incomplete profile"]
    },
    {
      id: 4,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "+1 555 123 4567",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNtaWxlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU3MTMxMzgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      university: "Stanford University",
      course: "Psychology",
      year: "3rd Year",
      budget: "14000-17000",
      score: 88,
      scoreBreakdown: {
        profileComplete: 90,
        budgetMatch: 95,
        timeOnSite: 80,
        engagement: 92,
        responseRate: 85,
        references: 85
      },
      interestedProperty: "Modern Student Apartment - Room 201",
      enquiryDate: "2024-01-13",
      lastActivity: "6 hours ago",
      status: "hot",
      activities: [
        { action: "Scheduled site visit", time: "6 hours ago" },
        { action: "Asked about amenities", time: "12 hours ago" },
        { action: "Shared with roommate", time: "1 day ago" }
      ],
      conversionProbability: 80,
      expectedMoveIn: "February 2024",
      priorityFactors: ["Location preference", "Amenities match", "Roommate approval"],
      redFlags: []
    }
  ];

  const scoringFactors = [
    {
      factor: "Profile Completeness",
      weight: 20,
      description: "How complete is the student's profile information"
    },
    {
      factor: "Budget Match",
      weight: 25,
      description: "How well their budget aligns with your property price"
    },
    {
      factor: "Engagement Level",
      weight: 20,
      description: "Level of interaction with your listings"
    },
    {
      factor: "Time on Site",
      weight: 15,
      description: "How much time they spend browsing"
    },
    {
      factor: "Response Rate",
      weight: 15,
      description: "How quickly they respond to communications"
    },
    {
      factor: "References",
      weight: 5,
      description: "Quality of provided references and documents"
    }
  ];

  const conversionData = [
    { scoreRange: "90-100", leads: 8, conversions: 7, rate: 87.5 },
    { scoreRange: "80-89", leads: 15, conversions: 11, rate: 73.3 },
    { scoreRange: "70-79", leads: 22, conversions: 12, rate: 54.5 },
    { scoreRange: "60-69", leads: 18, conversions: 6, rate: 33.3 },
    { scoreRange: "50-59", leads: 12, conversions: 2, rate: 16.7 },
    { scoreRange: "0-49", leads: 25, conversions: 1, rate: 4.0 }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return 'bg-green-100';
    if (score >= 60) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'hot': return 'bg-red-100 text-red-800';
      case 'warm': return 'bg-yellow-100 text-yellow-800';
      case 'cold': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'hot': return <Flame className="w-4 h-4" />;
      case 'warm': return <Activity className="w-4 h-4" />;
      case 'cold': return <Snowflake className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.university.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterBy === 'all' || lead.status === filterBy;
    return matchesSearch && matchesFilter;
  });

  const sortedLeads = [...filteredLeads].sort((a, b) => {
    switch (sortBy) {
      case 'score': return b.score - a.score;
      case 'date': return new Date(b.enquiryDate).getTime() - new Date(a.enquiryDate).getTime();
      case 'probability': return b.conversionProbability - a.conversionProbability;
      default: return 0;
    }
  });

  const dashboardStats = {
    totalLeads: leads.length,
    hotLeads: leads.filter(l => l.status === 'hot').length,
    avgScore: Math.round(leads.reduce((acc, l) => acc + l.score, 0) / leads.length),
    conversionRate: 65.2,
    highScoreLeads: leads.filter(l => l.score >= 80).length
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
                <Target className="w-8 h-8 text-purple-600" />
                <span>Lead Scoring</span>
                <Badge className="bg-purple-100 text-purple-800 flex items-center space-x-1">
                  <Sparkles className="w-3 h-3" />
                  <span>AI-Powered</span>
                </Badge>
              </h1>
              <p className="text-gray-600 mt-1">AI analyzes and scores potential tenants for better prioritization</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Settings className="w-4 h-4 mr-2" />
              Configure Scoring
            </Button>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Leads
            </Button>
          </div>
        </div>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Total Leads</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">{dashboardStats.totalLeads}</div>
              <div className="text-sm text-green-600">+12% this week</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <Flame className="w-5 h-5 text-red-600" />
                <span>Hot Leads</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-red-600">{dashboardStats.hotLeads}</div>
              <div className="text-sm text-gray-600">High priority</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <Target className="w-5 h-5" />
                <span>Avg Score</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">{dashboardStats.avgScore}</div>
              <div className="text-sm text-green-600">+5 from last month</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <TrendingUp className="w-5 h-5" />
                <span>Conversion Rate</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">{dashboardStats.conversionRate}%</div>
              <div className="text-sm text-green-600">Above average</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <Star className="w-5 h-5" />
                <span>High Score</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-green-600">{dashboardStats.highScoreLeads}</div>
              <div className="text-sm text-gray-600">Score 80+</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Leads List */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Lead Scores & Prioritization</CardTitle>
                  <div className="flex space-x-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search leads..."
                        className="pl-10 w-64"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <Select value={filterBy} onValueChange={setFilterBy}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="hot">Hot</SelectItem>
                        <SelectItem value="warm">Warm</SelectItem>
                        <SelectItem value="cold">Cold</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="score">Sort by Score</SelectItem>
                        <SelectItem value="date">Sort by Date</SelectItem>
                        <SelectItem value="probability">Sort by Probability</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sortedLeads.map((lead) => (
                    <Card key={lead.id} className="p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={lead.photo} alt={lead.name} />
                          <AvatarFallback>{lead.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>

                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h4 className="font-medium">{lead.name}</h4>
                              <p className="text-sm text-gray-600">{lead.course} • {lead.university}</p>
                              <p className="text-xs text-gray-500">{lead.year} • Budget: ₹{lead.budget}</p>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                              <Badge className={getStatusColor(lead.status)} size="sm">
                                {getStatusIcon(lead.status)}
                                <span className="ml-1">{lead.status}</span>
                              </Badge>
                              <div className="text-center">
                                <div className={`text-2xl font-semibold ${getScoreColor(lead.score)}`}>
                                  {lead.score}
                                </div>
                                <div className="text-xs text-gray-500">AI Score</div>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-3 gap-4 mb-3">
                            <div>
                              <div className="text-sm font-medium">Conversion Probability</div>
                              <div className="flex items-center space-x-2">
                                <Progress value={lead.conversionProbability} className="h-2 flex-1" />
                                <span className="text-sm font-medium">{lead.conversionProbability}%</span>
                              </div>
                            </div>
                            <div>
                              <div className="text-sm font-medium">Interested Property</div>
                              <div className="text-sm text-gray-600 truncate">{lead.interestedProperty}</div>
                            </div>
                            <div>
                              <div className="text-sm font-medium">Expected Move-in</div>
                              <div className="text-sm text-gray-600">{lead.expectedMoveIn}</div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-3 h-3" />
                                <span>Enquiry: {lead.enquiryDate}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="w-3 h-3" />
                                <span>Last activity: {lead.lastActivity}</span>
                              </div>
                            </div>

                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                <Eye className="w-3 h-3 mr-1" />
                                View Details
                              </Button>
                              <Button variant="outline" size="sm">
                                <MessageSquare className="w-3 h-3 mr-1" />
                                Contact
                              </Button>
                              <Button variant="outline" size="sm">
                                <Phone className="w-3 h-3 mr-1" />
                                Call
                              </Button>
                            </div>
                          </div>

                          {/* Priority Factors & Red Flags */}
                          <div className="mt-3 pt-3 border-t">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <div className="text-xs font-medium text-green-700 mb-1">Priority Factors</div>
                                <div className="flex flex-wrap gap-1">
                                  {lead.priorityFactors.map((factor, index) => (
                                    <Badge key={index} className="bg-green-100 text-green-800" size="sm">
                                      {factor}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              {lead.redFlags.length > 0 && (
                                <div>
                                  <div className="text-xs font-medium text-red-700 mb-1">Red Flags</div>
                                  <div className="flex flex-wrap gap-1">
                                    {lead.redFlags.map((flag, index) => (
                                      <Badge key={index} className="bg-red-100 text-red-800" size="sm">
                                        {flag}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Scoring Factors */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="w-5 h-5" />
                  <span>Scoring Factors</span>
                </CardTitle>
                <CardDescription>How AI calculates lead scores</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {scoringFactors.map((factor, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{factor.factor}</span>
                        <span className="font-medium">{factor.weight}%</span>
                      </div>
                      <Progress value={factor.weight * 4} className="h-2" />
                      <p className="text-xs text-gray-600 mt-1">{factor.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Conversion Analytics */}
            <Card>
              <CardHeader>
                <CardTitle>Conversion by Score</CardTitle>
                <CardDescription>Historical conversion rates by lead score</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={conversionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="scoreRange" />
                    <YAxis />
                    <Tooltip formatter={(value, name) => [
                      name === 'rate' ? `${value}%` : value,
                      name === 'rate' ? 'Conversion Rate' : 'Count'
                    ]} />
                    <Bar dataKey="rate" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full" size="sm">
                  <Zap className="w-4 h-4 mr-2" />
                  Contact Hot Leads
                </Button>
                <Button variant="outline" className="w-full" size="sm">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refresh Scores
                </Button>
                <Button variant="outline" className="w-full" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export Report
                </Button>
                <Button variant="outline" className="w-full" size="sm">
                  <Settings className="w-4 h-4 mr-2" />
                  Scoring Rules
                </Button>
              </CardContent>
            </Card>

            {/* AI Insights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5" />
                  <span>AI Insights</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Alert>
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription className="text-sm">
                    <strong>Hot Leads Alert:</strong> 2 leads with 85%+ probability are ready to convert
                  </AlertDescription>
                </Alert>
                
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription className="text-sm">
                    <strong>Trend:</strong> Students from Stanford show 23% higher conversion rates
                  </AlertDescription>
                </Alert>
                
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription className="text-sm">
                    <strong>Opportunity:</strong> 3 warm leads haven't been contacted in 2+ days
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}