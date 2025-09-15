import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Progress } from "../ui/progress";
import { Alert, AlertDescription } from "../ui/alert";
import { 
  ArrowLeft, 
  Wand2, 
  Upload, 
  Image,
  FileText,
  Copy,
  RefreshCw,
  Download,
  Edit,
  Eye,
  Sparkles,
  Brain,
  Target,
  Users,
  MapPin,
  Building,
  Star,
  CheckCircle,
  AlertCircle,
  Info,
  Camera,
  Plus,
  X,
  Settings,
  Zap,
  PenTool,
  Hash,
  MessageSquare,
  TrendingUp,
  Clock,
  Wifi,
  Car,
  Utensils,
  Dumbbell,
  Shield,
  Home,
  GraduationCap
} from "lucide-react";

interface AIListingGeneratorProps {
  onViewChange: (view: string) => void;
}

export function AIListingGenerator({ onViewChange }: AIListingGeneratorProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);
  const [generatedContent, setGeneratedContent] = useState<any>(null);

  const [formData, setFormData] = useState({
    propertyName: "",
    propertyType: "",
    location: "",
    price: "",
    amenities: [] as string[],
    nearbyUniversities: [] as string[],
    roomType: "",
    specialFeatures: "",
    targetAudience: "",
    tone: "professional"
  });

  const availableAmenities = [
    { id: "wifi", label: "High-Speed WiFi", icon: <Wifi className="w-4 h-4" /> },
    { id: "ac", label: "Air Conditioning", icon: <Home className="w-4 h-4" /> },
    { id: "food", label: "Food Included", icon: <Utensils className="w-4 h-4" /> },
    { id: "parking", label: "Parking", icon: <Car className="w-4 h-4" /> },
    { id: "gym", label: "Gym Access", icon: <Dumbbell className="w-4 h-4" /> },
    { id: "security", label: "24/7 Security", icon: <Shield className="w-4 h-4" /> },
    { id: "laundry", label: "Laundry Service", icon: <Home className="w-4 h-4" /> },
    { id: "study", label: "Study Room", icon: <GraduationCap className="w-4 h-4" /> }
  ];

  const propertyTypes = [
    "Single Room PG",
    "Shared Room PG", 
    "Studio Apartment",
    "1BHK Apartment",
    "Hostel Room",
    "Co-living Space"
  ];

  const toneOptions = [
    { value: "professional", label: "Professional" },
    { value: "friendly", label: "Friendly & Casual" },
    { value: "luxury", label: "Premium & Luxury" },
    { value: "student-focused", label: "Student-Friendly" }
  ];

  const sampleGeneratedContent = {
    title: "Premium Student Haven - Modern AC Room Near Stanford",
    description: `Experience comfort and convenience in this thoughtfully designed student accommodation, perfectly situated just minutes from Stanford University. This fully furnished single room offers the ideal blend of privacy, modern amenities, and community living.

🏠 **What Makes This Special:**
Your spacious, well-lit room comes with premium furnishing including a comfortable bed, study desk, wardrobe, and high-speed WiFi to support your academic journey. The property features modern amenities including 24/7 air conditioning, ensuring you stay comfortable year-round.

🍽️ **Delicious Meals Included:**
Enjoy nutritious, home-cooked meals prepared by our experienced kitchen staff. Our varied menu includes both North and South Indian cuisines, with special attention to dietary preferences and requirements.

🚗 **Prime Location Benefits:**
- 5-minute walk to Stanford main campus
- Direct bus connectivity to major tech companies
- Shopping centers and restaurants within walking distance
- Safe, well-lit neighborhood with 24/7 security

✨ **Amenities That Matter:**
• High-speed WiFi (100+ Mbps)
• 24/7 air conditioning
• Daily housekeeping service
• Dedicated parking space
• Modern shared kitchen access
• Study lounge with quiet zones
• Laundry facilities on-site

Perfect for serious students who value comfort, convenience, and community. Join a vibrant community of ambitious students from around the world in this premium accommodation designed specifically for your success.

📞 Contact us today to schedule a virtual or in-person tour!`,
    
    highlights: [
      "Premium AC room with modern furnishing",
      "5-minute walk to Stanford University",
      "All meals included - North & South Indian",
      "High-speed WiFi & study-friendly environment",
      "24/7 security & dedicated parking",
      "Vibrant international student community"
    ],
    
    seoKeywords: [
      "Stanford student housing",
      "AC PG near Stanford",
      "furnished student room",
      "student accommodation Stanford",
      "PG with food Stanford",
      "premium student housing"
    ],
    
    socialMediaPost: "🎓 Premium Student Room Available Near Stanford! ✨ AC, WiFi, All Meals Included 🍽️ Perfect for serious students 📚 5-min walk to campus 🚶‍♀️ Join our vibrant community today! #StudentHousing #Stanford #PGLife",
    
    emailTemplate: `Subject: Your Perfect Student Room Awaits Near Stanford!

Dear Student,

Looking for the perfect balance of comfort, convenience, and community? Your search ends here!

Our premium student accommodation offers:
• Modern AC rooms with all furniture
• All meals included (North & South Indian)
• 5-minute walk to Stanford campus
• High-speed WiFi & study spaces
• Safe, secure environment

Special offer for early bookings - Contact us today!

Best regards,
[Your Name]
[Contact Information]`
  };

  const handleAmenityChange = (amenityId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      amenities: checked 
        ? [...prev.amenities, amenityId]
        : prev.amenities.filter(a => a !== amenityId)
    }));
  };

  const handleGenerateContent = () => {
    setIsGenerating(true);
    setGenerationProgress(0);
    
    // Simulate AI content generation
    const steps = [
      "Analyzing property details...",
      "Researching local market...", 
      "Generating compelling title...",
      "Writing detailed description...",
      "Creating SEO keywords...",
      "Finalizing content..."
    ];

    const interval = setInterval(() => {
      setGenerationProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsGenerating(false);
            setGeneratedContent(sampleGeneratedContent);
            setCurrentStep(3);
          }, 500);
          return 100;
        }
        return prev + 16.67;
      });
    }, 800);
  };

  const handleCopyContent = (content: string) => {
    navigator.clipboard.writeText(content);
    // Could add a toast notification here
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic Property Information</CardTitle>
                <CardDescription>Tell us about your property to generate compelling content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Property Name</label>
                    <Input 
                      placeholder="e.g., Comfort Stay PG"
                      value={formData.propertyName}
                      onChange={(e) => setFormData(prev => ({ ...prev, propertyName: e.target.value }))}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Property Type</label>
                    <Select 
                      value={formData.propertyType} 
                      onValueChange={(value) => setFormData(prev => ({ ...prev, propertyType: value }))}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select property type" />
                      </SelectTrigger>
                      <SelectContent>
                        {propertyTypes.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Location</label>
                    <Input 
                      placeholder="e.g., Near Stanford University, CA"
                      value={formData.location}
                      onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Monthly Rent</label>
                    <Input 
                      placeholder="e.g., 15000"
                      value={formData.price}
                      onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Room Type</label>
                  <Select 
                    value={formData.roomType} 
                    onValueChange={(value) => setFormData(prev => ({ ...prev, roomType: value }))}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select room type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single">Single Occupancy</SelectItem>
                      <SelectItem value="shared">Shared Room (2-3 people)</SelectItem>
                      <SelectItem value="dormitory">Dormitory Style</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium">Special Features (Optional)</label>
                  <Textarea 
                    placeholder="Any unique features, recent renovations, special services, etc."
                    value={formData.specialFeatures}
                    onChange={(e) => setFormData(prev => ({ ...prev, specialFeatures: e.target.value }))}
                    className="mt-1"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Amenities & Features</CardTitle>
                <CardDescription>Select all amenities available at your property</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {availableAmenities.map((amenity) => (
                    <div key={amenity.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={amenity.id}
                        checked={formData.amenities.includes(amenity.id)}
                        onCheckedChange={(checked) => handleAmenityChange(amenity.id, checked as boolean)}
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
              </CardContent>
            </Card>

            <div className="flex space-x-4">
              <Button 
                onClick={() => setCurrentStep(2)}
                className="flex-1"
                disabled={!formData.propertyName || !formData.propertyType}
              >
                Next: Content Preferences
                <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
              </Button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Content Preferences</CardTitle>
                <CardDescription>Customize how AI should write your listing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Target Audience</label>
                    <Select 
                      value={formData.targetAudience} 
                      onValueChange={(value) => setFormData(prev => ({ ...prev, targetAudience: value }))}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Who is this property for?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="undergraduate">Undergraduate Students</SelectItem>
                        <SelectItem value="graduate">Graduate Students</SelectItem>
                        <SelectItem value="international">International Students</SelectItem>
                        <SelectItem value="professionals">Young Professionals</SelectItem>
                        <SelectItem value="all">All Students</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Writing Tone</label>
                    <Select 
                      value={formData.tone} 
                      onValueChange={(value) => setFormData(prev => ({ ...prev, tone: value }))}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {toneOptions.map((tone) => (
                          <SelectItem key={tone.value} value={tone.value}>{tone.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Nearby Universities/Colleges</label>
                  <Input 
                    placeholder="e.g., Stanford University, UC Berkeley (comma separated)"
                    className="mt-1"
                  />
                  <p className="text-xs text-gray-500 mt-1">This helps generate location-specific content</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Content Types</CardTitle>
                <CardDescription>What types of content would you like to generate?</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="title" defaultChecked />
                    <label htmlFor="title" className="text-sm flex items-center space-x-2">
                      <FileText className="w-4 h-4" />
                      <span>Property Title</span>
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="description" defaultChecked />
                    <label htmlFor="description" className="text-sm flex items-center space-x-2">
                      <PenTool className="w-4 h-4" />
                      <span>Detailed Description</span>
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="highlights" defaultChecked />
                    <label htmlFor="highlights" className="text-sm flex items-center space-x-2">
                      <Star className="w-4 h-4" />
                      <span>Key Highlights</span>
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="seo" defaultChecked />
                    <label htmlFor="seo" className="text-sm flex items-center space-x-2">
                      <Hash className="w-4 h-4" />
                      <span>SEO Keywords</span>
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="social" defaultChecked />
                    <label htmlFor="social" className="text-sm flex items-center space-x-2">
                      <MessageSquare className="w-4 h-4" />
                      <span>Social Media Post</span>
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="email" defaultChecked />
                    <label htmlFor="email" className="text-sm flex items-center space-x-2">
                      <MessageSquare className="w-4 h-4" />
                      <span>Email Template</span>
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex space-x-4">
              <Button 
                variant="outline"
                onClick={() => setCurrentStep(1)}
                className="flex-1"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <Button 
                onClick={handleGenerateContent}
                disabled={isGenerating}
                className="flex-1"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Wand2 className="w-4 h-4 mr-2" />
                    Generate Content
                  </>
                )}
              </Button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-2">Content Generated Successfully!</h2>
              <p className="text-gray-600">AI has created compelling content for your property listing</p>
            </div>

            <Tabs defaultValue="description" className="space-y-4">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="highlights">Highlights</TabsTrigger>
                <TabsTrigger value="seo">SEO Keywords</TabsTrigger>
                <TabsTrigger value="social">Social/Email</TabsTrigger>
              </TabsList>

              <TabsContent value="description">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>{generatedContent?.title}</CardTitle>
                        <CardDescription>AI-generated property description</CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleCopyContent(generatedContent?.description)}
                        >
                          <Copy className="w-4 h-4 mr-1" />
                          Copy
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4 mr-1" />
                          Edit
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-sm max-w-none">
                      <div className="whitespace-pre-line bg-gray-50 p-4 rounded-lg">
                        {generatedContent?.description}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="highlights">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Key Highlights</CardTitle>
                        <CardDescription>Bullet points for easy scanning</CardDescription>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleCopyContent(generatedContent?.highlights.join('\n• '))}
                      >
                        <Copy className="w-4 h-4 mr-1" />
                        Copy
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {generatedContent?.highlights.map((highlight: string, index: number) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="seo">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>SEO Keywords</CardTitle>
                        <CardDescription>Optimized keywords for better search visibility</CardDescription>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleCopyContent(generatedContent?.seoKeywords.join(', '))}
                      >
                        <Copy className="w-4 h-4 mr-1" />
                        Copy
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {generatedContent?.seoKeywords.map((keyword: string, index: number) => (
                        <Badge key={index} variant="outline">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="social">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle>Social Media Post</CardTitle>
                          <CardDescription>Ready-to-post content for social platforms</CardDescription>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleCopyContent(generatedContent?.socialMediaPost)}
                        >
                          <Copy className="w-4 h-4 mr-1" />
                          Copy
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        {generatedContent?.socialMediaPost}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle>Email Template</CardTitle>
                          <CardDescription>Professional email for direct outreach</CardDescription>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleCopyContent(generatedContent?.emailTemplate)}
                        >
                          <Copy className="w-4 h-4 mr-1" />
                          Copy
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gray-50 p-4 rounded-lg whitespace-pre-line text-sm">
                        {generatedContent?.emailTemplate}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex space-x-4">
              <Button 
                variant="outline"
                onClick={() => setCurrentStep(1)}
                className="flex-1"
              >
                Generate New Content
              </Button>
              <Button className="flex-1">
                <CheckCircle className="w-4 h-4 mr-2" />
                Use This Content
              </Button>
            </div>
          </div>
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
                <Wand2 className="w-8 h-8 text-purple-600" />
                <span>AI Listing Generator</span>
                <Badge className="bg-purple-100 text-purple-800 flex items-center space-x-1">
                  <Sparkles className="w-3 h-3" />
                  <span>AI-Powered</span>
                </Badge>
              </h1>
              <p className="text-gray-600 mt-1">Generate compelling property descriptions with AI</p>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center space-x-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step <= currentStep 
                      ? 'bg-blue-600 text-white' 
                      : step === currentStep + 1 && isGenerating
                        ? 'bg-purple-600 text-white animate-pulse'
                        : 'bg-gray-200 text-gray-600'
                  }`}>
                    {step === 2 && isGenerating ? (
                      <RefreshCw className="w-4 h-4 animate-spin" />
                    ) : (
                      step
                    )}
                  </div>
                  <span className={`text-sm ${step <= currentStep ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
                    {step === 1 && 'Property Details'}
                    {step === 2 && 'Preferences'}
                    {step === 3 && 'Generated Content'}
                  </span>
                  {step < 3 && <div className="w-8 h-px bg-gray-200 mx-2" />}
                </div>
              ))}
            </div>
          </div>
          <Progress value={(currentStep / 3) * 100} className="h-2" />
        </div>

        {/* Generation Progress */}
        {isGenerating && (
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <Brain className="w-8 h-8 text-purple-600 animate-pulse" />
                <div className="flex-1">
                  <h3 className="font-medium">AI is creating your content...</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Analyzing your property details and market data to generate compelling content
                  </p>
                  <Progress value={generationProgress} className="h-2" />
                  <p className="text-xs text-gray-500 mt-1">{generationProgress.toFixed(0)}% complete</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step Content */}
        {renderStepContent()}

        {/* AI Features Info */}
        {currentStep === 1 && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                <span>What Our AI Can Do</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-medium">Smart Targeting</h4>
                  <p className="text-sm text-gray-600">Tailors content to your specific student audience</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-medium">SEO Optimized</h4>
                  <p className="text-sm text-gray-600">Includes keywords for better search visibility</p>
                </div>
                <div className="text-center">
                  <MessageSquare className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <h4 className="font-medium">Multi-Format</h4>
                  <p className="text-sm text-gray-600">Creates content for listings, social media, and emails</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}