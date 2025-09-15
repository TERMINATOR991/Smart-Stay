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
import { Progress } from "../ui/progress";
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
  Building,
  Upload,
  File,
  Image,
  FileImage,
  FileX,
  Shield,
  Star,
  Archive,
  FolderOpen,
  CloudUpload,
  Folder,
  Share,
  Copy
} from "lucide-react";

interface TenantDocumentManagementProps {
  onViewChange: (view: string) => void;
}

export function TenantDocumentManagement({ onViewChange }: TenantDocumentManagementProps) {
  const [selectedTenant, setSelectedTenant] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [showAddTenant, setShowAddTenant] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showUploadDialog, setShowUploadDialog] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const tenants = [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul.sharma@email.com",
      phone: "+91 98765 43210",
      photo: "https://images.unsplash.com/photo-1600178572204-6ac8886aae63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzl8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU3MTU1NTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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

  const documentCategories = [
    { id: "all", name: "All Documents", icon: <Folder className="w-4 h-4" />, count: 24 },
    { id: "rental-agreements", name: "Rental Agreements", icon: <FileText className="w-4 h-4" />, count: 8 },
    { id: "id-proofs", name: "ID Proofs", icon: <Shield className="w-4 h-4" />, count: 6 },
    { id: "maintenance", name: "Maintenance Records", icon: <Building className="w-4 h-4" />, count: 5 },
    { id: "financial", name: "Financial Documents", icon: <FileText className="w-4 h-4" />, count: 3 },
    { id: "photos", name: "Property Photos", icon: <Image className="w-4 h-4" />, count: 12 }
  ];

  const documents = [
    {
      id: 1,
      name: "Rental Agreement - Rahul Sharma",
      type: "PDF",
      category: "rental-agreements",
      size: "2.4 MB",
      uploadDate: "2024-01-15",
      tenant: "Rahul Sharma",
      property: "Modern Student Apartment - Room 201",
      status: "active",
      tags: ["rental", "agreement", "active"],
      lastModified: "2024-01-15",
      isStarred: true
    },
    {
      id: 2,
      name: "Aadhaar Card - Rahul Sharma",
      type: "JPG",
      category: "id-proofs",
      size: "1.2 MB",
      uploadDate: "2024-01-10",
      tenant: "Rahul Sharma",
      property: "Modern Student Apartment - Room 201",
      status: "verified",
      tags: ["id", "aadhaar", "verified"],
      lastModified: "2024-01-10",
      isStarred: false
    },
    {
      id: 3,
      name: "AC Repair Invoice - Room 201",
      type: "PDF",
      category: "maintenance",
      size: "580 KB",
      uploadDate: "2024-01-12",
      tenant: "Rahul Sharma",
      property: "Modern Student Apartment - Room 201",
      status: "completed",
      tags: ["maintenance", "ac", "repair", "invoice"],
      lastModified: "2024-01-12",
      isStarred: false
    },
    {
      id: 4,
      name: "Property Photo - Room 201 Main",
      type: "JPG",
      category: "photos",
      size: "3.1 MB",
      uploadDate: "2023-12-20",
      tenant: null,
      property: "Modern Student Apartment - Room 201",
      status: "published",
      tags: ["photo", "room", "main"],
      lastModified: "2023-12-20",
      isStarred: true
    },
    {
      id: 5,
      name: "Rental Agreement - Priya Patel",
      type: "PDF",
      category: "rental-agreements",
      size: "2.2 MB",
      uploadDate: "2023-08-01",
      tenant: "Priya Patel",
      property: "Cozy Shared Room - Room 101",
      status: "active",
      tags: ["rental", "agreement", "active"],
      lastModified: "2023-08-01",
      isStarred: false
    },
    {
      id: 6,
      name: "Passport - Priya Patel",
      type: "PDF",
      category: "id-proofs",
      size: "1.8 MB",
      uploadDate: "2023-07-25",
      tenant: "Priya Patel",
      property: "Cozy Shared Room - Room 101",
      status: "verified",
      tags: ["id", "passport", "verified"],
      lastModified: "2023-07-25",
      isStarred: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'overdue': return 'bg-red-100 text-red-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      case 'verified': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-purple-100 text-purple-800';
      case 'published': return 'bg-indigo-100 text-indigo-800';
      case 'expired': return 'bg-red-100 text-red-800';
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

  const getFileIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'pdf': return <FileText className="w-8 h-8 text-red-500" />;
      case 'jpg':
      case 'jpeg':
      case 'png': return <FileImage className="w-8 h-8 text-green-500" />;
      case 'doc':
      case 'docx': return <FileText className="w-8 h-8 text-blue-500" />;
      default: return <File className="w-8 h-8 text-gray-500" />;
    }
  };

  const filteredTenants = tenants.filter(tenant => {
    const matchesSearch = tenant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tenant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tenant.property.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || tenant.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const filteredDocuments = documents.filter(doc => {
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         (doc.tenant && doc.tenant.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const selectedTenantData = selectedTenant ? tenants.find(t => t.id.toString() === selectedTenant) : null;

  const dashboardStats = {
    totalTenants: tenants.length,
    activeTenants: tenants.filter(t => t.status === 'active').length,
    overdueTenants: tenants.filter(t => t.status === 'overdue').length,
    pendingRequests: tenants.reduce((acc, t) => acc + t.maintenanceRequests.filter(r => r.status === 'pending').length, 0),
    monthlyRevenue: tenants.filter(t => t.status === 'active').reduce((acc, t) => acc + t.rent, 0),
    totalDocuments: documents.length
  };

  const storageStats = {
    used: 156,
    total: 500,
    percentage: 31
  };

  const handleUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);
    
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsUploading(false);
            setShowUploadDialog(false);
            setUploadProgress(0);
          }, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
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
                <span>Tenants & Documents</span>
              </h1>
              <p className="text-gray-600 mt-1">Manage tenants and documents in one unified interface</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button
              onClick={() => setShowAddTenant(true)}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>Add Tenant</span>
            </Button>
            <Button
              onClick={() => setShowUploadDialog(true)}
              className="flex items-center space-x-2"
            >
              <Upload className="w-4 h-4" />
              <span>Upload Document</span>
            </Button>
          </div>
        </div>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-8">
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
                <span>Requests</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-orange-600">{dashboardStats.pendingRequests}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <FileText className="w-5 h-5 text-purple-600" />
                <span>Documents</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-purple-600">{dashboardStats.totalDocuments}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <DollarSign className="w-5 h-5 text-blue-600" />
                <span>Revenue</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-blue-600">₹{dashboardStats.monthlyRevenue.toLocaleString()}</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="tenants" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="tenants" className="flex items-center space-x-2">
              <UserCheck className="w-4 h-4" />
              <span>Tenant Management</span>
            </TabsTrigger>
            <TabsTrigger value="documents" className="flex items-center space-x-2">
              <FileText className="w-4 h-4" />
              <span>Document Management</span>
            </TabsTrigger>
          </TabsList>

          {/* Tenant Management Tab */}
          <TabsContent value="tenants">
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
                            <h3 className="font-semibold">Tenant Documents</h3>
                            <Button variant="outline" size="sm">
                              <Plus className="w-4 h-4 mr-1" />
                              Upload Document
                            </Button>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {documents.filter(doc => doc.tenant === selectedTenantData.name).map((doc) => (
                              <Card key={doc.id} className="hover:shadow-md transition-shadow">
                                <CardContent className="p-4">
                                  <div className="flex items-start space-x-3">
                                    {getFileIcon(doc.type)}
                                    <div className="flex-1">
                                      <h4 className="font-medium text-sm">{doc.name}</h4>
                                      <p className="text-xs text-gray-500">{doc.type} • {doc.size}</p>
                                      <Badge className={getStatusColor(doc.status)} size="sm">
                                        {doc.status}
                                      </Badge>
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-between mt-3">
                                    <div className="flex space-x-1">
                                      <Button variant="ghost" size="sm">
                                        <Eye className="w-3 h-3" />
                                      </Button>
                                      <Button variant="ghost" size="sm">
                                        <Download className="w-3 h-3" />
                                      </Button>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
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
          </TabsContent>

          {/* Document Management Tab */}
          <TabsContent value="documents">
            {/* Storage Stats */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Storage Overview</span>
                  <Badge variant="outline">{storageStats.used} GB / {storageStats.total} GB</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Progress value={storageStats.percentage} className="h-2" />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{storageStats.used} GB used</span>
                    <span>{storageStats.total - storageStats.used} GB remaining</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Categories Sidebar */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle>Categories</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {documentCategories.map((category) => (
                      <Button
                        key={category.id}
                        variant={selectedCategory === category.id ? "default" : "ghost"}
                        onClick={() => setSelectedCategory(category.id)}
                        className="w-full justify-start"
                      >
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center space-x-2">
                            {category.icon}
                            <span>{category.name}</span>
                          </div>
                          <Badge variant="secondary" className="ml-auto">
                            {category.count}
                          </Badge>
                        </div>
                      </Button>
                    ))}
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <Star className="w-4 h-4 mr-2" />
                      Starred Documents
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Clock className="w-4 h-4 mr-2" />
                      Recent Uploads
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Archive className="w-4 h-4 mr-2" />
                      Archived
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Expiring Soon
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Documents List */}
              <div className="lg:col-span-3">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>All Documents</CardTitle>
                      <div className="relative">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          placeholder="Search documents..."
                          className="pl-10 w-64"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {filteredDocuments.map((doc) => (
                        <Card key={doc.id} className="hover:shadow-md transition-shadow">
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex items-center space-x-3">
                                {getFileIcon(doc.type)}
                                <div className="flex-1">
                                  <div className="flex items-center space-x-2">
                                    <h4 className="font-medium text-sm truncate">{doc.name}</h4>
                                    {doc.isStarred && <Star className="w-3 h-3 text-yellow-500 fill-current" />}
                                  </div>
                                  <p className="text-xs text-gray-500">{doc.type} • {doc.size}</p>
                                </div>
                              </div>
                            </div>

                            <div className="space-y-2 mb-3">
                              <Badge className={getStatusColor(doc.status)} size="sm">
                                {doc.status}
                              </Badge>
                              {doc.tenant && (
                                <div className="flex items-center space-x-1 text-xs text-gray-600">
                                  <User className="w-3 h-3" />
                                  <span>{doc.tenant}</span>
                                </div>
                              )}
                              <div className="flex items-center space-x-1 text-xs text-gray-600">
                                <Calendar className="w-3 h-3" />
                                <span>{doc.uploadDate}</span>
                              </div>
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="flex space-x-1">
                                <Button variant="ghost" size="sm">
                                  <Eye className="w-3 h-3" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Download className="w-3 h-3" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Share className="w-3 h-3" />
                                </Button>
                              </div>
                              <Button variant="ghost" size="sm">
                                <Trash2 className="w-3 h-3" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>

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

        {/* Upload Dialog */}
        <Dialog open={showUploadDialog} onOpenChange={setShowUploadDialog}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Upload Document</DialogTitle>
              <DialogDescription>
                Upload a new document to your secure storage
              </DialogDescription>
            </DialogHeader>
            
            {!isUploading ? (
              <div className="space-y-4">
                {/* Drag and Drop Area */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
                  <CloudUpload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-600 mb-2">Drag and drop your files here, or click to browse</p>
                  <p className="text-xs text-gray-500">Supports PDF, JPG, PNG, DOC files up to 10MB</p>
                  <Button variant="outline" className="mt-4">
                    Choose Files
                  </Button>
                </div>

                {/* Document Details */}
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium">Document Category</label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rental-agreements">Rental Agreements</SelectItem>
                        <SelectItem value="id-proofs">ID Proofs</SelectItem>
                        <SelectItem value="maintenance">Maintenance Records</SelectItem>
                        <SelectItem value="financial">Financial Documents</SelectItem>
                        <SelectItem value="photos">Property Photos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Associated Tenant (Optional)</label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select tenant" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rahul">Rahul Sharma</SelectItem>
                        <SelectItem value="priya">Priya Patel</SelectItem>
                        <SelectItem value="amit">Amit Kumar</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Property</label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select property" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="apt1">Modern Student Apartment - Room 201</SelectItem>
                        <SelectItem value="room1">Cozy Shared Room - Room 101</SelectItem>
                        <SelectItem value="pg1">Premium PG - Room 301</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Tags (Optional)</label>
                    <Input 
                      className="mt-1"
                      placeholder="Enter tags separated by commas" 
                    />
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button onClick={handleUpload} className="flex-1">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Document
                  </Button>
                  <Button variant="outline" className="flex-1" onClick={() => setShowUploadDialog(false)}>
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-4 text-center">
                <CloudUpload className="w-16 h-16 mx-auto text-blue-600" />
                <div>
                  <h3 className="text-lg font-medium mb-2">Uploading Document...</h3>
                  <p className="text-sm text-gray-600">Please wait while we securely upload your document</p>
                </div>
                <Progress value={uploadProgress} className="w-full" />
                <p className="text-sm text-gray-500">{uploadProgress}% complete</p>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Security Notice */}
        <Alert className="mt-8">
          <Shield className="h-4 w-4" />
          <AlertDescription>
            All documents are encrypted and stored securely. Only authorized users can access your sensitive information.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}