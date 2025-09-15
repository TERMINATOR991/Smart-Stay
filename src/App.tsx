import { useState } from "react";
import { Header } from "./components/Header";
import { HomePage } from "./components/student/HomePage";
import { SearchListings } from "./components/student/SearchListings";
import { PropertyDetails } from "./components/student/PropertyDetails";
import { RoommateMatch } from "./components/student/RoommateMatch";
import { BookingPayment } from "./components/student/BookingPayment";
import { GeminiRecommendations } from "./components/student/GeminiRecommendations";
import { PricingAlerts } from "./components/student/PricingAlerts";
import { AIChatbot } from "./components/shared/AIChatbot";
import { Dashboard } from "./components/owner/Dashboard";
import { ListingPricingManagement } from "./components/owner/ListingPricingManagement";
import { TenantDocumentManagement } from "./components/owner/TenantDocumentManagement";
import { AnalyticsInsights } from "./components/owner/AnalyticsInsights";
import { CommunicationLeadManagement } from "./components/owner/CommunicationLeadManagement";

type UserType = 'student' | 'owner' | null;
type ViewType = 'home' | 'search' | 'property-details' | 'roommate-match' | 'booking-payment' | 'gemini-recommendations' | 'pricing-alerts' | 'dashboard' | 'listing-pricing' | 'tenant-documents' | 'analytics-insights' | 'communication-leads';

export default function App() {
  const [userType, setUserType] = useState<UserType>(null);
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [showChatbot, setShowChatbot] = useState(false);

  const handleUserTypeChange = (type: UserType) => {
    setUserType(type);
    if (type === 'student') {
      setCurrentView('home');
    } else if (type === 'owner') {
      setCurrentView('dashboard');
    } else {
      setCurrentView('home');
    }
  };

  const handleViewChange = (view: ViewType) => {
    setCurrentView(view);
  };

  const renderCurrentView = () => {
    if (!userType) {
      return <HomePage onViewChange={handleViewChange} />;
    }

    switch (currentView) {
      case 'home':
        return <HomePage onViewChange={handleViewChange} />;
      case 'search':
        return <SearchListings onViewChange={handleViewChange} />;
      case 'property-details':
        return <PropertyDetails onViewChange={handleViewChange} />;
      case 'roommate-match':
        return <RoommateMatch onViewChange={handleViewChange} />;
      case 'booking-payment':
        return <BookingPayment onViewChange={handleViewChange} />;
      case 'gemini-recommendations':
        return <GeminiRecommendations onViewChange={handleViewChange} />;
      case 'pricing-alerts':
        return <PricingAlerts onViewChange={handleViewChange} />;
      case 'dashboard':
        return <Dashboard onViewChange={handleViewChange} />;
      case 'listing-pricing':
        return <ListingPricingManagement onViewChange={handleViewChange} />;
      case 'tenant-documents':
        return <TenantDocumentManagement onViewChange={handleViewChange} />;
      case 'analytics-insights':
        return <AnalyticsInsights onViewChange={handleViewChange} />;
      case 'communication-leads':
        return <CommunicationLeadManagement onViewChange={handleViewChange} />;
      default:
        return <HomePage onViewChange={handleViewChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        userType={userType}
        currentView={currentView}
        onViewChange={handleViewChange}
        onUserTypeChange={handleUserTypeChange}
        onToggleChatbot={() => setShowChatbot(!showChatbot)}
      />
      <main>
        {renderCurrentView()}
      </main>
      {showChatbot && (
        <AIChatbot 
          isOpen={showChatbot}
          onClose={() => setShowChatbot(false)}
          userType={userType}
        />
      )}
    </div>
  );
}