import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Home, Search, User, MessageSquare, PlusCircle, Menu, Users, Sparkles, Bell, Bot, FileText, BarChart3, Settings, UserCheck, DollarSign, Target } from "lucide-react";

interface HeaderProps {
  userType: 'student' | 'owner' | null;
  currentView: string;
  onViewChange: (view: string) => void;
  onUserTypeChange: (type: 'student' | 'owner' | null) => void;
  onToggleChatbot: () => void;
}

export function Header({ userType, currentView, onViewChange, onUserTypeChange, onToggleChatbot }: HeaderProps) {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Home className="w-8 h-8 text-primary" />
              <h1 className="text-xl font-semibold">SmartStay</h1>
            </div>
            
            {userType && (
              <nav className="hidden md:flex space-x-6">
                {userType === 'student' ? (
                  <>
                    <Button 
                      variant={currentView === 'home' ? 'default' : 'ghost'}
                      onClick={() => onViewChange('home')}
                      className="flex items-center space-x-2"
                    >
                      <Home className="w-4 h-4" />
                      <span>Home</span>
                    </Button>
                    <Button 
                      variant={currentView === 'search' ? 'default' : 'ghost'}
                      onClick={() => onViewChange('search')}
                      className="flex items-center space-x-2"
                    >
                      <Search className="w-4 h-4" />
                      <span>Search</span>
                    </Button>
                    <Button 
                      variant={currentView === 'roommate-match' ? 'default' : 'ghost'}
                      onClick={() => onViewChange('roommate-match')}
                      className="flex items-center space-x-2"
                    >
                      <Users className="w-4 h-4" />
                      <span>Find Roommate</span>
                    </Button>
                    <Button 
                      variant={currentView === 'gemini-recommendations' ? 'default' : 'ghost'}
                      onClick={() => onViewChange('gemini-recommendations')}
                      className="flex items-center space-x-2"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>For You</span>
                    </Button>
                    <Button 
                      variant={currentView === 'pricing-alerts' ? 'default' : 'ghost'}
                      onClick={() => onViewChange('pricing-alerts')}
                      className="flex items-center space-x-2"
                    >
                      <Bell className="w-4 h-4" />
                      <span>Alerts</span>
                    </Button>
                  </>
                ) : (
                  <>
                    <Button 
                      variant={currentView === 'dashboard' ? 'default' : 'ghost'}
                      onClick={() => onViewChange('dashboard')}
                      className="flex items-center space-x-2"
                    >
                      <Home className="w-4 h-4" />
                      <span>Dashboard</span>
                    </Button>
                    <Button 
                      variant={currentView === 'listing-pricing' ? 'default' : 'ghost'}
                      onClick={() => onViewChange('listing-pricing')}
                      className="flex items-center space-x-2"
                    >
                      <PlusCircle className="w-4 h-4" />
                      <span>Listings & Pricing</span>
                    </Button>
                    <Button 
                      variant={currentView === 'tenant-documents' ? 'default' : 'ghost'}
                      onClick={() => onViewChange('tenant-documents')}
                      className="flex items-center space-x-2"
                    >
                      <UserCheck className="w-4 h-4" />
                      <span>Tenants & Docs</span>
                    </Button>
                    <Button 
                      variant={currentView === 'analytics-insights' ? 'default' : 'ghost'}
                      onClick={() => onViewChange('analytics-insights')}
                      className="flex items-center space-x-2"
                    >
                      <BarChart3 className="w-4 h-4" />
                      <span>Analytics</span>
                    </Button>
                    <Button 
                      variant={currentView === 'communication-leads' ? 'default' : 'ghost'}
                      onClick={() => onViewChange('communication-leads')}
                      className="flex items-center space-x-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Communication & Leads</span>
                    </Button>
                  </>
                )}
              </nav>
            )}
          </div>

          <div className="flex items-center space-x-4">
            {userType && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onToggleChatbot}
                className="flex items-center space-x-2"
              >
                <Bot className="w-4 h-4" />
                <span className="hidden sm:inline">AI Help</span>
              </Button>
            )}
            {!userType ? (
              <div className="flex space-x-2">
                <Button 
                  variant="outline"
                  onClick={() => onUserTypeChange('student')}
                >
                  I'm a Student
                </Button>
                <Button 
                  onClick={() => onUserTypeChange('owner')}
                >
                  I'm an Owner
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Badge variant="secondary" className="capitalize">
                  {userType}
                </Badge>
                <Avatar>
                  <AvatarFallback>
                    <User className="w-4 h-4" />
                  </AvatarFallback>
                </Avatar>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => onUserTypeChange(null)}
                >
                  Logout
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}