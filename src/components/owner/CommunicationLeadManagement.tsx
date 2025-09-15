import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Switch } from "../ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Alert, AlertDescription } from "../ui/alert";
import { Progress } from "../ui/progress";
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
  Settings, 
  Mail, 
  MessageSquare, 
  Phone,
  Bell,
  Plus,
  Edit,
  Trash2,
  Play,
  Pause,
  Clock,
  Send,
  Users,
  Zap,
  CheckCircle,
  AlertCircle,
  Calendar,
  Filter,
  Search,
  Eye,
  Copy,
  RefreshCw,
  Bot,
  Smartphone,
  Globe,
  Target,
  TrendingUp,
  BarChart3,
  Brain,
  TrendingDown,
  Star,
  MapPin,
  GraduationCap,
  Building,
  Info,
  Sparkles,
  Download,
  Share,
  ThumbsUp,
  ThumbsDown,
  Activity,
  PieChart,
  Flame,
  Snowflake,
  DollarSign,
  Home,
  UserPlus,
  MessageCircle
} from "lucide-react";

interface CommunicationLeadManagementProps {
  onViewChange: (view: string) => void;
}

export function CommunicationLeadManagement({ onViewChange }: CommunicationLeadManagementProps) {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [showCreateTemplate, setShowCreateTemplate] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("all");
  const [sortBy, setSortBy] = useState("score");
  const [filterBy, setFilterBy] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeView, setActiveView] = useState<"communication" | "leads">("communication");

  const automationRules = [
    {
      id: 1,
      name: "New Enquiry Response",
      trigger: "New enquiry received",
      action: "Send welcome email + SMS",
      status: "active",
      channel: "email+sms",
      delay: "Immediate",
      sent: 142,
      openRate: 85.5,
      clickRate: 23.2,
      lastTriggered: "2 minutes ago"
    },
    {
      id: 2,
      name: "Property View Follow-up",
      trigger: "Property viewed but no enquiry",
      action: "Send follow-up email after 24h",
      status: "active",
      channel: "email",
      delay: "24 hours",
      sent: 89,
      openRate: 72.1,
      clickRate: 18.7,
      lastTriggered: "1 hour ago"
    },
    {
      id: 3,
      name: "Booking Confirmation",
      trigger: "Booking completed",
      action: "Send confirmation details",
      status: "active",
      channel: "email+sms+whatsapp",
      delay: "Immediate",
      sent: 23,
      openRate: 95.2,
      clickRate: 45.6,
      lastTriggered: "3 hours ago"
    },
    {
      id: 4,
      name: "Payment Reminder",
      trigger: "Payment due in 3 days",
      action: "Send payment reminder",
      status: "paused",
      channel: "email+sms",
      delay: "3 days before due",
      sent: 67,
      openRate: 88.3,
      clickRate: 34.1,
      lastTriggered: "1 day ago"
    }
  ];

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
      redFlags: [],
      communicationHistory: [
        { type: "email", subject: "Welcome to SmartStay", date: "2024-01-15", status: "opened" },
        { type: "sms", message: "Thank you for your interest...", date: "2024-01-15", status: "delivered" }
      ]
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
      redFlags: ["Budget concern"],
      communicationHistory: [
        { type: "email", subject: "Your property inquiry", date: "2024-01-14", status: "opened" },
        { type: "email", subject: "Follow-up on your interest", date: "2024-01-15", status: "not opened" }
      ]
    },
    {
      id: 3,
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
      redFlags: [],
      communicationHistory: [
        { type: "email", subject: "Welcome to SmartStay", date: "2024-01-13", status: "opened" },
        { type: "sms", message: "Site visit confirmed", date: "2024-01-15", status: "delivered" }
      ]
    }
  ];

  const emailTemplates = [
    {
      id: 1,
      name: "Welcome Email",
      subject: "Thank you for your interest in {{property_name}}!",
      category: "enquiry",
      usage: 142,
      openRate: 85.5,
      lastUsed: "2 minutes ago",
      preview: "Hi {{student_name}}, Thank you for showing interest in {{property_name}}. We're excited to help you find your perfect accommodation..."
    },
    {
      id: 2,
      name: "Follow-up Email",
      subject: "Still interested in {{property_name}}?",
      category: "follow-up",
      usage: 89,
      openRate: 72.1,
      lastUsed: "1 hour ago",
      preview: "Hi {{student_name}}, We noticed you viewed {{property_name}} recently. Would you like to schedule a visit or have any questions?"
    },
    {
      id: 3,
      name: "Booking Confirmation",
      subject: "Booking Confirmed - {{property_name}}",
      category: "booking",
      usage: 23,
      openRate: 95.2,
      lastUsed: "3 hours ago",
      preview: "Congratulations {{student_name}}! Your booking for {{property_name}} has been confirmed. Here are your booking details..."
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

  const communicationStats = {
    totalSent: 452,
    avgOpenRate: 78.5,
    avgClickRate: 28.7,
    totalSubscribers: 189,
    unsubscribeRate: 2.1,
    automationsActive: automationRules.filter(rule => rule.status === 'active').length
  };

  const dashboardStats = {
    totalLeads: leads.length,
    hotLeads: leads.filter(l => l.status === 'hot').length,
    avgScore: Math.round(leads.reduce((acc, l) => acc + l.score, 0) / leads.length),
    conversionRate: 65.2,
    highScoreLeads: leads.filter(l => l.score >= 80).length,
    totalCommunications: communicationStats.totalSent,
    responseRate: communicationStats.avgOpenRate,
    activeAutomations: communicationStats.automationsActive
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'paused': return 'bg-yellow-100 text-yellow-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      case 'hot': return 'bg-red-100 text-red-800';
      case 'warm': return 'bg-yellow-100 text-yellow-800';
      case 'cold': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getChannelIcon = (channel: string) => {
    if (channel.includes('email')) return <Mail className="w-3 h-3" />;
    if (channel.includes('sms')) return <MessageSquare className="w-3 h-3" />;
    if (channel.includes('whatsapp')) return <Phone className="w-3 h-3" />;
    return <Bell className="w-3 h-3" />;
  };

  const getChannelIcons = (channel: string) => {
    const channels = channel.split('+');
    return channels.map((ch, index) => (
      <span key={index} className="flex items-center space-x-1">
        {getChannelIcon(ch)}
        <span className="text-xs">{ch}</span>
      </span>
    ));
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
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
                <MessageCircle className="w-8 h-8 text-blue-600" />
                <span>Communication & Leads</span>
                <Badge className="bg-purple-100 text-purple-800 flex items-center space-x-1">
                  <Sparkles className="w-3 h-3" />
                  <span>AI-Enhanced</span>
                </Badge>
              </h1>
              <p className="text-gray-600 mt-1">Automated communication and intelligent lead scoring in one place</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button
              onClick={() => setShowCreateTemplate(true)}
              className="flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>Create Automation</span>
            </Button>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Data
            </Button>
          </div>
        </div>

        {/* Unified Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-8 gap-6 mb-8">
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
                <Send className="w-5 h-5" />
                <span>Messages Sent</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">{dashboardStats.totalCommunications}</div>
              <div className="text-sm text-gray-600">This month</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <Eye className="w-5 h-5" />
                <span>Open Rate</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">{dashboardStats.responseRate}%</div>
              <div className="text-sm text-green-600">+5.2% vs last month</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <Zap className="w-5 h-5" />
                <span>Active Rules</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">{dashboardStats.activeAutomations}</div>
              <div className="text-sm text-gray-600">Out of {automationRules.length} total</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <TrendingUp className="w-5 h-5" />
                <span>Conversion</span>
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

        {/* Main Content Tabs */}
        <Tabs value={activeView} onValueChange={(value) => setActiveView(value as "communication" | "leads")} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="communication" className="flex items-center space-x-2">
              <Settings className="w-4 h-4" />
              <span>Communication Hub</span>
            </TabsTrigger>
            <TabsTrigger value="leads" className="flex items-center space-x-2">
              <Target className="w-4 h-4" />
              <span>Lead Scoring</span>
            </TabsTrigger>
          </TabsList>

          {/* Communication Hub Tab */}
          <TabsContent value="communication">
            <Tabs defaultValue="automations" className="space-y-6">
              <TabsList>
                <TabsTrigger value="automations">Automation Rules</TabsTrigger>
                <TabsTrigger value="templates">Email Templates</TabsTrigger>
                <TabsTrigger value="analytics">Communication Analytics</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              {/* Automation Rules */}
              <TabsContent value="automations">
                <Card>
                  <CardHeader>
                    <CardTitle>Automation Rules</CardTitle>
                    <CardDescription>
                      Automatically send messages based on user actions and triggers
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {automationRules.map((rule) => (
                        <Card key={rule.id} className="p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-2">
                                <h4 className="font-semibold">{rule.name}</h4>
                                <Badge className={getStatusColor(rule.status)}>
                                  {rule.status}
                                </Badge>
                                <div className="flex items-center space-x-1">
                                  {getChannelIcons(rule.channel)}
                                </div>
                              </div>
                              
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-3">
                                <div>
                                  <span className="font-medium">Trigger:</span>
                                  <p>{rule.trigger}</p>
                                </div>
                                <div>
                                  <span className="font-medium">Action:</span>
                                  <p>{rule.action}</p>
                                </div>
                                <div>
                                  <span className="font-medium">Delay:</span>
                                  <p>{rule.delay}</p>
                                </div>
                                <div>
                                  <span className="font-medium">Last triggered:</span>
                                  <p>{rule.lastTriggered}</p>
                                </div>
                              </div>

                              <div className="grid grid-cols-3 gap-4 text-sm">
                                <div className="bg-blue-50 p-2 rounded">
                                  <div className="font-medium text-blue-800">{rule.sent}</div>
                                  <div className="text-blue-600">Messages sent</div>
                                </div>
                                <div className="bg-green-50 p-2 rounded">
                                  <div className="font-medium text-green-800">{rule.openRate}%</div>
                                  <div className="text-green-600">Open rate</div>
                                </div>
                                <div className="bg-purple-50 p-2 rounded">
                                  <div className="font-medium text-purple-800">{rule.clickRate}%</div>
                                  <div className="text-purple-600">Click rate</div>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center space-x-2">
                              <Switch 
                                checked={rule.status === 'active'} 
                                onCheckedChange={() => {}}
                              />
                              <Button variant="outline" size="sm">
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <Eye className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Email Templates */}
              <TabsContent value="templates">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Email Templates</CardTitle>
                        <CardDescription>Manage your email templates and customize messaging</CardDescription>
                      </div>
                      <Button variant="outline">
                        <Plus className="w-4 h-4 mr-2" />
                        New Template
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {emailTemplates.map((template) => (
                        <Card key={template.id} className="hover:shadow-md transition-shadow">
                          <CardHeader className="pb-3">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-lg">{template.name}</CardTitle>
                              <Badge variant="outline">{template.category}</Badge>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div>
                              <label className="text-sm font-medium text-gray-700">Subject Line:</label>
                              <p className="text-sm text-gray-900 mt-1">{template.subject}</p>
                            </div>
                            
                            <div>
                              <label className="text-sm font-medium text-gray-700">Preview:</label>
                              <p className="text-sm text-gray-600 mt-1 line-clamp-3">{template.preview}</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="text-gray-500">Usage:</span>
                                <div className="font-medium">{template.usage} times</div>
                              </div>
                              <div>
                                <span className="text-gray-500">Open Rate:</span>
                                <div className="font-medium text-green-600">{template.openRate}%</div>
                              </div>
                              <div>
                                <span className="text-gray-500">Last Used:</span>
                                <div className="font-medium">{template.lastUsed}</div>
                              </div>
                            </div>

                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm" className="flex-1">
                                <Edit className="w-3 h-3 mr-1" />
                                Edit
                              </Button>
                              <Button variant="outline" size="sm" className="flex-1">
                                <Copy className="w-3 h-3 mr-1" />
                                Duplicate
                              </Button>
                              <Button variant="outline" size="sm">
                                <Eye className="w-3 h-3" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Communication Analytics */}
              <TabsContent value="analytics">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Communication Performance</CardTitle>
                      <CardDescription>Track email and SMS performance over time</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={[
                          { month: "Oct", emails: 120, sms: 80, openRate: 75 },
                          { month: "Nov", emails: 135, sms: 95, openRate: 78 },
                          { month: "Dec", emails: 150, sms: 110, openRate: 82 },
                          { month: "Jan", emails: 142, sms: 89, openRate: 85 }
                        ]}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="emails" stroke="#8884d8" name="Emails Sent" />
                          <Line type="monotone" dataKey="sms" stroke="#82ca9d" name="SMS Sent" />
                          <Line type="monotone" dataKey="openRate" stroke="#ffc658" name="Open Rate %" />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Channel Performance</CardTitle>
                      <CardDescription>Compare different communication channels</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={[
                          { channel: "Email", sent: 452, opened: 355, clicked: 130 },
                          { channel: "SMS", sent: 285, delivered: 280, replied: 45 },
                          { channel: "WhatsApp", sent: 89, delivered: 87, replied: 23 }
                        ]}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="channel" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="sent" fill="#8884d8" name="Sent" />
                          <Bar dataKey="opened" fill="#82ca9d" name="Opened/Delivered" />
                          <Bar dataKey="clicked" fill="#ffc658" name="Clicked/Replied" />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Settings */}
              <TabsContent value="settings">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Mail className="w-5 h-5" />
                        <span>Email Settings</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="text-sm font-medium">From Name</label>
                        <Input defaultValue="SmartStay Properties" className="mt-1" />
                      </div>
                      <div>
                        <label className="text-sm font-medium">From Email</label>
                        <Input defaultValue="noreply@smartstay.com" className="mt-1" />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Reply-to Email</label>
                        <Input defaultValue="support@smartstay.com" className="mt-1" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <label className="text-sm font-medium">Enable Email Tracking</label>
                          <p className="text-xs text-gray-500">Track opens and clicks</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <MessageSquare className="w-5 h-5" />
                        <span>SMS Settings</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="text-sm font-medium">Sender ID</label>
                        <Input defaultValue="SMARTSTAY" className="mt-1" />
                      </div>
                      <div>
                        <label className="text-sm font-medium">SMS Provider</label>
                        <Select defaultValue="twilio">
                          <SelectTrigger className="mt-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="twilio">Twilio</SelectItem>
                            <SelectItem value="aws">AWS SNS</SelectItem>
                            <SelectItem value="textlocal">TextLocal</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <label className="text-sm font-medium">Enable Delivery Reports</label>
                          <p className="text-xs text-gray-500">Get SMS delivery status</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <Alert>
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription className="text-xs">
                          SMS credits remaining: 2,456 messages
                        </AlertDescription>
                      </Alert>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>

          {/* Lead Scoring Tab */}
          <TabsContent value="leads">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Leads List */}
              <div className="lg:col-span-3">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Lead Scores & Communication History</CardTitle>
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

                              {/* Communication History */}
                              <div className="mb-3">
                                <div className="text-sm font-medium mb-2">Recent Communications</div>
                                <div className="flex flex-wrap gap-2">
                                  {lead.communicationHistory.map((comm, index) => (
                                    <Badge key={index} variant="outline" className="flex items-center space-x-1">
                                      {comm.type === 'email' ? <Mail className="w-3 h-3" /> : <MessageSquare className="w-3 h-3" />}
                                      <span>{comm.type === 'email' ? comm.subject : comm.message?.substring(0, 20) + '...'}</span>
                                      <span className={`w-2 h-2 rounded-full ${comm.status === 'opened' || comm.status === 'delivered' ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                                    </Badge>
                                  ))}
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
                                    Send Message
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
                      <UserPlus className="w-4 h-4 mr-2" />
                      Import Leads
                    </Button>
                    <Button variant="outline" className="w-full" size="sm">
                      <Settings className="w-4 h-4 mr-2" />
                      Configure Rules
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
                        <strong>Communication Tip:</strong> Follow-up emails show 23% higher response rates
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
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}