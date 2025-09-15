import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Progress } from "../ui/progress";
import { Badge } from "../ui/badge";
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
  ArrowRight, 
  Upload, 
  X, 
  CheckCircle,
  Home,
  MapPin,
  DollarSign,
  Camera,
  Wifi,
  Car,
  Utensils,
  Snowflake,
  Bath,
  TrendingUp,
  TrendingDown,
  Brain,
  Zap,
  Target,
  Building,
  Calendar,
  Users,
  Star,
  AlertCircle,
  Info,
  RefreshCw,
  Sparkles,
  BarChart3,
  PieChart,
  Activity,
  Clock,
  Dumbbell,
  Shield,
  Eye,
  Download,
  Copy,
  Settings,
  Plus,
  Edit
} from "lucide-react";

interface ListingPricingManagementProps {
  onViewChange: (view: string) => void;
}

export function ListingPricingManagement({ onViewChange }: ListingPricingManagementProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedProperty, setSelectedProperty] = useState("room-201");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [activeView, setActiveView] = useState<"create" | "manage">("manage");
  
  const [formData, setFormData] = useState({
    propertyName: "",
    address: "",
    pincode: "",
    propertyType: "",
    description: "",
    amenities: [] as string[],
    monthlyRent: "",
    deposit: "",
    foodIncluded: false,
    images: [] as File[]
  });

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const properties = [
    {
      id: "room-201",
      name: "Modern Student Apartment - Room 201",
      currentPrice: 15000,
      location: "Near Stanford University",
      type: "Single Room",
      amenities: ["WiFi", "AC", "Food", "Parking"],
      occupancyRate: 95,
      avgRating: 4.7,
      lastUpdated: "2 days ago",
      status: "active"
    },
    {
      id: "room-101",
      name: "Cozy Shared Room - Room 101",
      currentPrice: 8000,
      location: "Near MIT Campus",
      type: "Shared Room",
      amenities: ["WiFi", "Food", "Gym"],
      occupancyRate: 80,
      avgRating: 4.3,
      lastUpdated: "1 week ago",
      status: "active"
    },
    {
      id: "room-301",
      name: "Premium PG - Room 301",
      currentPrice: 20000,
      location: "Harvard Square",
      type: "Premium Single",
      amenities: ["WiFi", "AC", "Food", "Parking", "Gym", "Security"],
      occupancyRate: 100,
      avgRating: 4.9,
      lastUpdated: "3 days ago",
      status: "active"
    }
  ];

  const amenitiesList = [
    { id: "wifi", label: "Wi-Fi", icon: <Wifi className="w-4 h-4" /> },
    { id: "food", label: "Food Included", icon: <Utensils className="w-4 h-4" /> },
    { id: "parking", label: "Parking", icon: <Car className="w-4 h-4" /> },
    { id: "ac", label: "Air Conditioning", icon: <Snowflake className="w-4 h-4" /> },
    { id: "bathroom", label: "Attached Bathroom", icon: <Bath className="w-4 h-4" /> },
    { id: "laundry", label: "Laundry Service", icon: <Home className="w-4 h-4" /> },
    { id: "security", label: "24/7 Security", icon: <Home className="w-4 h-4" /> },
    { id: "cleaning", label: "Housekeeping", icon: <Home className="w-4 h-4" /> }
  ];

  const marketData = [
    { month: "Aug", avgPrice: 14500, yourPrice: 15000, occupancy: 85 },
    { month: "Sep", avgPrice: 15200, yourPrice: 15000, occupancy: 92 },
    { month: "Oct", avgPrice: 14800, yourPrice: 15000, occupancy: 88 },
    { month: "Nov", avgPrice: 16000, yourPrice: 15000, occupancy: 95 },
    { month: "Dec", avgPrice: 16500, yourPrice: 15000, occupancy: 93 },
    { month: "Jan", avgPrice: 17200, yourPrice: 15000, occupancy: 95 }
  ];

  const competitorAnalysis = [
    {
      name: "University Heights PG",
      price: 16500,
      rating: 4.5,
      occupancy: 92,
      amenities: ["WiFi", "AC", "Food", "Parking"],
      distance: "0.5 km"
    },
    {
      name: "Student Plaza",
      price: 14200,
      rating: 4.2,
      occupancy: 78,
      amenities: ["WiFi", "Food"],
      distance: "0.8 km"
    },
    {
      name: "Campus View Residency",
      price: 18000,
      rating: 4.8,
      occupancy: 98,
      amenities: ["WiFi", "AC", "Food", "Parking", "Gym"],
      distance: "1.2 km"
    }
  ];

  const pricingFactors = [
    {
      factor: "Location Score",
      impact: 25,
      score: 92,
      description: "Proximity to university and transport",
      recommendation: "Excellent location advantage"
    },
    {
      factor: "Amenities Score",
      impact: 20,
      score: 78,
      description: "Quality and quantity of amenities",
      recommendation: "Consider adding gym access"
    },
    {
      factor: "Market Demand",
      impact: 18,
      score: 85,
      description: "Current demand in the area",
      recommendation: "High demand period ahead"
    },
    {
      factor: "Seasonal Trends",
      impact: 15,
      score: 88,
      description: "Time of year pricing patterns",
      recommendation: "Peak season approaching"
    },
    {
      factor: "Property Condition",
      impact: 12,
      score: 95,
      description: "Maintenance and modernization",
      recommendation: "Well-maintained property"
    },
    {
      factor: "Competition Density",
      impact: 10,
      score: 72,
      description: "Number of similar properties nearby",
      recommendation: "Moderate competition"
    }
  ];

  const aiRecommendations = {
    currentPrice: 15000,
    suggestedPrice: 17500,
    priceRange: {
      min: 16800,
      max: 18200,
      optimal: 17500
    },
    confidence: 87,
    reasoning: [
      "Market analysis shows 16.7% price increase trend in your area",
      "Your property amenities justify premium pricing vs competitors",
      "High occupancy rate indicates strong demand at current price",
      "Seasonal demand peak approaching (Feb-Apr admission season)"
    ],
    impact: {
      revenueIncrease: 16.7,
      occupancyImpact: -2,
      competitivePosition: "Strong"
    },
    timeline: "Implement gradually over 2 months"
  };

  const dashboardStats = {
    totalListings: properties.length,
    activeListings: properties.filter(p => p.status === "active").length,
    avgOccupancy: Math.round(properties.reduce((acc, p) => acc + p.occupancyRate, 0) / properties.length),
    totalRevenue: properties.reduce((acc, p) => acc + p.currentPrice, 0),
    avgRating: (properties.reduce((acc, p) => acc + p.avgRating, 0) / properties.length).toFixed(1)
  };

  const handleAmenityChange = (amenityId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      amenities: checked 
        ? [...prev.amenities, amenityId]
        : prev.amenities.filter(id => id !== amenityId)
    }));
  };

  const handleImageUpload = (files: FileList | null) => {
    if (files) {
      const newImages = Array.from(files).slice(0, 10 - formData.images.length);
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, ...newImages]
      }));
    }
  };

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    setActiveView("manage");
    setCurrentStep(1);
    // Reset form
    setFormData({
      propertyName: "",
      address: "",
      pincode: "",
      propertyType: "",
      description: "",
      amenities: [],
      monthlyRent: "",
      deposit: "",
      foodIncluded: false,
      images: []
    });
  };

  const handleAnalyzeProperty = () => {
    setIsAnalyzing(true);
    setAnalysisProgress(0);
    
    // Simulate AI analysis
    const interval = setInterval(() => {
      setAnalysisProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsAnalyzing(false);
          }, 500);
          return 100;
        }
        return prev + 20;
      });
    }, 800);
  };

  const selectedPropertyData = properties.find(p => p.id === selectedProperty);

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi': return <Wifi className="w-3 h-3" />;
      case 'ac': return <Activity className="w-3 h-3" />;
      case 'food': return <Utensils className="w-3 h-3" />;
      case 'parking': return <Car className="w-3 h-3" />;
      case 'gym': return <Dumbbell className="w-3 h-3" />;
      case 'security': return <Shield className="w-3 h-3" />;
      default: return <Home className="w-3 h-3" />;
    }
  };

  const getImpactColor = (impact: number) => {
    if (impact >= 20) return 'text-red-600';
    if (impact >= 15) return 'text-orange-600';
    if (impact >= 10) return 'text-yellow-600';
    return 'text-green-600';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderCreateListingStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Home className="w-5 h-5" />
                <span>Basic Information</span>
              </CardTitle>
              <CardDescription>
                Tell us about your property's basic details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="propertyName">Property Name</Label>
                <Input
                  id="propertyName"
                  placeholder="e.g., Modern Student Apartment"
                  value={formData.propertyName}
                  onChange={(e) => setFormData(prev => ({ ...prev, propertyName: e.target.value }))}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="address">Complete Address</Label>
                <Textarea
                  id="address"
                  placeholder="Enter the full address including area, city, and state"
                  value={formData.address}
                  onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="pincode">PIN Code</Label>
                  <Input
                    id="pincode"
                    placeholder="110001"
                    value={formData.pincode}
                    onChange={(e) => setFormData(prev => ({ ...prev, pincode: e.target.value }))}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="propertyType">Property Type</Label>
                  <Select
                    value={formData.propertyType}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, propertyType: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pg">PG (Paying Guest)</SelectItem>
                      <SelectItem value="flat">Full Flat</SelectItem>
                      <SelectItem value="shared-room">Shared Room</SelectItem>
                      <SelectItem value="hostel">Hostel</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 2:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Property Details</CardTitle>
              <CardDescription>
                Provide detailed information about your property
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="description">Property Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your property, its features, and what makes it special for students..."
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  rows={6}
                />
                <p className="text-sm text-gray-500">
                  Include details about the room, common areas, neighborhood, and any unique features.
                </p>
              </div>

              <div className="space-y-4">
                <Label>Available Amenities</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {amenitiesList.map((amenity) => (
                    <div key={amenity.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={amenity.id}
                        checked={formData.amenities.includes(amenity.id)}
                        onCheckedChange={(checked) => 
                          handleAmenityChange(amenity.id, checked as boolean)
                        }
                      />
                      <label 
                        htmlFor={amenity.id} 
                        className="text-sm flex items-center space-x-2 cursor-pointer"
                      >
                        {amenity.icon}
                        <span>{amenity.label}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 3:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5" />
                <span>Pricing Details</span>
              </CardTitle>
              <CardDescription>
                Set your rental pricing and terms
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="monthlyRent">Monthly Rent (₹)</Label>
                  <Input
                    id="monthlyRent"
                    type="number"
                    placeholder="15000"
                    value={formData.monthlyRent}
                    onChange={(e) => setFormData(prev => ({ ...prev, monthlyRent: e.target.value }))}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="deposit">Security Deposit (₹)</Label>
                  <Input
                    id="deposit"
                    type="number"
                    placeholder="30000"
                    value={formData.deposit}
                    onChange={(e) => setFormData(prev => ({ ...prev, deposit: e.target.value }))}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="foodIncluded"
                    checked={formData.foodIncluded}
                    onCheckedChange={(checked) => 
                      setFormData(prev => ({ ...prev, foodIncluded: checked as boolean }))
                    }
                  />
                  <label htmlFor="foodIncluded" className="text-sm cursor-pointer">
                    Food is included in the rent
                  </label>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Pricing Tips</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Research similar properties in your area for competitive pricing</li>
                  <li>• Consider including utilities in the rent for simplicity</li>
                  <li>• Security deposit is typically 1-2 months of rent</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        );

      case 4:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Camera className="w-5 h-5" />
                <span>Upload Photos</span>
              </CardTitle>
              <CardDescription>
                Add high-quality photos to attract more students (Maximum 10 photos)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e) => handleImageUpload(e.target.files)}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="cursor-pointer">
                  <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                  <p className="text-lg font-medium mb-2">Click to upload photos</p>
                  <p className="text-gray-500">or drag and drop your images here</p>
                  <p className="text-sm text-gray-400 mt-2">
                    JPG, PNG up to 10MB each
                  </p>
                </label>
              </div>

              {formData.images.length > 0 && (
                <div>
                  <h4 className="font-medium mb-3">Uploaded Images ({formData.images.length}/10)</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {formData.images.map((image, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={URL.createObjectURL(image)}
                          alt={`Upload ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <Button
                          variant="destructive"
                          size="sm"
                          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => removeImage(index)}
                        >
                          <X className="w-3 h-3" />
                        </Button>
                        {index === 0 && (
                          <Badge className="absolute bottom-2 left-2 bg-blue-500 hover:bg-blue-600">
                            Cover Photo
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Photo Tips</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Take photos during the day with natural lighting</li>
                  <li>• Include room, bathroom, common areas, and exterior views</li>
                  <li>• Make sure rooms are clean and well-organized</li>
                  <li>• The first photo will be used as the cover image</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        );

      default:
        return null;
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
                <Building className="w-8 h-8 text-blue-600" />
                <span>Listings & Pricing</span>
                <Badge className="bg-purple-100 text-purple-800 flex items-center space-x-1">
                  <Sparkles className="w-3 h-3" />
                  <span>AI-Enhanced</span>
                </Badge>
              </h1>
              <p className="text-gray-600 mt-1">Manage your property listings and optimize pricing with AI insights</p>
            </div>
          </div>
          <Button
            onClick={() => setActiveView("create")}
            className="flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Listing</span>
          </Button>
        </div>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <Building className="w-5 h-5" />
                <span>Total Listings</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">{dashboardStats.totalListings}</div>
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
              <div className="text-2xl font-semibold text-green-600">{dashboardStats.activeListings}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-600" />
                <span>Avg Occupancy</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-blue-600">{dashboardStats.avgOccupancy}%</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <DollarSign className="w-5 h-5 text-purple-600" />
                <span>Total Revenue</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-purple-600">₹{dashboardStats.totalRevenue.toLocaleString()}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-600" />
                <span>Avg Rating</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-yellow-600">{dashboardStats.avgRating}</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeView} onValueChange={(value) => setActiveView(value as "create" | "manage")} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="manage" className="flex items-center space-x-2">
              <BarChart3 className="w-4 h-4" />
              <span>Manage & Price</span>
            </TabsTrigger>
            <TabsTrigger value="create" className="flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Create Listing</span>
            </TabsTrigger>
          </TabsList>

          {/* Manage & Price Tab */}
          <TabsContent value="manage">
            <div className="space-y-6">
              {/* Property Selection & Analysis */}
              <div className="flex items-center justify-between">
                <Select value={selectedProperty} onValueChange={setSelectedProperty}>
                  <SelectTrigger className="w-64">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {properties.map((property) => (
                      <SelectItem key={property.id} value={property.id}>
                        {property.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button
                  onClick={handleAnalyzeProperty}
                  disabled={isAnalyzing}
                  className="flex items-center space-x-2"
                >
                  {isAnalyzing ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  ) : (
                    <Brain className="w-4 h-4" />
                  )}
                  <span>{isAnalyzing ? 'Analyzing...' : 'Analyze Pricing'}</span>
                </Button>
              </div>

              {/* Analysis Progress */}
              {isAnalyzing && (
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Brain className="w-8 h-8 text-purple-600 animate-pulse" />
                      <div className="flex-1">
                        <h3 className="font-medium">AI is analyzing your property...</h3>
                        <p className="text-sm text-gray-600 mb-2">
                          Processing market data, competitor analysis, and demand patterns
                        </p>
                        <Progress value={analysisProgress} className="h-2" />
                        <p className="text-xs text-gray-500 mt-1">{analysisProgress}% complete</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {!isAnalyzing && (
                <>
                  {/* Current Property Overview */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Property Overview</CardTitle>
                      <CardDescription>Current pricing and performance metrics</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {selectedPropertyData && (
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                          <div>
                            <h4 className="font-semibold text-lg">{selectedPropertyData.name}</h4>
                            <p className="text-gray-600 flex items-center space-x-1 mt-1">
                              <MapPin className="w-4 h-4" />
                              <span>{selectedPropertyData.location}</span>
                            </p>
                            <div className="flex items-center space-x-2 mt-2">
                              <Badge className={getStatusColor(selectedPropertyData.status)}>{selectedPropertyData.status}</Badge>
                              <Badge variant="outline">{selectedPropertyData.type}</Badge>
                            </div>
                          </div>

                          <div>
                            <div className="text-2xl font-semibold">₹{selectedPropertyData.currentPrice.toLocaleString()}</div>
                            <p className="text-sm text-gray-600">Current Price</p>
                            <p className="text-xs text-gray-500 mt-1">Last updated: {selectedPropertyData.lastUpdated}</p>
                          </div>

                          <div>
                            <div className="text-2xl font-semibold text-green-600">{selectedPropertyData.occupancyRate}%</div>
                            <p className="text-sm text-gray-600">Occupancy Rate</p>
                            <div className="flex items-center space-x-1 mt-1">
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              <span className="text-sm">{selectedPropertyData.avgRating} rating</span>
                            </div>
                          </div>

                          <div>
                            <p className="text-sm font-medium mb-2">Amenities</p>
                            <div className="flex flex-wrap gap-2">
                              {selectedPropertyData.amenities.map((amenity, index) => (
                                <Badge key={index} variant="outline" className="flex items-center space-x-1">
                                  {getAmenityIcon(amenity)}
                                  <span>{amenity}</span>
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* AI Recommendations */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <Card className="lg:col-span-2">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <Brain className="w-5 h-5 text-purple-600" />
                          <span>AI Pricing Recommendation</span>
                          <Badge className="bg-green-100 text-green-800">{aiRecommendations.confidence}% Confidence</Badge>
                        </CardTitle>
                        <CardDescription>Based on comprehensive market analysis</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <div className="text-lg text-gray-600">Current Price</div>
                            <div className="text-2xl font-semibold">₹{aiRecommendations.currentPrice.toLocaleString()}</div>
                          </div>
                          <div className="text-center p-4 bg-blue-50 rounded-lg">
                            <div className="text-lg text-blue-600">Suggested Price</div>
                            <div className="text-2xl font-semibold text-blue-800">₹{aiRecommendations.suggestedPrice.toLocaleString()}</div>
                          </div>
                          <div className="text-center p-4 bg-green-50 rounded-lg">
                            <div className="text-lg text-green-600">Revenue Increase</div>
                            <div className="text-2xl font-semibold text-green-800">+{aiRecommendations.impact.revenueIncrease}%</div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium mb-3">Optimal Price Range</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Min Price</span>
                              <span>₹{aiRecommendations.priceRange.min.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span>Optimal Price</span>
                              <span className="font-medium text-blue-600">₹{aiRecommendations.priceRange.optimal.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span>Max Price</span>
                              <span>₹{aiRecommendations.priceRange.max.toLocaleString()}</span>
                            </div>
                            <Progress value={75} className="h-3 mt-2" />
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium mb-3">AI Reasoning</h4>
                          <div className="space-y-2">
                            {aiRecommendations.reasoning.map((reason, index) => (
                              <div key={index} className="flex items-start space-x-2">
                                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                                <p className="text-sm">{reason}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <Alert>
                          <Info className="h-4 w-4" />
                          <AlertDescription>
                            <strong>Implementation Timeline:</strong> {aiRecommendations.timeline}
                          </AlertDescription>
                        </Alert>
                      </CardContent>
                    </Card>

                    <div className="space-y-6">
                      {/* Expected Impact */}
                      <Card>
                        <CardHeader>
                          <CardTitle>Expected Impact</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Revenue Increase</span>
                            <div className="flex items-center space-x-1">
                              <TrendingUp className="w-4 h-4 text-green-600" />
                              <span className="font-medium text-green-600">+{aiRecommendations.impact.revenueIncrease}%</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Occupancy Impact</span>
                            <div className="flex items-center space-x-1">
                              <TrendingDown className="w-4 h-4 text-orange-600" />
                              <span className="font-medium text-orange-600">{aiRecommendations.impact.occupancyImpact}%</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Market Position</span>
                            <Badge className="bg-green-100 text-green-800">{aiRecommendations.impact.competitivePosition}</Badge>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Quick Actions */}
                      <Card>
                        <CardHeader>
                          <CardTitle>Quick Actions</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <Button className="w-full" size="sm">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Apply Suggested Price
                          </Button>
                          <Button variant="outline" className="w-full" size="sm">
                            <Settings className="w-4 h-4 mr-2" />
                            Customize Analysis
                          </Button>
                          <Button variant="outline" className="w-full" size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            Download Report
                          </Button>
                          <Button variant="outline" className="w-full" size="sm">
                            <Copy className="w-4 h-4 mr-2" />
                            Share Analysis
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Market Analysis Tabs */}
                  <Tabs defaultValue="factors" className="space-y-6">
                    <TabsList>
                      <TabsTrigger value="factors">Pricing Factors</TabsTrigger>
                      <TabsTrigger value="market">Market Trends</TabsTrigger>
                      <TabsTrigger value="competitors">Competitor Analysis</TabsTrigger>
                    </TabsList>

                    <TabsContent value="factors">
                      <Card>
                        <CardHeader>
                          <CardTitle>Pricing Factor Analysis</CardTitle>
                          <CardDescription>How different factors influence your optimal pricing</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-6">
                            {pricingFactors.map((factor, index) => (
                              <div key={index} className="space-y-3">
                                <div className="flex items-center justify-between">
                                  <h4 className="font-medium">{factor.factor}</h4>
                                  <div className="flex items-center space-x-2">
                                    <span className={`font-medium ${getImpactColor(factor.impact)}`}>
                                      {factor.impact}% impact
                                    </span>
                                    <Badge variant="outline">{factor.score}/100</Badge>
                                  </div>
                                </div>
                                <Progress value={factor.score} className="h-2" />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                  <div>
                                    <span className="text-gray-600">Description: </span>
                                    <span>{factor.description}</span>
                                  </div>
                                  <div>
                                    <span className="text-gray-600">Recommendation: </span>
                                    <span className="font-medium">{factor.recommendation}</span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="market">
                      <Card>
                        <CardHeader>
                          <CardTitle>Market Trends Analysis</CardTitle>
                          <CardDescription>Price trends and market dynamics in your area</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ResponsiveContainer width="100%" height={400}>
                            <AreaChart data={marketData}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="month" />
                              <YAxis />
                              <Tooltip formatter={(value, name) => [
                                `₹${value.toLocaleString()}`,
                                name === 'avgPrice' ? 'Market Average' : 'Your Price'
                              ]} />
                              <Legend />
                              <Area 
                                type="monotone" 
                                dataKey="avgPrice" 
                                stroke="#8884d8" 
                                fill="#8884d8" 
                                fillOpacity={0.6} 
                                name="Market Average"
                              />
                              <Area 
                                type="monotone" 
                                dataKey="yourPrice" 
                                stroke="#82ca9d" 
                                fill="#82ca9d" 
                                fillOpacity={0.6} 
                                name="Your Price"
                              />
                            </AreaChart>
                          </ResponsiveContainer>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="competitors">
                      <Card>
                        <CardHeader>
                          <CardTitle>Competitor Analysis</CardTitle>
                          <CardDescription>How your property compares to similar listings nearby</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {competitorAnalysis.map((competitor, index) => (
                              <div key={index} className="p-4 border rounded-lg">
                                <div className="flex items-start justify-between mb-3">
                                  <div>
                                    <h4 className="font-medium">{competitor.name}</h4>
                                    <p className="text-sm text-gray-600 flex items-center space-x-1">
                                      <MapPin className="w-3 h-3" />
                                      <span>{competitor.distance} away</span>
                                    </p>
                                  </div>
                                  <div className="text-right">
                                    <div className="text-lg font-semibold">₹{competitor.price.toLocaleString()}</div>
                                    <div className="text-xs text-gray-500">per month</div>
                                  </div>
                                </div>

                                <div className="grid grid-cols-3 gap-4 text-sm">
                                  <div>
                                    <div className="flex items-center space-x-1">
                                      <Star className="w-3 h-3 text-yellow-500 fill-current" />
                                      <span className="font-medium">{competitor.rating}</span>
                                    </div>
                                    <div className="text-gray-600">Rating</div>
                                  </div>
                                  <div>
                                    <div className="font-medium">{competitor.occupancy}%</div>
                                    <div className="text-gray-600">Occupancy</div>
                                  </div>
                                  <div>
                                    <div className="flex flex-wrap gap-1">
                                      {competitor.amenities.slice(0, 3).map((amenity, i) => (
                                        <Badge key={i} variant="outline" size="sm">
                                          {amenity}
                                        </Badge>
                                      ))}
                                      {competitor.amenities.length > 3 && (
                                        <Badge variant="outline" size="sm">+{competitor.amenities.length - 3}</Badge>
                                      )}
                                    </div>
                                    <div className="text-gray-600">Amenities</div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </>
              )}
            </div>
          </TabsContent>

          {/* Create Listing Tab */}
          <TabsContent value="create">
            <div className="max-w-4xl mx-auto">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-semibold">Create New Listing</h2>
                  <span className="text-sm text-gray-600">Step {currentStep} of {totalSteps}</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              {/* Step Content */}
              <div className="mb-8">
                {renderCreateListingStep()}
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="flex items-center space-x-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </Button>

                <div className="flex space-x-2">
                  {[...Array(totalSteps)].map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index + 1 <= currentStep ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {currentStep < totalSteps ? (
                  <Button
                    onClick={nextStep}
                    className="flex items-center space-x-2"
                  >
                    <span>Next</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    className="flex items-center space-x-2 bg-green-600 hover:bg-green-700"
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>Publish Listing</span>
                  </Button>
                )}
              </div>

              {/* Review Summary (shown on last step) */}
              {currentStep === totalSteps && (
                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle>Review Your Listing</CardTitle>
                    <CardDescription>
                      Please review all information before publishing
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                      <div>
                        <h4 className="font-medium mb-2">Property Details</h4>
                        <p><strong>Name:</strong> {formData.propertyName || "Not specified"}</p>
                        <p><strong>Type:</strong> {formData.propertyType || "Not specified"}</p>
                        <p><strong>Address:</strong> {formData.address || "Not specified"}</p>
                        <p><strong>PIN Code:</strong> {formData.pincode || "Not specified"}</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Pricing</h4>
                        <p><strong>Monthly Rent:</strong> ₹{formData.monthlyRent || "0"}</p>
                        <p><strong>Security Deposit:</strong> ₹{formData.deposit || "0"}</p>
                        <p><strong>Food Included:</strong> {formData.foodIncluded ? "Yes" : "No"}</p>
                        <p><strong>Photos:</strong> {formData.images.length} uploaded</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}