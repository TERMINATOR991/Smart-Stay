import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Switch } from "../ui/switch";
import { Separator } from "../ui/separator";
import { Alert, AlertDescription } from "../ui/alert";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { 
  ArrowLeft, 
  Bell, 
  TrendingDown, 
  TrendingUp, 
  DollarSign, 
  MapPin,
  Star,
  Plus,
  Trash2,
  Settings,
  AlertCircle,
  CheckCircle,
  Clock,
  Target,
  Zap,
  PieChart,
  Calendar,
  Phone,
  Mail,
  Smartphone
} from "lucide-react";

interface PricingAlertsProps {
  onViewChange: (view: string) => void;
}

export function PricingAlerts({ onViewChange }: PricingAlertsProps) {
  const [showCreateAlert, setShowCreateAlert] = useState(false);
  const [newAlert, setNewAlert] = useState({
    propertyId: "",
    maxPrice: "",
    notificationMethod: "email"
  });

  const activeAlerts = [
    {
      id: 1,
      propertyName: "Modern Student Apartment",
      location: "Green Park, New Delhi",
      currentPrice: 15000,
      targetPrice: 13000,
      originalPrice: 18000,
      priceHistory: [18000, 17500, 16000, 15500, 15000],
      image: "https://images.unsplash.com/photo-1721743169026-d18a016f8996?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcm9vbSUyMGFjY29tbW9kYXRpb258ZW58MXx8fHwxNzU3MDg0ODI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.5,
      lastPriceChange: "2 days ago",
      priceDropChance: 75,
      status: "active",
      notifications: "email",
      createdDate: "Jan 15, 2024"
    },
    {
      id: 2,
      propertyName: "Budget Scholar's Den",
      location: "Student Area, Delhi",
      currentPrice: 12000,
      targetPrice: 11000,
      originalPrice: 14000,
      priceHistory: [14000, 13500, 12500, 12000],
      image: "https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwaG91c2luZyUyMG1vZGVybnxlbnwxfHx8fDE3NTcwODU3ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.2,
      lastPriceChange: "1 week ago",
      priceDropChance: 45,
      status: "active",
      notifications: "push",
      createdDate: "Jan 10, 2024"
    },
    {
      id: 3,
      propertyName: "Premium Student Residency",
      location: "Green Park, Delhi",
      currentPrice: 20000,
      targetPrice: 18000,
      originalPrice: 25000,
      priceHistory: [25000, 24000, 22000, 21000, 20000],
      image: "https://images.unsplash.com/photo-1603072388139-565853396b38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBiZWRyb29tfGVufDF8fHx8MTc1NzA2MDgwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.8,
      lastPriceChange: "5 days ago",
      priceDropChance: 60,
      status: "triggered",
      notifications: "email+sms",
      createdDate: "Jan 8, 2024"
    }
  ];

  const recentNotifications = [
    {
      id: 1,
      type: "price_drop",
      propertyName: "Tech Hub Student Lodge",
      oldPrice: 17500,
      newPrice: 16000,
      timestamp: "2 hours ago",
      read: false
    },
    {
      id: 2,
      type: "target_reached",
      propertyName: "Premium Student Residency",
      targetPrice: 18000,
      currentPrice: 20000,
      timestamp: "1 day ago",
      read: false
    },
    {
      id: 3,
      type: "price_increase",
      propertyName: "Smart Study Haven",
      oldPrice: 16000,
      newPrice: 17000,
      timestamp: "3 days ago",
      read: true
    }
  ];

  const marketInsights = {
    averagePriceChange: -5.2,
    totalSavings: 25000,
    alertsTriggered: 8,
    bestTime: "Evening (6-8 PM)"
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-blue-100 text-blue-800';
      case 'triggered': return 'bg-green-100 text-green-800';
      case 'paused': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriceChangeColor = (current: number, original: number) => {
    if (current < original) return 'text-green-600';
    if (current > original) return 'text-red-600';
    return 'text-gray-600';
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'price_drop': return <TrendingDown className="w-4 h-4 text-green-600" />;
      case 'target_reached': return <Target className="w-4 h-4 text-blue-600" />;
      case 'price_increase': return <TrendingUp className="w-4 h-4 text-red-600" />;
      default: return <Bell className="w-4 h-4" />;
    }
  };

  const handleCreateAlert = () => {
    // Add new alert logic here
    setShowCreateAlert(false);
    setNewAlert({ propertyId: "", maxPrice: "", notificationMethod: "email" });
  };

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
                <Bell className="w-8 h-8 text-blue-600" />
                <span>Price Alerts</span>
              </h1>
              <p className="text-gray-600 mt-1">Track price changes and never miss a deal</p>
            </div>
          </div>
          <Button
            onClick={() => setShowCreateAlert(true)}
            className="flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Create Alert</span>
          </Button>
        </div>

        {/* Market Insights */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <TrendingDown className="w-5 h-5 text-green-600" />
                <span>Avg. Price Change</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-green-600">
                {marketInsights.averagePriceChange}%
              </div>
              <p className="text-gray-600 text-sm">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <DollarSign className="w-5 h-5 text-blue-600" />
                <span>Total Savings</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-blue-600">
                ₹{marketInsights.totalSavings.toLocaleString()}
              </div>
              <p className="text-gray-600 text-sm">From alerts</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-purple-600" />
                <span>Alerts Triggered</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-purple-600">
                {marketInsights.alertsTriggered}
              </div>
              <p className="text-gray-600 text-sm">Last 30 days</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <Clock className="w-5 h-5 text-orange-600" />
                <span>Best Time</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg font-semibold text-orange-600">
                {marketInsights.bestTime}
              </div>
              <p className="text-gray-600 text-sm">For price drops</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Active Alerts */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Price Alerts</CardTitle>
                <CardDescription>
                  {activeAlerts.length} active alerts monitoring price changes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {activeAlerts.map((alert) => (
                  <Card key={alert.id} className="p-4">
                    <div className="flex items-start space-x-4">
                      <ImageWithFallback
                        src={alert.image}
                        alt={alert.propertyName}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold">{alert.propertyName}</h4>
                            <p className="text-sm text-gray-600 flex items-center">
                              <MapPin className="w-3 h-3 mr-1" />
                              {alert.location}
                            </p>
                          </div>
                          <Badge className={getStatusColor(alert.status)}>
                            {alert.status}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="text-gray-500">Current Price</span>
                            <div className="font-semibold">₹{alert.currentPrice.toLocaleString()}</div>
                          </div>
                          <div>
                            <span className="text-gray-500">Target Price</span>
                            <div className="font-semibold text-green-600">₹{alert.targetPrice.toLocaleString()}</div>
                          </div>
                          <div>
                            <span className="text-gray-500">Drop Chance</span>
                            <div className="font-semibold">{alert.priceDropChance}%</div>
                          </div>
                          <div>
                            <span className="text-gray-500">Last Change</span>
                            <div className="font-semibold">{alert.lastPriceChange}</div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${((alert.originalPrice - alert.currentPrice) / (alert.originalPrice - alert.targetPrice)) * 100}%` }}
                            />
                          </div>
                          <span className="text-xs text-gray-500">
                            {Math.round(((alert.originalPrice - alert.currentPrice) / (alert.originalPrice - alert.targetPrice)) * 100)}% to target
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              <span>{alert.rating}</span>
                            </div>
                            <div>Created: {alert.createdDate}</div>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Settings className="w-3 h-3" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </CardContent>
            </Card>

            {/* Create Alert Form */}
            {showCreateAlert && (
              <Card>
                <CardHeader>
                  <CardTitle>Create New Price Alert</CardTitle>
                  <CardDescription>
                    Get notified when properties drop to your target price
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Property</label>
                    <select 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      value={newAlert.propertyId}
                      onChange={(e) => setNewAlert(prev => ({ ...prev, propertyId: e.target.value }))}
                    >
                      <option value="">Select a property from your saved list</option>
                      <option value="1">Modern Student Apartment</option>
                      <option value="2">Smart Study Haven</option>
                      <option value="3">Tech Hub Student Lodge</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Target Price</label>
                    <Input
                      type="number"
                      placeholder="Enter maximum price you're willing to pay"
                      value={newAlert.maxPrice}
                      onChange={(e) => setNewAlert(prev => ({ ...prev, maxPrice: e.target.value }))}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Notification Method</label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="email"
                          name="notification"
                          value="email"
                          checked={newAlert.notificationMethod === "email"}
                          onChange={(e) => setNewAlert(prev => ({ ...prev, notificationMethod: e.target.value }))}
                        />
                        <label htmlFor="email" className="text-sm flex items-center space-x-2">
                          <Mail className="w-4 h-4" />
                          <span>Email notifications</span>
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="push"
                          name="notification"
                          value="push"
                          checked={newAlert.notificationMethod === "push"}
                          onChange={(e) => setNewAlert(prev => ({ ...prev, notificationMethod: e.target.value }))}
                        />
                        <label htmlFor="push" className="text-sm flex items-center space-x-2">
                          <Smartphone className="w-4 h-4" />
                          <span>Push notifications</span>
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="both"
                          name="notification"
                          value="both"
                          checked={newAlert.notificationMethod === "both"}
                          onChange={(e) => setNewAlert(prev => ({ ...prev, notificationMethod: e.target.value }))}
                        />
                        <label htmlFor="both" className="text-sm flex items-center space-x-2">
                          <Bell className="w-4 h-4" />
                          <span>Email + Push notifications</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button onClick={handleCreateAlert} className="flex-1">
                      Create Alert
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => setShowCreateAlert(false)}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Notifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="w-5 h-5" />
                  <span>Recent Notifications</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentNotifications.map((notification) => (
                  <div 
                    key={notification.id} 
                    className={`p-3 rounded-lg border ${notification.read ? 'bg-gray-50' : 'bg-blue-50 border-blue-200'}`}
                  >
                    <div className="flex items-start space-x-3">
                      {getNotificationIcon(notification.type)}
                      <div className="flex-1">
                        <div className="font-medium text-sm">{notification.propertyName}</div>
                        {notification.type === 'price_drop' && (
                          <div className="text-xs text-gray-600">
                            Price dropped from ₹{notification.oldPrice.toLocaleString()} to ₹{notification.newPrice.toLocaleString()}
                          </div>
                        )}
                        {notification.type === 'target_reached' && (
                          <div className="text-xs text-gray-600">
                            Now ₹{notification.currentPrice.toLocaleString()} - Close to your target of ₹{notification.targetPrice.toLocaleString()}
                          </div>
                        )}
                        {notification.type === 'price_increase' && (
                          <div className="text-xs text-gray-600">
                            Price increased from ₹{notification.oldPrice.toLocaleString()} to ₹{notification.newPrice.toLocaleString()}
                          </div>
                        )}
                        <div className="text-xs text-gray-500 mt-1">{notification.timestamp}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="w-5 h-5" />
                  <span>Smart Tips</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription className="text-sm">
                    Set your target price 10-15% below current price for better chances of getting alerted.
                  </AlertDescription>
                </Alert>
                <Alert>
                  <PieChart className="h-4 w-4" />
                  <AlertDescription className="text-sm">
                    Prices typically drop on weekends and during semester breaks.
                  </AlertDescription>
                </Alert>
                <Alert>
                  <Calendar className="h-4 w-4" />
                  <AlertDescription className="text-sm">
                    New listings often have promotional pricing in their first week.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}