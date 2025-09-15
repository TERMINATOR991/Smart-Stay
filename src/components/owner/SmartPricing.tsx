import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Progress } from "../ui/progress";
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
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  Brain,
  Zap,
  Target,
  MapPin,
  Building,
  Calendar,
  Users,
  Star,
  CheckCircle,
  AlertCircle,
  Info,
  RefreshCw,
  Sparkles,
  BarChart3,
  PieChart,
  Activity,
  Clock,
  Wifi,
  Car,
  Utensils,
  Dumbbell,
  Shield,
  Home,
  Eye,
  Download,
  Copy,
  Settings
} from "lucide-react";

interface SmartPricingProps {
  onViewChange: (view: string) => void;
}

export function SmartPricing({ onViewChange }: SmartPricingProps) {
  const [selectedProperty, setSelectedProperty] = useState("room-201");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);

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
      lastUpdated: "2 days ago"
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
      lastUpdated: "1 week ago"
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
      lastUpdated: "3 days ago"
    }
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
                <DollarSign className="w-8 h-8 text-blue-600" />
                <span>Smart Pricing</span>
                <Badge className="bg-purple-100 text-purple-800 flex items-center space-x-1">
                  <Sparkles className="w-3 h-3" />
                  <span>AI-Powered</span>
                </Badge>
              </h1>
              <p className="text-gray-600 mt-1">Get AI-driven pricing recommendations to maximize your revenue</p>
            </div>
          </div>
          <div className="flex space-x-2">
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
        </div>

        {/* Analysis Progress */}
        {isAnalyzing && (
          <Card className="mb-8">
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
            <Card className="mb-8">
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
                      <Badge className="mt-2">{selectedPropertyData.type}</Badge>
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
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
                      <Progress 
                        value={75} 
                        className="h-3 mt-2"
                      />
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
                {/* Impact Analysis */}
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

            <Tabs defaultValue="factors" className="space-y-6">
              <TabsList>
                <TabsTrigger value="factors">Pricing Factors</TabsTrigger>
                <TabsTrigger value="market">Market Trends</TabsTrigger>
                <TabsTrigger value="competitors">Competitor Analysis</TabsTrigger>
              </TabsList>

              {/* Pricing Factors */}
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

              {/* Market Trends */}
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

              {/* Competitor Analysis */}
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
    </div>
  );
}