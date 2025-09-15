import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { 
  MapPin, 
  DollarSign, 
  Wifi, 
  Car, 
  Utensils, 
  Snowflake, 
  Bath,
  Star,
  Heart,
  Share2,
  Phone,
  MessageSquare,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Users,
  Home,
  Clock,
  Shield,
  ShoppingBag,
  Train,
  Hospital,
  GraduationCap,
  Coffee,
  Building,
  Navigation,
  Award,
  CreditCard
} from "lucide-react";

interface PropertyDetailsProps {
  onViewChange: (view: string) => void;
}

export function PropertyDetails({ onViewChange }: PropertyDetailsProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const property = {
    id: 1,
    name: "Modern Student Apartment",
    location: "Green Park, New Delhi",
    distance: "2.5 km from Stanford University",
    price: 15000,
    deposit: 30000,
    type: "PG",
    sharing: "Single",
    rating: 4.5,
    reviews: 23,
    description: "A beautifully furnished single room in a modern PG facility designed specifically for students. This spacious accommodation offers a comfortable living environment with all essential amenities included. Located in a safe and well-connected area with easy access to public transportation and nearby universities.",
    amenities: ["wifi", "food", "parking", "ac", "bathroom", "laundry", "security"],
    images: [
      "https://images.unsplash.com/photo-1721743169026-d18a016f8996?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcm9vbSUyMGFjY29tbW9kYXRpb258ZW58MXx8fHwxNzU3MDgyODI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1603072388139-565853396b38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBiZWRyb29tfGVufDF8fHx8MTc1NzA2MDgwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1627889587269-1ec7c8b29049?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudCUyMGhvdXNpbmd8ZW58MXx8fHwxNzU3MDgyODI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    landlord: {
      name: "Rajesh Kumar",
      avatar: "",
      rating: 4.7,
      properties: 12,
      responseTime: "Within 2 hours"
    },
    nearbyUniversities: [
      { name: "Stanford University", distance: "2.5 km" },
      { name: "MIT", distance: "3.8 km" },
      { name: "Harvard University", distance: "5.2 km" }
    ],
    rules: [
      "No smoking inside the premises",
      "Visitors allowed until 10 PM",
      "Monthly room cleaning included",
      "Common area usage guidelines apply"
    ],
    neighborhood: {
      safetyRating: 4.2,
      walkScore: 85,
      transitScore: 92,
      nearbyAmenities: [
        { type: "Metro Station", name: "Green Park Metro", distance: "0.3 km", icon: <Train className="w-4 h-4" /> },
        { type: "Grocery Store", name: "Fresh Mart", distance: "0.2 km", icon: <ShoppingBag className="w-4 h-4" /> },
        { type: "Hospital", name: "City Hospital", distance: "1.2 km", icon: <Hospital className="w-4 h-4" /> },
        { type: "Cafe", name: "Coffee Central", distance: "0.1 km", icon: <Coffee className="w-4 h-4" /> },
        { type: "Bank", name: "HDFC Bank ATM", distance: "0.4 km", icon: <Building className="w-4 h-4" /> },
        { type: "Restaurant", name: "Food Court", distance: "0.3 km", icon: <Utensils className="w-4 h-4" /> }
      ],
      highlights: [
        "Well-lit streets with 24/7 security patrol",
        "Direct metro connectivity to major areas",
        "Walking distance to shopping complex",
        "Safe area with low crime rate"
      ]
    },
    roommateCompatibility: {
      hasSharedRooms: true,
      currentOccupants: 3,
      lookingForRoommates: true,
      preferences: ["Study-focused", "Non-smoker", "Clean", "Quiet"]
    }
  };

  const reviews = [
    {
      id: 1,
      name: "Priya S.",
      rating: 5,
      date: "2 weeks ago",
      comment: "Excellent accommodation with all promised amenities. The location is perfect for university students and the landlord is very responsive."
    },
    {
      id: 2,
      name: "Amit R.",
      rating: 4,
      date: "1 month ago",
      comment: "Clean and well-maintained property. Food quality is good and WiFi speed is reliable. Would recommend to other students."
    },
    {
      id: 3,
      name: "Sarah M.",
      rating: 5,
      date: "2 months ago",
      comment: "Great place to stay! Safe neighborhood and easy commute to university. The owner is very helpful and accommodating."
    }
  ];

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case "wifi": return <Wifi className="w-4 h-4" />;
      case "parking": return <Car className="w-4 h-4" />;
      case "food": return <Utensils className="w-4 h-4" />;
      case "ac": return <Snowflake className="w-4 h-4" />;
      case "bathroom": return <Bath className="w-4 h-4" />;
      case "laundry": return <Home className="w-4 h-4" />;
      case "security": return <Users className="w-4 h-4" />;
      default: return null;
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-6">
          <Button
            variant="ghost"
            onClick={() => onViewChange('search')}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Search</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <Card className="overflow-hidden">
              <div className="relative h-96">
                <ImageWithFallback
                  src={property.images[currentImageIndex]}
                  alt={`${property.name} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/90 hover:bg-white"
                  onClick={prevImage}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/90 hover:bg-white"
                  onClick={nextImage}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {property.images.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full cursor-pointer ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              </div>
            </Card>

            {/* Property Information */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">{property.name}</CardTitle>
                    <CardDescription className="flex items-center text-base">
                      <MapPin className="w-4 h-4 mr-2" />
                      {property.location} • {property.distance}
                    </CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mt-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{property.rating}</span>
                    <span className="text-gray-500">({property.reviews} reviews)</span>
                  </div>
                  <Badge variant="outline">{property.type}</Badge>
                  <Badge className="bg-blue-500 hover:bg-blue-600">{property.sharing}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-medium mb-3">Pricing</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span>Monthly Rent</span>
                        <span className="font-semibold">₹{property.price.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Security Deposit</span>
                        <span className="font-semibold">₹{property.deposit.toLocaleString()}</span>
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between font-semibold">
                        <span>Total Move-in Cost</span>
                        <span>₹{(property.price + property.deposit).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Amenities</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {property.amenities.map((amenity) => (
                        <div key={amenity} className="flex items-center space-x-2 text-sm">
                          {getAmenityIcon(amenity)}
                          <span className="capitalize">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium mb-3">Description</h4>
                  <p className="text-gray-600 leading-relaxed">{property.description}</p>
                </div>

                <div>
                  <h4 className="font-medium mb-3">House Rules</h4>
                  <ul className="space-y-1">
                    {property.rules.map((rule, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start space-x-2">
                        <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Neighborhood Insights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Navigation className="w-5 h-5" />
                  <span>Neighborhood Insights</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Safety & Walkability Scores */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center justify-center mb-2">
                      <Shield className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="text-2xl font-semibold text-green-600">{property.neighborhood.safetyRating}/5</div>
                    <div className="text-sm text-gray-600">Safety Rating</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center justify-center mb-2">
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="text-2xl font-semibold text-blue-600">{property.neighborhood.walkScore}</div>
                    <div className="text-sm text-gray-600">Walk Score</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="flex items-center justify-center mb-2">
                      <Train className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="text-2xl font-semibold text-purple-600">{property.neighborhood.transitScore}</div>
                    <div className="text-sm text-gray-600">Transit Score</div>
                  </div>
                </div>

                {/* Nearby Amenities */}
                <div>
                  <h4 className="font-medium mb-3">Nearby Amenities</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {property.neighborhood.nearbyAmenities.map((amenity, index) => (
                      <div key={index} className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
                        <div className="text-gray-600">{amenity.icon}</div>
                        <div className="flex-1">
                          <div className="font-medium text-sm">{amenity.name}</div>
                          <div className="text-xs text-gray-500">{amenity.type}</div>
                        </div>
                        <div className="text-xs text-gray-600">{amenity.distance}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Neighborhood Highlights */}
                <div>
                  <h4 className="font-medium mb-3">Neighborhood Highlights</h4>
                  <ul className="space-y-2">
                    {property.neighborhood.highlights.map((highlight, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start space-x-2">
                        <Award className="w-3 h-3 text-green-600 mt-1 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Roommate Compatibility (if shared room) */}
            {property.roommateCompatibility.hasSharedRooms && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span>Roommate Info</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Current Occupants:</span>
                    <span className="font-medium">{property.roommateCompatibility.currentOccupants} students</span>
                  </div>
                  
                  {property.roommateCompatibility.lookingForRoommates && (
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Users className="w-4 h-4 text-blue-600" />
                        <span className="font-medium text-blue-600">Looking for Roommates</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {property.roommateCompatibility.preferences.map((pref) => (
                          <Badge key={pref} variant="outline" className="text-xs">
                            {pref}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => onViewChange('roommate-match')}
                  >
                    Find Compatible Roommates
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Nearby Universities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <GraduationCap className="w-5 h-5" />
                  <span>Nearby Universities</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {property.nearbyUniversities.map((university, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">{university.name}</span>
                      <span className="text-sm text-gray-600">{university.distance}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card>
              <CardHeader>
                <CardTitle>Reviews & Ratings</CardTitle>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">{property.rating}</span>
                  <span className="text-gray-500">based on {property.reviews} reviews</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b pb-4 last:border-b-0">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">{review.name}</span>
                          <div className="flex items-center">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Contact Property Owner</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback>
                      {property.landlord.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{property.landlord.name}</h4>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span>{property.landlord.rating}</span>
                      <span>•</span>
                      <span>{property.landlord.properties} properties</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 mb-4 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>Typically responds {property.landlord.responseTime}</span>
                </div>

                <div className="space-y-2">
                  <Button 
                    className="w-full flex items-center space-x-2 bg-green-600 hover:bg-green-700"
                    onClick={() => onViewChange('booking-payment')}
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Book Now</span>
                  </Button>
                  <Button className="w-full flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </Button>
                  <Button variant="outline" className="w-full flex items-center space-x-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Message</span>
                  </Button>
                  <Button variant="outline" className="w-full flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>Schedule Visit</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Info</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Property Type</span>
                    <span className="font-medium">{property.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sharing</span>
                    <span className="font-medium">{property.sharing}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Availability</span>
                    <span className="font-medium text-green-600">Available Now</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Minimum Stay</span>
                    <span className="font-medium">11 months</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}