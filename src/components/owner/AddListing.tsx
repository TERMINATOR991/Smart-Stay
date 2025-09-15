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
  Bath
} from "lucide-react";

interface AddListingProps {
  onViewChange: (view: string) => void;
}

export function AddListing({ onViewChange }: AddListingProps) {
  const [currentStep, setCurrentStep] = useState(1);
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
    // Here you would typically submit the form data
    console.log("Form submitted:", formData);
    onViewChange('dashboard');
  };

  const renderStep = () => {
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
      <div className="container mx-auto p-6 max-w-4xl">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-6">
          <Button
            variant="ghost"
            onClick={() => onViewChange('dashboard')}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Dashboard</span>
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-semibold">Add New Listing</h1>
            <span className="text-sm text-gray-600">Step {currentStep} of {totalSteps}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Step Content */}
        <div className="mb-8">
          {renderStep()}
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
    </div>
  );
}