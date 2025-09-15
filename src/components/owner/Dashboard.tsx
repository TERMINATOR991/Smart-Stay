import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { 
  PlusCircle, 
  Home, 
  MessageSquare, 
  Eye, 
  TrendingUp, 
  Users,
  DollarSign,
  AlertCircle,
  Calendar,
  Star,
  MapPin
} from "lucide-react";

interface DashboardProps {
  onViewChange: (view: string) => void;
}

export function Dashboard({ onViewChange }: DashboardProps) {
  const stats = [
    {
      title: "Active Listings",
      value: "8",
      change: "+2 this month",
      icon: <Home className="w-4 h-4" />,
      color: "text-blue-600"
    },
    {
      title: "Total Enquiries",
      value: "47",
      change: "+12 this week",
      icon: <MessageSquare className="w-4 h-4" />,
      color: "text-green-600"
    },
    {
      title: "Profile Views",
      value: "234",
      change: "+18% from last month",
      icon: <Eye className="w-4 h-4" />,
      color: "text-purple-600"
    },
    {
      title: "Monthly Revenue",
      value: "₹1,20,000",
      change: "+8% from last month",
      icon: <DollarSign className="w-4 h-4" />,
      color: "text-orange-600"
    }
  ];

  const recentListings = [
    {
      id: 1,
      name: "Modern Student Apartment",
      location: "Green Park, New Delhi",
      price: 15000,
      status: "Active",
      enquiries: 12,
      image: "https://images.unsplash.com/photo-1721743169026-d18a016f8996?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcm9vbSUyMGFjY29tbW9kYXRpb258ZW58MXx8fHwxNzU3MDgyODI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.5
    },
    {
      id: 2,
      name: "Budget-Friendly PG",
      location: "Karol Bagh, New Delhi",
      price: 8000,
      status: "Active",
      enquiries: 8,
      image: "https://images.unsplash.com/photo-1603072388139-565853396b38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBiZWRyb29tfGVufDF8fHx8MTc1NzA2MDgwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.2
    },
    {
      id: 3,
      name: "Premium Student Housing",
      location: "CP, New Delhi",
      price: 25000,
      status: "Pending",
      enquiries: 0,
      image: "https://images.unsplash.com/photo-1627889587269-1ec7c8b29049?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudCUyMGhvdXNpbmd8ZW58MXx8fHwxNzU3MDgyODI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 0
    }
  ];

  const recentEnquiries = [
    {
      id: 1,
      studentName: "Priya Sharma",
      propertyName: "Modern Student Apartment",
      message: "Hi, I'm interested in this property. Can we schedule a visit?",
      time: "2 hours ago",
      status: "unread"
    },
    {
      id: 2,
      studentName: "Rahul Kumar",
      propertyName: "Budget-Friendly PG",
      message: "Is this property still available for immediate move-in?",
      time: "5 hours ago",
      status: "read"
    },
    {
      id: 3,
      studentName: "Anjali Patel",
      propertyName: "Modern Student Apartment",
      message: "What are the nearby amenities and transport options?",
      time: "1 day ago",
      status: "replied"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-500 hover:bg-green-600";
      case "Pending": return "bg-yellow-500 hover:bg-yellow-600";
      case "Draft": return "bg-gray-500 hover:bg-gray-600";
      default: return "bg-gray-500 hover:bg-gray-600";
    }
  };

  const getEnquiryStatusColor = (status: string) => {
    switch (status) {
      case "unread": return "bg-red-100 text-red-800";
      case "read": return "bg-blue-100 text-blue-800";
      case "replied": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-semibold">Welcome back, Rajesh!</h1>
            <p className="text-gray-600 mt-1">Here's what's happening with your properties today.</p>
          </div>
          <Button 
            onClick={() => onViewChange('listing-pricing')}
            className="flex items-center space-x-2"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Add New Listing</span>
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <div className={stat.color}>{stat.icon}</div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Manage your properties and account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                variant="outline" 
                className="w-full justify-start h-12"
                onClick={() => onViewChange('listing-pricing')}
              >
                <PlusCircle className="w-4 h-4 mr-3" />
                Listings & Pricing
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start h-12"
                onClick={() => onViewChange('analytics-insights')}
              >
                <TrendingUp className="w-4 h-4 mr-3" />
                View Analytics
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start h-12"
                onClick={() => onViewChange('tenant-documents')}
              >
                <Users className="w-4 h-4 mr-3" />
                Tenants & Documents
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start h-12"
                onClick={() => onViewChange('communication-leads')}
              >
                <MessageSquare className="w-4 h-4 mr-3" />
                Communication & Leads
              </Button>
            </CardContent>
          </Card>

          {/* Recent Enquiries */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recent Enquiries</CardTitle>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => onViewChange('tenant-documents')}
                >
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentEnquiries.map((enquiry) => (
                  <div key={enquiry.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="font-medium truncate">{enquiry.studentName}</p>
                        <Badge 
                          variant="secondary" 
                          className={`text-xs ${getEnquiryStatusColor(enquiry.status)}`}
                        >
                          {enquiry.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 truncate">{enquiry.propertyName}</p>
                      <p className="text-sm text-gray-500 truncate">{enquiry.message}</p>
                      <p className="text-xs text-gray-400 mt-1">{enquiry.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Listings */}
        <Card className="mt-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Your Properties</CardTitle>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => onViewChange('listing-pricing')}
              >
                Add More
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentListings.map((listing) => (
                <Card key={listing.id} className="overflow-hidden">
                  <div className="relative h-48">
                    <ImageWithFallback
                      src={listing.image}
                      alt={listing.name}
                      className="w-full h-full object-cover"
                    />
                    <Badge className={`absolute top-2 right-2 ${getStatusColor(listing.status)}`}>
                      {listing.status}
                    </Badge>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{listing.name}</CardTitle>
                    <CardDescription className="flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {listing.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-1 text-green-600" />
                        <span className="font-semibold">₹{listing.price.toLocaleString()}</span>
                        <span className="text-gray-500 text-sm">/month</span>
                      </div>
                      {listing.rating > 0 && (
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{listing.rating}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{listing.enquiries} enquiries</span>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tips Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertCircle className="w-5 h-5 text-blue-600" />
              <span>Tips to Improve Your Listings</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium mb-2">Add High-Quality Photos</h4>
                <p className="text-sm text-gray-600">Properties with 5+ photos get 3x more enquiries</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium mb-2">Respond Quickly</h4>
                <p className="text-sm text-gray-600">Fast responses improve your landlord rating</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-medium mb-2">Update Availability</h4>
                <p className="text-sm text-gray-600">Keep your listings current to avoid confusion</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}