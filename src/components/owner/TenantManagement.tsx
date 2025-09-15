import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Alert, AlertDescription } from "../ui/alert";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { 
  ArrowLeft, 
  UserCheck, 
  Search, 
  Plus, 
  Phone, 
  Mail, 
  MapPin,
  DollarSign,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Clock,
  FileText,
  Wrench,
  CreditCard,
  Edit,
  Trash2,
  Filter,
  Download,
  Send,
  Eye,
  MessageSquare,
  Home,
  User,
  Building
} from "lucide-react";

interface TenantManagementProps {
  onViewChange: (view: string) => void;
}

export function TenantManagement({ onViewChange }: TenantManagementProps) {
  const [selectedTenant, setSelectedTenant] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [showAddTenant, setShowAddTenant] = useState(false);

  const tenants = [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul.sharma@email.com",
      phone: "+91 98765 43210",
      photo: "https://images.unsplash.com/photo-1600178572204-6ac8886aae63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU3MTU1NTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      property: "Modern Student Apartment - Room 201",
      rent: 15000,
      deposit: 30000,
      leaseStart: "2024-01-15",
      leaseEnd: "2024-12-15",
      status: "active",
      university: "Stanford University",
      emergencyContact: "Suresh Sharma (+91 98765 43211)",
      idProof: "Aadhaar Card",
      paymentHistory: [
        { month: "January 2024", amount: 15000, date: "2024-01-05", status: "paid" },
        { month: "December 2023", amount: 15000, date: "2023-12-05", status: "paid" },
        { month: "November 2023", amount: 15000, date: "2023-11-08", status: "late" }
      ],
      maintenanceRequests: [
        { id: 1, issue: "AC not working", date: "2024-01-10", status: "resolved", priority: "high" },
        { id: 2, issue: "Wi-Fi connectivity issues", date: "2024-01-05", status: "in_progress", priority: "medium" }
      ]
    },
    {
      id: 2,
      name: "Priya Patel",
      email: "priya.patel@email.com",
      phone: "+91 87654 32109",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b95b7db1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Nzg4Nzd8MHwxfHNlYXJjaHwyfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzEzMTM4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      property: "Cozy Shared Room - Room 101",
      rent: 8000,
      deposit: 16000,
      leaseStart: "2023-08-01",
      leaseEnd: "2024-07-31",
      status: "active",
      university: "MIT",
      emergencyContact: "Ramesh Patel (+91 87654 32110)",
      idProof: "Passport",
      paymentHistory: [
        { month: "January 2024", amount: 8000, date: "2024-01-03", status: "paid" },
        { month: "December 2023", amount: 8000, date: "2023-12-03", status: "paid" },
        { month: "November 2023", amount: 8000, date: "2023-11-03", status: "paid" }
      ],
      maintenanceRequests: [
        { id: 3, issue: "Leaky faucet in bathroom", date: "2024-01-08", status: "pending", priority: "low" }
      ]
    },
    {
      id: 3,
      name: "Amit Kumar",
      email: "amit.kumar@email.com",
      phone: "+91 76543 21098",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtYW4lMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTcxMzEzODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      property: "Premium PG - Room 301",
      rent: 20000,
      deposit: 40000,
      leaseStart: "2023-09-01",
      leaseEnd: "2024-08-31",
      status: "overdue",
      university: "Harvard University",
      emergencyContact: "Sunita Kumar (+91 76543 21099)",
      idProof: "Driving License",
      paymentHistory: [
        { month: "January 2024", amount: 20000, date: null, status: "pending" },
        { month: "December 2023", amount: 20000, date: "2023-12-15", status: "late" },
        { month: "November 2023", amount: 20000, date: "2023-11-05", status: "paid" }
      ],
      maintenanceRequests: []
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'overdue': return 'bg-red-100 text-red-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'text-green-600';
      case 'late': return 'text-orange-600';
      case 'pending': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getMaintenanceStatusColor = (status: string) => {
    switch (status) {
      case 'resolved': return 'bg-green-100 text-green-800';
      case 'in_progress': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-orange-600';
      case 'low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  const filteredTenants = tenants.filter(tenant => {
    const matchesSearch = tenant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tenant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tenant.property.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || tenant.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const selectedTenantData = selectedTenant ? tenants.find(t => t.id.toString() === selectedTenant) : null;

  const dashboardStats = {
    totalTenants: tenants.length,
    activeTenants: tenants.filter(t => t.status === 'active').length,
    overdueTenants: tenants.filter(t => t.status === 'overdue').length,
    pendingRequests: tenants.reduce((acc, t) => acc + t.maintenanceRequests.filter(r => r.status === 'pending').length, 0),
    monthlyRevenue: tenants.filter(t => t.status === 'active').reduce((acc, t) => acc + t.rent, 0)
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
                <UserCheck className="w-8 h-8 text-blue-600" />
                <span>Tenant Management</span>
              </h1>
              <p className="text-gray-600 mt-1">Manage all your tenants and their information in one place</p>
            </div>
          </div>
          <Button
            onClick={() => setShowAddTenant(true)}
            className="flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Tenant</span>
          </Button>
        </div>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>Total Tenants</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">{dashboardStats.totalTenants}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Active</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-green-600">{dashboardStats.activeTenants}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <span>Overdue</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-red-600">{dashboardStats.overdueTenants}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <Wrench className="w-5 h-5 text-orange-600" />
                <span>Pending Requests</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-orange-600">{dashboardStats.pendingRequests}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <DollarSign className="w-5 h-5 text-blue-600" />
                <span>Monthly Revenue</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-blue-600">₹{dashboardStats.monthlyRevenue.toLocaleString()}</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Tenant List */}
          <div className="lg:col-span-1 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Tenant List</CardTitle>
                <CardDescription>All your tenants and their status</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Search and Filter */}
                <div className="space-y-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search tenants..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger>
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="overdue">Overdue</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Tenant Cards */}
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {filteredTenants.map((tenant) => (
                    <Card 
                      key={tenant.id} 
                      className={`cursor-pointer transition-all hover:shadow-md ${
                        selectedTenant === tenant.id.toString() ? 'ring-2 ring-blue-500' : ''
                      }`}
                      onClick={() => setSelectedTenant(tenant.id.toString())}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={tenant.photo} alt={tenant.name} />
                            <AvatarFallback>{tenant.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium truncate">{tenant.name}</h4>
                              <Badge className={getStatusColor(tenant.status)}>
                                {tenant.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600 truncate">{tenant.property}</p>
                            <p className="text-sm font-medium">₹{tenant.rent.toLocaleString()}/month</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tenant Details */}
          <div className="lg:col-span-2">
            {selectedTenantData ? (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Tenant Details - {selectedTenantData.name}</span>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4 mr-1" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        <MessageSquare className="w-4 h-4 mr-1" />
                        Message
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="overview" className="space-y-4">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="payments">Payments</TabsTrigger>
                      <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
                      <TabsTrigger value="documents">Documents</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Personal Information */}
                        <div className="space-y-4">
                          <h3 className="font-semibold">Personal Information</h3>
                          <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                              <Avatar className="w-16 h-16">
                                <AvatarImage src={selectedTenantData.photo} alt={selectedTenantData.name} />
                                <AvatarFallback>{selectedTenantData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                              </Avatar>
                              <div>
                                <h4 className="font-medium">{selectedTenantData.name}</h4>
                                <Badge className={getStatusColor(selectedTenantData.status)}>
                                  {selectedTenantData.status}
                                </Badge>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center space-x-2">
                                <Mail className="w-4 h-4 text-gray-500" />
                                <span className="text-sm">{selectedTenantData.email}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Phone className="w-4 h-4 text-gray-500" />
                                <span className="text-sm">{selectedTenantData.phone}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Building className="w-4 h-4 text-gray-500" />
                                <span className="text-sm">{selectedTenantData.university}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <User className="w-4 h-4 text-gray-500" />
                                <span className="text-sm">Emergency: {selectedTenantData.emergencyContact}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <FileText className="w-4 h-4 text-gray-500" />
                                <span className="text-sm">ID: {selectedTenantData.idProof}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Property & Lease Information */}
                        <div className="space-y-4">
                          <h3 className="font-semibold">Property & Lease Information</h3>
                          <div className="space-y-3">
                            <div className="flex items-center space-x-2">
                              <Home className="w-4 h-4 text-gray-500" />
                              <span className="text-sm">{selectedTenantData.property}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <DollarSign className="w-4 h-4 text-gray-500" />
                              <span className="text-sm">Rent: ₹{selectedTenantData.rent.toLocaleString()}/month</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CreditCard className="w-4 h-4 text-gray-500" />
                              <span className="text-sm">Deposit: ₹{selectedTenantData.deposit.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4 text-gray-500" />
                              <span className="text-sm">
                                Lease: {selectedTenantData.leaseStart} to {selectedTenantData.leaseEnd}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="payments" className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">Payment History</h3>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-1" />
                          Export
                        </Button>
                      </div>
                      <div className="space-y-3">
                        {selectedTenantData.paymentHistory.map((payment, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div>
                              <div className="font-medium">{payment.month}</div>
                              <div className="text-sm text-gray-600">
                                {payment.date ? `Paid on ${payment.date}` : 'Payment pending'}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-medium">₹{payment.amount.toLocaleString()}</div>
                              <div className={`text-sm font-medium ${getPaymentStatusColor(payment.status)}`}>
                                {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="maintenance" className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">Maintenance Requests</h3>
                        <Button variant="outline" size="sm">
                          <Plus className="w-4 h-4 mr-1" />
                          Add Request
                        </Button>
                      </div>
                      <div className="space-y-3">
                        {selectedTenantData.maintenanceRequests.length > 0 ? (
                          selectedTenantData.maintenanceRequests.map((request) => (
                            <div key={request.id} className="p-4 bg-gray-50 rounded-lg">
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <div className="flex items-center space-x-2 mb-2">
                                    <h4 className="font-medium">{request.issue}</h4>
                                    <Badge className={getMaintenanceStatusColor(request.status)}>
                                      {request.status.replace('_', ' ')}
                                    </Badge>
                                  </div>
                                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                                    <div className="flex items-center space-x-1">
                                      <Calendar className="w-3 h-3" />
                                      <span>{request.date}</span>
                                    </div>
                                    <div className={`flex items-center space-x-1 ${getPriorityColor(request.priority)}`}>
                                      <AlertTriangle className="w-3 h-3" />
                                      <span>{request.priority} priority</span>
                                    </div>
                                  </div>
                                </div>
                                <Button variant="outline" size="sm">
                                  <Eye className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="text-center py-8 text-gray-500">
                            <Wrench className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                            <p>No maintenance requests</p>
                          </div>
                        )}
                      </div>
                    </TabsContent>

                    <TabsContent value="documents" className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">Documents</h3>
                        <Button variant="outline" size="sm">
                          <Plus className="w-4 h-4 mr-1" />
                          Upload Document
                        </Button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg text-center">
                          <FileText className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                          <p className="text-sm text-gray-600">Rental Agreement</p>
                          <Button variant="link" size="sm" className="text-xs">
                            View Document
                          </Button>
                        </div>
                        <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg text-center">
                          <FileText className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                          <p className="text-sm text-gray-600">{selectedTenantData.idProof}</p>
                          <Button variant="link" size="sm" className="text-xs">
                            View Document
                          </Button>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            ) : (
              <Card className="h-96 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <UserCheck className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                  <h3 className="text-lg font-medium mb-2">Select a Tenant</h3>
                  <p>Choose a tenant from the list to view their details</p>
                </div>
              </Card>
            )}
          </div>
        </div>

        {/* Add Tenant Dialog */}
        <Dialog open={showAddTenant} onOpenChange={setShowAddTenant}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Tenant</DialogTitle>
              <DialogDescription>
                Add a new tenant to your property management system
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Full Name</label>
                <Input placeholder="Enter tenant's full name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="Enter email address" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone Number</label>
                <Input type="tel" placeholder="Enter phone number" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Property</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select property" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apt1">Modern Student Apartment - Room 201</SelectItem>
                    <SelectItem value="room1">Cozy Shared Room - Room 101</SelectItem>
                    <SelectItem value="pg1">Premium PG - Room 301</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex space-x-2">
                <Button className="flex-1">Add Tenant</Button>
                <Button variant="outline" className="flex-1" onClick={() => setShowAddTenant(false)}>
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