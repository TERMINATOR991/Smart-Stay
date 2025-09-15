import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { Progress } from "../ui/progress";
import { Alert, AlertDescription } from "../ui/alert";
import { 
  ArrowLeft, 
  FileText, 
  Upload, 
  Search, 
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
  Plus,
  Folder,
  File,
  Image,
  FileImage,
  FileX,
  Calendar,
  User,
  Building,
  Shield,
  Clock,
  CheckCircle,
  AlertTriangle,
  Share,
  Copy,
  Star,
  Archive,
  FolderOpen,
  CloudUpload
} from "lucide-react";

interface DocumentManagementProps {
  onViewChange: (view: string) => void;
}

export function DocumentManagement({ onViewChange }: DocumentManagementProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showUploadDialog, setShowUploadDialog] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'verified': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-purple-100 text-purple-800';
      case 'published': return 'bg-indigo-100 text-indigo-800';
      case 'expired': return 'bg-red-100 text-red-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredDocuments = documents.filter(doc => {
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         (doc.tenant && doc.tenant.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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

  const storageStats = {
    used: 156,
    total: 500,
    percentage: 31
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
                <FileText className="w-8 h-8 text-blue-600" />
                <span>Document Management</span>
              </h1>
              <p className="text-gray-600 mt-1">Securely store and manage all your property documents</p>
            </div>
          </div>
          <Button
            onClick={() => setShowUploadDialog(true)}
            className="flex items-center space-x-2"
          >
            <Upload className="w-4 h-4" />
            <span>Upload Document</span>
          </Button>
        </div>

        {/* Storage Stats */}
        <Card className="mb-8">
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
                  <CardTitle>Documents</CardTitle>
                  <div className="flex items-center space-x-2">
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
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="grid" className="space-y-4">
                  <TabsList>
                    <TabsTrigger value="grid">Grid View</TabsTrigger>
                    <TabsTrigger value="list">List View</TabsTrigger>
                  </TabsList>

                  <TabsContent value="grid">
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
                  </TabsContent>

                  <TabsContent value="list">
                    <div className="space-y-2">
                      {filteredDocuments.map((doc) => (
                        <Card key={doc.id} className="hover:shadow-sm transition-shadow">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4">
                                {getFileIcon(doc.type)}
                                <div className="flex-1">
                                  <div className="flex items-center space-x-2">
                                    <h4 className="font-medium">{doc.name}</h4>
                                    {doc.isStarred && <Star className="w-4 h-4 text-yellow-500 fill-current" />}
                                  </div>
                                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                                    {doc.tenant && (
                                      <div className="flex items-center space-x-1">
                                        <User className="w-3 h-3" />
                                        <span>{doc.tenant}</span>
                                      </div>
                                    )}
                                    <div className="flex items-center space-x-1">
                                      <Calendar className="w-3 h-3" />
                                      <span>{doc.uploadDate}</span>
                                    </div>
                                    <span>{doc.size}</span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center space-x-4">
                                <Badge className={getStatusColor(doc.status)}>
                                  {doc.status}
                                </Badge>
                                <div className="flex space-x-1">
                                  <Button variant="ghost" size="sm">
                                    <Eye className="w-4 h-4" />
                                  </Button>
                                  <Button variant="ghost" size="sm">
                                    <Download className="w-4 h-4" />
                                  </Button>
                                  <Button variant="ghost" size="sm">
                                    <Edit className="w-4 h-4" />
                                  </Button>
                                  <Button variant="ghost" size="sm">
                                    <Trash2 className="w-4 h-4" />
                                  </Button>
                                </div>
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
          </div>
        </div>

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