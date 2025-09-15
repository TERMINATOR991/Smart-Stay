import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { 
  ArrowLeft, 
  Sparkles, 
  MapPin, 
  DollarSign, 
  Star, 
  Heart, 
  TrendingUp,
  Brain,
  Target,
  Zap,
  Eye,
  Clock,
  Users,
  Wifi,
  Car,
  Utensils,
  CreditCard,
  RefreshCw,
  Lightbulb,
  ChevronRight,
  BookOpen,
  Award
} from "lucide-react";

interface GeminiRecommendationsProps {
  onViewChange: (view: string) => void;
}

export function GeminiRecommendations({ onViewChange }: GeminiRecommendationsProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    // Simulate AI processing time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const userPreferences = {
    budget: "₹12,000 - ₹18,000",
    preferredUniversity: "Stanford University",
    amenityPreferences: ["WiFi", "Food", "AC"],
    searchHistory: 23,
    savedProperties: 5,
    viewedProperties: 47
  };

  const aiInsights = {
    personalityType: "Study-Focused Student",
    confidenceScore: 94,
    topFactors: ["Proximity to University", "WiFi Quality", "Food Included", "Quiet Environment"],
    recommendations: [
      {
        id: 1,
        name: "Smart Study Haven",
        location: "University District, Delhi",
        price: 16500,
        originalPrice: 18000,
        discount: 8,
        distance: "1.2 km from Stanford University",
        rating: 4.7,
        reviews: 34,
        matchPercentage: 96,
        image: "https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwaG91c2luZyUyMG1vZGVybnxlbnwxfHx8fDE3NTcwODU3ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        whyRecommended: "Perfect match for your study habits and budget preferences",
        amenities: ["wifi", "food", "ac", "study-room"],
        trending: true,
        newListing: false,
        category: "perfect-match"
      },
      {
        id: 2,
        name: "Budget-Friendly Scholar's Den",
        location: "Student Area, Delhi",
        price: 13500,
        originalPrice: 13500,
        distance: "2.8 km from Stanford University",
        rating: 4.4,
        reviews: 28,
        matchPercentage: 89,
        image: "https://images.unsplash.com/photo-1721743169026-d18a016f8996?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcm9vbSUyMGFjY29tbW9kYXRpb258ZW58MXx8fHwxNzU3MDg0ODI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        whyRecommended: "Great value within your budget range",
        amenities: ["wifi", "food", "parking"],
        trending: false,
        newListing: true,
        category: "budget-friendly"
      },
      {
        id: 3,
        name: "Premium Student Residency",
        location: "Green Park, Delhi",
        price: 22000,
        originalPrice: 25000,
        discount: 12,
        distance: "1.8 km from Stanford University",
        rating: 4.9,
        reviews: 42,
        matchPercentage: 85,
        image: "https://images.unsplash.com/photo-1603072388139-565853396b38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBiZWRyb29tfGVufDF8fHx8MTc1NzA2MDgwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        whyRecommended: "Upgraded option with premium amenities",
        amenities: ["wifi", "food", "ac", "gym", "parking"],
        trending: true,
        newListing: false,
        category: "upgrade"
      },
      {
        id: 4,
        name: "Tech Hub Student Lodge",
        location: "IT District, Delhi",
        price: 17500,
        originalPrice: 17500,
        distance: "3.2 km from Stanford University",
        rating: 4.6,
        reviews: 31,
        matchPercentage: 92,
        image: "https://images.unsplash.com/photo-1627889587269-1ec7c8b29049?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudCUyMGhvdXNpbmd8ZW58MXx8fHwxNzU3MDg0ODI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        whyRecommended: "Based on your interest in tech-related properties",
        amenities: ["wifi", "food", "ac", "coworking"],
        trending: false,
        newListing: true,
        category: "similar-users"
      }
    ]
  };

  const categories = [
    { id: 'all', label: 'All Recommendations', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'perfect-match', label: 'Perfect Match', icon: <Target className="w-4 h-4" /> },
    { id: 'budget-friendly', label: 'Budget-Friendly', icon: <DollarSign className="w-4 h-4" /> },
    { id: 'upgrade', label: 'Upgrade Options', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'similar-users', label: 'Popular with Similar Users', icon: <Users className="w-4 h-4" /> }
  ];

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case "wifi": return <Wifi className="w-3 h-3" />;
      case "parking": return <Car className="w-3 h-3" />;
      case "food": return <Utensils className="w-3 h-3" />;
      case "ac": return "❄️";
      case "study-room": return <BookOpen className="w-3 h-3" />;
      case "gym": return "🏋️";
      case "coworking": return "💻";
      default: return null;
    }
  };

  const getMatchColor = (percentage: number) => {
    if (percentage >= 95) return "text-green-600 bg-green-100";
    if (percentage >= 90) return "text-blue-600 bg-blue-100";
    if (percentage >= 85) return "text-purple-600 bg-purple-100";
    return "text-orange-600 bg-orange-100";
  };

  const filteredRecommendations = selectedCategory === 'all' 
    ? aiInsights.recommendations 
    : aiInsights.recommendations.filter(rec => rec.category === selectedCategory);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto p-6">
          <div className="flex items-center space-x-4 mb-6">
            <Button
              variant="ghost"
              onClick={() => onViewChange('home')}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </Button>
          </div>

          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto animate-pulse">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-semibold mb-2">AI is Analyzing Your Preferences</h1>
              <p className="text-gray-600">
                Our Gemini AI is processing your search history, saved properties, and preferences to find perfect matches...
              </p>
            </div>
            <div className="space-y-4">
              <Progress value={75} className="h-2" />
              <div className="flex justify-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>Analyzing {userPreferences.viewedProperties} viewed properties</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="w-4 h-4" />
                  <span>Processing {userPreferences.savedProperties} saved listings</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => onViewChange('home')}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </Button>
            <div>
              <h1 className="text-3xl font-semibold flex items-center space-x-2">
                <Sparkles className="w-8 h-8 text-purple-600" />
                <span>Gemini Recommendations</span>
              </h1>
              <p className="text-gray-600 mt-1">Personalized suggestions powered by AI</p>
            </div>
          </div>
          <Button
            variant="outline"
            onClick={() => setIsLoading(true)}
            className="flex items-center space-x-2"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Refresh</span>
          </Button>
        </div>

        {/* AI Insights Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <Brain className="w-5 h-5" />
                <span>AI Confidence</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold mb-1">{aiInsights.confidenceScore}%</div>
              <p className="text-blue-100 text-sm">Match accuracy</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <Target className="w-5 h-5" />
                <span>Profile Type</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="font-semibold text-lg mb-1">{aiInsights.personalityType}</div>
              <p className="text-gray-600 text-sm">Based on your behavior</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <Eye className="w-5 h-5" />
                <span>Data Points</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="font-semibold text-lg mb-1">{userPreferences.viewedProperties + userPreferences.savedProperties}</div>
              <p className="text-gray-600 text-sm">Properties analyzed</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <DollarSign className="w-5 h-5" />
                <span>Budget Range</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="font-semibold text-lg mb-1">{userPreferences.budget}</div>
              <p className="text-gray-600 text-sm">Your preference</p>
            </CardContent>
          </Card>
        </div>

        {/* Top Factors */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Lightbulb className="w-5 h-5" />
              <span>What Matters Most to You</span>
            </CardTitle>
            <CardDescription>AI-identified preferences based on your activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {aiInsights.topFactors.map((factor, index) => (
                <div key={index} className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg">
                  <Award className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium">{factor}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="flex items-center space-x-2"
            >
              {category.icon}
              <span>{category.label}</span>
            </Button>
          ))}
        </div>

        {/* Recommendations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredRecommendations.map((property) => (
            <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <ImageWithFallback
                  src={property.image}
                  alt={property.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  <Badge className={`${getMatchColor(property.matchPercentage)} text-xs`}>
                    {property.matchPercentage}% match
                  </Badge>
                  {property.trending && (
                    <Badge className="bg-red-500 text-white text-xs">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Trending
                    </Badge>
                  )}
                  {property.newListing && (
                    <Badge className="bg-green-500 text-white text-xs">
                      <Zap className="w-3 h-3 mr-1" />
                      New
                    </Badge>
                  )}
                  {property.discount && (
                    <Badge className="bg-orange-500 text-white text-xs">
                      {property.discount}% OFF
                    </Badge>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-3 right-3 bg-white/90 hover:bg-white"
                >
                  <Heart className="w-4 h-4" />
                </Button>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{property.name}</CardTitle>
                <CardDescription className="flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  {property.location} • {property.distance}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="text-xl font-semibold">₹{property.price.toLocaleString()}</div>
                    {property.originalPrice && property.originalPrice > property.price && (
                      <div className="text-sm text-gray-500 line-through">
                        ₹{property.originalPrice.toLocaleString()}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{property.rating}</span>
                    <span className="text-sm text-gray-500">({property.reviews})</span>
                  </div>
                </div>

                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <Brain className="w-4 h-4 text-blue-600 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-blue-800">Why recommended:</div>
                      <div className="text-sm text-blue-700">{property.whyRecommended}</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {property.amenities.slice(0, 4).map((amenity) => (
                    <Badge key={amenity} variant="outline" className="text-xs flex items-center space-x-1">
                      {getAmenityIcon(amenity)}
                      <span className="capitalize">{amenity}</span>
                    </Badge>
                  ))}
                  {property.amenities.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{property.amenities.length - 4} more
                    </Badge>
                  )}
                </div>

                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => onViewChange('property-details')}
                  >
                    View Details
                  </Button>
                  <Button 
                    className="flex-1 bg-green-600 hover:bg-green-700"
                    onClick={() => onViewChange('booking-payment')}
                  >
                    <CreditCard className="w-3 h-3 mr-1" />
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI Learning Notice */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Brain className="w-5 h-5 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2">How Gemini AI Works</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Our AI continuously learns from your interactions to provide better recommendations. 
                  Every search, save, and booking helps us understand your preferences better.
                </p>
                <div className="flex items-center space-x-2 text-sm text-purple-600">
                  <Clock className="w-4 h-4" />
                  <span>Recommendations update every hour based on new data</span>
                </div>
              </div>
              <Button variant="outline" size="sm">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}