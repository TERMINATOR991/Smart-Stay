import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Alert, AlertDescription } from "../ui/alert";
import { Progress } from "../ui/progress";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { 
  ArrowLeft, 
  CreditCard, 
  Shield, 
  CheckCircle, 
  Calendar, 
  MapPin,
  DollarSign,
  Clock,
  AlertCircle,
  Smartphone,
  Building,
  User,
  FileText,
  Lock
} from "lucide-react";

interface BookingPaymentProps {
  onViewChange: (view: string) => void;
}

export function BookingPayment({ onViewChange }: BookingPaymentProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | 'netbanking'>('card');
  const [bookingData, setBookingData] = useState({
    moveInDate: "",
    duration: "11",
    guestName: "",
    guestPhone: "",
    guestEmail: "",
    emergencyContact: "",
    specialRequests: ""
  });

  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
    upiId: ""
  });

  const property = {
    id: 1,
    name: "Modern Student Apartment",
    location: "Green Park, New Delhi",
    image: "https://images.unsplash.com/photo-1721743169026-d18a016f8996?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcm9vbSUyMGFjY29tbW9kYXRpb258ZW58MXx8fHwxNzU3MDg0ODI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    monthlyRent: 15000,
    deposit: 30000,
    tokenAmount: 5000,
    amenities: ["Wi-Fi", "Food", "AC", "Parking"]
  };

  const totalSteps = 3;
  const progress = (currentStep / totalSteps) * 100;

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

  const handleBookingSubmit = () => {
    // Process booking and payment
    setCurrentStep(4); // Success step
  };

  const renderBookingDetails = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="w-5 h-5" />
            <span>Booking Details</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Move-in Date</label>
              <Input
                type="date"
                value={bookingData.moveInDate}
                onChange={(e) => setBookingData(prev => ({ ...prev, moveInDate: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Duration (months)</label>
              <select 
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={bookingData.duration}
                onChange={(e) => setBookingData(prev => ({ ...prev, duration: e.target.value }))}
              >
                <option value="6">6 months</option>
                <option value="11">11 months</option>
                <option value="12">12 months</option>
                <option value="24">24 months</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Guest Information</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Full Name</label>
                <Input
                  placeholder="Enter full name"
                  value={bookingData.guestName}
                  onChange={(e) => setBookingData(prev => ({ ...prev, guestName: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone Number</label>
                <Input
                  placeholder="Enter phone number"
                  value={bookingData.guestPhone}
                  onChange={(e) => setBookingData(prev => ({ ...prev, guestPhone: e.target.value }))}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email Address</label>
              <Input
                type="email"
                placeholder="Enter email address"
                value={bookingData.guestEmail}
                onChange={(e) => setBookingData(prev => ({ ...prev, guestEmail: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Emergency Contact</label>
              <Input
                placeholder="Emergency contact number"
                value={bookingData.emergencyContact}
                onChange={(e) => setBookingData(prev => ({ ...prev, emergencyContact: e.target.value }))}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Special Requests (Optional)</label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              rows={3}
              placeholder="Any special requirements or requests..."
              value={bookingData.specialRequests}
              onChange={(e) => setBookingData(prev => ({ ...prev, specialRequests: e.target.value }))}
            />
          </div>
        </CardContent>
      </Card>

      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          You are booking with a token payment of ₹{property.tokenAmount.toLocaleString()}. 
          The remaining amount will be collected upon move-in.
        </AlertDescription>
      </Alert>
    </div>
  );

  const renderPaymentMethod = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CreditCard className="w-5 h-5" />
            <span>Payment Method</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-3">
            <button
              className={`p-4 border-2 rounded-lg flex flex-col items-center space-y-2 ${
                paymentMethod === 'card' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
              }`}
              onClick={() => setPaymentMethod('card')}
            >
              <CreditCard className="w-6 h-6" />
              <span className="text-sm font-medium">Card</span>
            </button>
            <button
              className={`p-4 border-2 rounded-lg flex flex-col items-center space-y-2 ${
                paymentMethod === 'upi' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
              }`}
              onClick={() => setPaymentMethod('upi')}
            >
              <Smartphone className="w-6 h-6" />
              <span className="text-sm font-medium">UPI</span>
            </button>
            <button
              className={`p-4 border-2 rounded-lg flex flex-col items-center space-y-2 ${
                paymentMethod === 'netbanking' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
              }`}
              onClick={() => setPaymentMethod('netbanking')}
            >
              <Building className="w-6 h-6" />
              <span className="text-sm font-medium">Net Banking</span>
            </button>
          </div>

          {paymentMethod === 'card' && (
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Card Number</label>
                <Input
                  placeholder="1234 5678 9012 3456"
                  value={paymentData.cardNumber}
                  onChange={(e) => setPaymentData(prev => ({ ...prev, cardNumber: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Cardholder Name</label>
                <Input
                  placeholder="Name on card"
                  value={paymentData.cardholderName}
                  onChange={(e) => setPaymentData(prev => ({ ...prev, cardholderName: e.target.value }))}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Expiry Date</label>
                  <Input
                    placeholder="MM/YY"
                    value={paymentData.expiryDate}
                    onChange={(e) => setPaymentData(prev => ({ ...prev, expiryDate: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">CVV</label>
                  <Input
                    placeholder="123"
                    value={paymentData.cvv}
                    onChange={(e) => setPaymentData(prev => ({ ...prev, cvv: e.target.value }))}
                  />
                </div>
              </div>
            </div>
          )}

          {paymentMethod === 'upi' && (
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">UPI ID</label>
                <Input
                  placeholder="example@paytm"
                  value={paymentData.upiId}
                  onChange={(e) => setPaymentData(prev => ({ ...prev, upiId: e.target.value }))}
                />
              </div>
            </div>
          )}

          {paymentMethod === 'netbanking' && (
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Select Bank</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>Select your bank</option>
                  <option>State Bank of India</option>
                  <option>HDFC Bank</option>
                  <option>ICICI Bank</option>
                  <option>Axis Bank</option>
                  <option>Punjab National Bank</option>
                </select>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <Shield className="w-4 h-4 text-green-600" />
        <span>Your payment information is secure and encrypted</span>
      </div>
    </div>
  );

  const renderConfirmation = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="w-5 h-5" />
            <span>Booking Summary</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <ImageWithFallback
              src={property.image}
              alt={property.name}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div>
              <h4 className="font-semibold">{property.name}</h4>
              <p className="text-sm text-gray-600 flex items-center">
                <MapPin className="w-3 h-3 mr-1" />
                {property.location}
              </p>
            </div>
          </div>

          <Separator />

          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Move-in Date:</span>
              <span className="font-medium">{bookingData.moveInDate || "Not selected"}</span>
            </div>
            <div className="flex justify-between">
              <span>Duration:</span>
              <span className="font-medium">{bookingData.duration} months</span>
            </div>
            <div className="flex justify-between">
              <span>Guest Name:</span>
              <span className="font-medium">{bookingData.guestName || "Not provided"}</span>
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Monthly Rent:</span>
              <span>₹{property.monthlyRent.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Security Deposit:</span>
              <span>₹{property.deposit.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-green-600">
              <span>Token Payment (Today):</span>
              <span className="font-semibold">₹{property.tokenAmount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Remaining (On Move-in):</span>
              <span>₹{(property.monthlyRent + property.deposit - property.tokenAmount).toLocaleString()}</span>
            </div>
          </div>

          <Separator />

          <div className="flex justify-between font-semibold text-lg">
            <span>Total Due Today:</span>
            <span className="text-green-600">₹{property.tokenAmount.toLocaleString()}</span>
          </div>
        </CardContent>
      </Card>

      <Alert>
        <Lock className="h-4 w-4" />
        <AlertDescription>
          <strong>Booking Policy:</strong> This token payment reserves your room for the selected move-in date. 
          If you cancel within 48 hours, you'll receive a full refund. After 48 hours, cancellation policies apply.
        </AlertDescription>
      </Alert>
    </div>
  );

  const renderSuccess = () => (
    <div className="text-center space-y-6">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
        <CheckCircle className="w-12 h-12 text-green-600" />
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold mb-2">Booking Confirmed!</h2>
        <p className="text-gray-600">
          Your room has been successfully reserved. You'll receive a confirmation email shortly.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Booking Reference</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="text-center">
            <div className="text-2xl font-mono font-semibold text-blue-600">BK-2024-001234</div>
            <p className="text-sm text-gray-600">Keep this reference number for your records</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Property:</strong><br />
              {property.name}
            </div>
            <div>
              <strong>Move-in Date:</strong><br />
              {bookingData.moveInDate}
            </div>
            <div>
              <strong>Token Paid:</strong><br />
              ₹{property.tokenAmount.toLocaleString()}
            </div>
            <div>
              <strong>Duration:</strong><br />
              {bookingData.duration} months
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-3">
        <h3 className="font-semibold">Next Steps:</h3>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span>You'll receive a confirmation email within 5 minutes</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-blue-600" />
            <span>The property owner will contact you within 24 hours</span>
          </div>
          <div className="flex items-center space-x-2">
            <User className="w-4 h-4 text-purple-600" />
            <span>Complete the remaining payment before your move-in date</span>
          </div>
        </div>
      </div>

      <div className="flex space-x-3">
        <Button onClick={() => onViewChange('home')} className="flex-1">
          Back to Home
        </Button>
        <Button variant="outline" onClick={() => onViewChange('search')} className="flex-1">
          Find More Properties
        </Button>
      </div>
    </div>
  );

  if (currentStep === 4) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto p-6 max-w-2xl">
          {renderSuccess()}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-6 max-w-4xl">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-6">
          <Button
            variant="ghost"
            onClick={() => onViewChange('property-details')}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Property</span>
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-semibold">Book Your Room</h1>
            <span className="text-sm text-gray-600">Step {currentStep} of {totalSteps}</span>
          </div>
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>Booking Details</span>
            <span>Payment Method</span>
            <span>Confirmation</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {currentStep === 1 && renderBookingDetails()}
            {currentStep === 2 && renderPaymentMethod()}
            {currentStep === 3 && renderConfirmation()}
          </div>

          {/* Property Summary Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Property Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ImageWithFallback
                  src={property.image}
                  alt={property.name}
                  className="w-full h-32 object-cover rounded-lg"
                />
                
                <div>
                  <h4 className="font-semibold">{property.name}</h4>
                  <p className="text-sm text-gray-600 flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    {property.location}
                  </p>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monthly Rent:</span>
                    <span>₹{property.monthlyRent.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Security Deposit:</span>
                    <span>₹{property.deposit.toLocaleString()}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold text-green-600">
                    <span>Token Payment:</span>
                    <span>₹{property.tokenAmount.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {property.amenities.map((amenity) => (
                    <Badge key={amenity} variant="outline" className="text-xs">
                      {amenity}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-8">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </Button>

          {currentStep < totalSteps ? (
            <Button
              onClick={nextStep}
              className="flex items-center space-x-2"
            >
              <span>Continue</span>
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Button>
          ) : (
            <Button
              onClick={handleBookingSubmit}
              className="flex items-center space-x-2 bg-green-600 hover:bg-green-700"
            >
              <CreditCard className="w-4 h-4" />
              <span>Complete Booking</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}