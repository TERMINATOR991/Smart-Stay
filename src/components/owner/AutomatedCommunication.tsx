import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Switch } from "../ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Alert, AlertDescription } from "../ui/alert";
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
  BarChart3
} from "lucide-react";

interface AutomatedCommunicationProps {
  onViewChange: (view: string) => void;
}

export function AutomatedCommunication({ onViewChange }: AutomatedCommunicationProps) {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [showCreateTemplate, setShowCreateTemplate] = useState(false);

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
    },
    {
      id: 5,
      name: "Review Request",
      trigger: "7 days after move-in",
      action: "Request property review",
      status: "active",
      channel: "email",
      delay: "7 days",
      sent: 31,
      openRate: 64.5,
      clickRate: 28.9,
      lastTriggered: "5 hours ago"
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

  const smsTemplates = [
    {
      id: 1,
      name: "Enquiry SMS",
      message: "Hi {{student_name}}! Thanks for your interest in {{property_name}}. We'll contact you within 2 hours. Reply STOP to opt-out.",
      category: "enquiry",
      usage: 142,
      deliveryRate: 98.2,
      lastUsed: "2 minutes ago"
    },
    {
      id: 2,
      name: "Booking SMS",
      message: "Booking confirmed for {{property_name}}! Check your email for details. Contact us at {{owner_phone}} for any queries.",
      category: "booking",
      usage: 23,
      deliveryRate: 99.1,
      lastUsed: "3 hours ago"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'paused': return 'bg-yellow-100 text-yellow-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
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

  const communicationStats = {
    totalSent: 452,
    avgOpenRate: 78.5,
    avgClickRate: 28.7,
    totalSubscribers: 189,
    unsubscribeRate: 2.1,
    automationsActive: automationRules.filter(rule => rule.status === 'active').length
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
                <Settings className="w-8 h-8 text-blue-600" />
                <span>Automated Communication</span>
              </h1>
              <p className="text-gray-600 mt-1">Set up automated messages to engage with potential tenants</p>
            </div>
          </div>
          <Button
            onClick={() => setShowCreateTemplate(true)}
            className="flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Create Automation</span>
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <Send className="w-5 h-5" />
                <span>Total Sent</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">{communicationStats.totalSent}</div>
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
              <div className="text-2xl font-semibold">{communicationStats.avgOpenRate}%</div>
              <div className="text-sm text-green-600">+5.2% vs last month</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <Target className="w-5 h-5" />
                <span>Click Rate</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">{communicationStats.avgClickRate}%</div>
              <div className="text-sm text-green-600">+3.8% vs last month</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Subscribers</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">{communicationStats.totalSubscribers}</div>
              <div className="text-sm text-green-600">+12 new this week</div>
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
              <div className="text-2xl font-semibold">{communicationStats.automationsActive}</div>
              <div className="text-sm text-gray-600">Out of {automationRules.length} total</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <TrendingUp className="w-5 h-5" />
                <span>Unsubscribe</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">{communicationStats.unsubscribeRate}%</div>
              <div className="text-sm text-green-600">-0.3% vs last month</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="automations" className="space-y-6">
          <TabsList>
            <TabsTrigger value="automations">Automation Rules</TabsTrigger>
            <TabsTrigger value="templates">Email Templates</TabsTrigger>
            <TabsTrigger value="sms">SMS Templates</TabsTrigger>
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

          {/* SMS Templates */}
          <TabsContent value="sms">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>SMS Templates</CardTitle>
                    <CardDescription>Manage SMS templates for instant communication</CardDescription>
                  </div>
                  <Button variant="outline">
                    <Plus className="w-4 h-4 mr-2" />
                    New SMS Template
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {smsTemplates.map((template) => (
                    <Card key={template.id} className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="font-semibold">{template.name}</h4>
                            <Badge variant="outline">{template.category}</Badge>
                          </div>
                          
                          <div className="bg-gray-50 p-3 rounded-lg mb-3">
                            <p className="text-sm">{template.message}</p>
                          </div>

                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div>
                              <span className="text-gray-500">Usage:</span>
                              <div className="font-medium">{template.usage} times</div>
                            </div>
                            <div>
                              <span className="text-gray-500">Delivery Rate:</span>
                              <div className="font-medium text-green-600">{template.deliveryRate}%</div>
                            </div>
                            <div>
                              <span className="text-gray-500">Last Used:</span>
                              <div className="font-medium">{template.lastUsed}</div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Copy className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings */}
          <TabsContent value="settings">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Email Settings */}
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

              {/* SMS Settings */}
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

              {/* Notification Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bell className="w-5 h-5" />
                    <span>Notification Preferences</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-sm font-medium">New enquiry notifications</label>
                        <p className="text-xs text-gray-500">Get notified of new student enquiries</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-sm font-medium">Booking confirmations</label>
                        <p className="text-xs text-gray-500">Get notified when bookings are made</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-sm font-medium">Payment notifications</label>
                        <p className="text-xs text-gray-500">Get notified of payment updates</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-sm font-medium">Weekly reports</label>
                        <p className="text-xs text-gray-500">Receive weekly analytics reports</p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Advanced Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="w-5 h-5" />
                    <span>Advanced Settings</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Rate Limiting</label>
                    <Select defaultValue="moderate">
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Conservative (max 10/hour)</SelectItem>
                        <SelectItem value="moderate">Moderate (max 50/hour)</SelectItem>
                        <SelectItem value="high">Aggressive (max 200/hour)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Retry Failed Messages</label>
                    <Select defaultValue="3">
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">No retries</SelectItem>
                        <SelectItem value="1">1 retry</SelectItem>
                        <SelectItem value="3">3 retries</SelectItem>
                        <SelectItem value="5">5 retries</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium">AI Content Optimization</label>
                      <p className="text-xs text-gray-500">Use AI to improve message performance</p>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Create Template Dialog */}
        <Dialog open={showCreateTemplate} onOpenChange={setShowCreateTemplate}>
          <DialogContent className="sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Automation Rule</DialogTitle>
              <DialogDescription>
                Set up a new automated communication rule
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Rule Name</label>
                  <Input placeholder="Enter rule name" className="mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium">Trigger Event</label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select trigger" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="enquiry">New enquiry received</SelectItem>
                      <SelectItem value="view">Property viewed</SelectItem>
                      <SelectItem value="booking">Booking completed</SelectItem>
                      <SelectItem value="payment">Payment received</SelectItem>
                      <SelectItem value="checkin">Check-in date</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Communication Channel</label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select channel" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email only</SelectItem>
                      <SelectItem value="sms">SMS only</SelectItem>
                      <SelectItem value="email+sms">Email + SMS</SelectItem>
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium">Delay</label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select delay" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediate</SelectItem>
                      <SelectItem value="1hour">1 hour</SelectItem>
                      <SelectItem value="24hours">24 hours</SelectItem>
                      <SelectItem value="3days">3 days</SelectItem>
                      <SelectItem value="1week">1 week</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Message Template</label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select template" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="welcome">Welcome Email</SelectItem>
                    <SelectItem value="followup">Follow-up Email</SelectItem>
                    <SelectItem value="booking">Booking Confirmation</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex space-x-2">
                <Button className="flex-1">Create Automation</Button>
                <Button variant="outline" className="flex-1" onClick={() => setShowCreateTemplate(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}