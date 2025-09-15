import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Search, MapPin, DollarSign, Users, Wifi, Car, Utensils, Sparkles, Bell, Bot, Brain, Zap, ArrowRight } from "lucide-react";

interface HomePageProps {
  onViewChange: (view: string) => void;
}

export function HomePage({ onViewChange }: HomePageProps) {
  const featuredListings = [
    {
      id: 1,
      name: "Modern Student Apartment",
      location: "Near Stanford University",
      price: "₹15,000",
      image: "https://images.unsplash.com/photo-1721743169026-d18a016f8996?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcm9vbSUyMGFjY29tbW9kYXRpb258ZW58MXx8fHwxNzU3MDgyODI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      amenities: ["wifi", "food", "parking"],
      sharing: "Single"
    },
    {
      id: 2,
      name: "Cozy Shared Room",
      location: "Near MIT",
      price: "₹8,000",
      image: "https://images.unsplash.com/photo-1603072388139-565853396b38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBiZWRyb29tfGVufDF8fHx8MTc1NzA2MDgwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      amenities: ["wifi", "food"],
      sharing: "Double"
    },
    {
      id: 3,
      name: "Premium PG for Students",
      location: "Near Harvard",
      price: "₹20,000",
      image: "https://images.unsplash.com/photo-1627889587269-1ec7c8b29049?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudCUyMGhvdXNpbmd8ZW58MXx8fHwxNzU3MDgyODI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      amenities: ["wifi", "food", "parking", "ac"],
      sharing: "Single"
    }
  ];

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case "wifi": return <Wifi className="w-3 h-3" />;
      case "parking": return <Car className="w-3 h-3" />;
      case "food": return <Utensils className="w-3 h-3" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl mb-6">
            Find Your Perfect
            <span className="text-blue-600 block">Student Accommodation</span>
          </h1>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Connect with verified property owners and discover comfortable, affordable living spaces near your university.
          </p>
          
          {/* Search Bar */}
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Location</label>
                <Input placeholder="Enter city or area" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">University</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select university" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="stanford">Stanford University</SelectItem>
                    <SelectItem value="mit">MIT</SelectItem>
                    <SelectItem value="harvard">Harvard University</SelectItem>
                    <SelectItem value="berkeley">UC Berkeley</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Budget</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5000-10000">₹5,000 - ₹10,000</SelectItem>
                    <SelectItem value="10000-15000">₹10,000 - ₹15,000</SelectItem>
                    <SelectItem value="15000-25000">₹15,000 - ₹25,000</SelectItem>
                    <SelectItem value="25000+">₹25,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Room Type</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">Single Room</SelectItem>
                    <SelectItem value="double">Double Sharing</SelectItem>
                    <SelectItem value="triple">Triple Sharing</SelectItem>
                    <SelectItem value="flat">Full Flat</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button 
              className="w-full mt-6 py-3 text-lg"
              onClick={() => onViewChange('search')}
            >
              <Search className="w-5 h-5 mr-2" />
              Search Properties
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl text-center mb-12">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredListings.map((listing) => (
              <Card key={listing.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative h-48">
                  <ImageWithFallback
                    src={listing.image}
                    alt={listing.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-3 right-3 bg-green-500 hover:bg-green-600">
                    {listing.sharing}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{listing.name}</CardTitle>
                  <CardDescription className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {listing.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <DollarSign className="w-4 h-4 mr-1 text-green-600" />
                      <span className="font-semibold text-lg">{listing.price}</span>
                      <span className="text-gray-500 text-sm">/month</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    {listing.amenities.map((amenity) => (
                      <Badge key={amenity} variant="outline" className="text-xs flex items-center space-x-1">
                        {getAmenityIcon(amenity)}
                        <span className="capitalize">{amenity}</span>
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full" onClick={() => onViewChange('property-details')}>
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features Showcase */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Powered by AI Intelligence</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the future of student accommodation with our AI-powered features designed to make your search smarter and faster.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onViewChange('gemini-recommendations')}>
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Gemini Recommendations</CardTitle>
                <CardDescription>
                  AI learns your preferences and suggests perfect matches you'll love
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center space-x-2 text-sm text-blue-600">
                  <span>Try AI Recommendations</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onViewChange('pricing-alerts')}>
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bell className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Smart Price Alerts</CardTitle>
                <CardDescription>
                  Get notified instantly when your dream property drops in price
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center space-x-2 text-sm text-green-600">
                  <span>Set up Alerts</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <CardTitle>24/7 AI Assistant</CardTitle>
                <CardDescription>
                  Get instant answers to all your accommodation questions anytime
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center space-x-2 text-sm text-orange-600">
                  <span>Chat with AI</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl mb-4">1. Search</h3>
              <p className="text-gray-600">
                Browse through verified properties near your university with detailed filters and preferences.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl mb-4">2. Connect</h3>
              <p className="text-gray-600">
                Contact property owners directly through our secure messaging system and schedule visits.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl mb-4">3. Move In</h3>
              <p className="text-gray-600">
                Complete the booking process and move into your new home with confidence and ease.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}