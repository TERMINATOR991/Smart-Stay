import { useState, useRef, useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { ScrollArea } from "../ui/scroll-area";
import { 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  Clock,
  MapPin,
  DollarSign,
  Filter,
  Heart,
  Search,
  Phone,
  MessageSquare,
  Calendar,
  Home,
  Wifi,
  Utensils,
  Car,
  Shield,
  Users,
  BookOpen,
  Lightbulb,
  HelpCircle
} from "lucide-react";

interface AIChatbotProps {
  isOpen: boolean;
  onClose: () => void;
  userType: 'student' | 'owner' | null;
}

interface Message {
  id: string;
  sender: 'user' | 'ai';
  content: string;
  timestamp: Date;
  suggestions?: string[];
  quickActions?: QuickAction[];
}

interface QuickAction {
  label: string;
  icon: React.ReactNode;
  action: string;
}

export function AIChatbot({ isOpen, onClose, userType }: AIChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      content: `Hello! I'm your AI assistant for SmartStay. I can help you with finding properties, understanding pricing, setting up alerts, and much more. What would you like to know?`,
      timestamp: new Date(),
      suggestions: [
        "How do I filter properties by amenities?",
        "What's the average rent near my university?",
        "How does the roommate matching work?",
        "Set up a price alert for me"
      ]
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const quickActions: QuickAction[] = [
    { label: "Find Properties", icon: <Search className="w-4 h-4" />, action: "search_properties" },
    { label: "Price Alerts", icon: <DollarSign className="w-4 h-4" />, action: "price_alerts" },
    { label: "Roommate Match", icon: <Users className="w-4 h-4" />, action: "roommate_match" },
    { label: "Book Property", icon: <Calendar className="w-4 h-4" />, action: "book_property" }
  ];

  const predefinedResponses: { [key: string]: string } = {
    "filter": "To filter properties by amenities: 1) Go to the Search page, 2) Click on the 'Filters' button, 3) Select your preferred amenities like WiFi, Food, AC, Parking, etc. 4) Apply filters to see matching properties. You can also use the search bar to type specific requirements!",
    "rent": "The average rent varies by location: Near Stanford University: ₹15,000-₹22,000/month, Near MIT: ₹12,000-₹18,000/month, Near Harvard: ₹18,000-₹25,000/month. These prices typically include basic amenities. Would you like me to show you properties in a specific area?",
    "roommate": "Our AI-powered roommate matching works by: 1) Creating a detailed profile with your preferences, 2) Analyzing your study habits, lifestyle, and interests, 3) Matching you with compatible students using our algorithm, 4) Showing compatibility scores for each potential roommate. Want me to help you create your roommate profile?",
    "price alert": "I can help you set up price alerts! Here's how: 1) Save properties you're interested in, 2) Go to the 'Alerts' section, 3) Set your target price, 4) Choose notification method (email/push), 5) Get notified when prices drop. Would you like me to create an alert for a specific property?",
    "booking": "To book a property: 1) View property details, 2) Click 'Book Now', 3) Fill in your information, 4) Choose payment method, 5) Pay token amount to reserve. The remaining amount is due on move-in day. Need help with a specific booking?",
    "amenities": "Common amenities include: WiFi (high-speed internet), Food (meals included), AC (air conditioning), Parking (vehicle space), Laundry (washing facilities), Security (24/7 safety), Study Room (quiet study space), Gym (fitness center). Which amenities are most important to you?",
    "payment": "We accept multiple payment methods: Credit/Debit Cards, UPI payments, Net Banking, and Digital wallets. All payments are secure and encrypted. You typically pay a token amount to reserve, then the remaining on move-in day.",
    "safety": "Safety features we track: 24/7 security, CCTV surveillance, Safe neighborhood ratings, Emergency contacts, Verified landlords, Student reviews. All properties are verified for basic safety standards.",
    "location": "Popular student areas: Green Park (safe, metro connected), University District (walking distance to campus), Student Area (affordable options), IT District (modern facilities). Which area interests you most?",
    "help": "I can assist with: 🏠 Finding properties, 💰 Price tracking & alerts, 👥 Roommate matching, 📅 Booking assistance, 📍 Location advice, 🛡️ Safety information, 💳 Payment guidance, 📱 Using app features. What specific help do you need?"
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes("filter") || message.includes("amenities") || message.includes("search")) {
      return predefinedResponses.filter;
    } else if (message.includes("rent") || message.includes("price") || message.includes("cost") || message.includes("average")) {
      return predefinedResponses.rent;
    } else if (message.includes("roommate") || message.includes("match") || message.includes("buddy")) {
      return predefinedResponses.roommate;
    } else if (message.includes("alert") || message.includes("notification") || message.includes("track")) {
      return predefinedResponses["price alert"];
    } else if (message.includes("book") || message.includes("reserve") || message.includes("payment")) {
      return predefinedResponses.booking;
    } else if (message.includes("safe") || message.includes("security")) {
      return predefinedResponses.safety;
    } else if (message.includes("location") || message.includes("area") || message.includes("where")) {
      return predefinedResponses.location;
    } else if (message.includes("help") || message.includes("what can you do") || message.includes("assist")) {
      return predefinedResponses.help;
    } else if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return "Hello! Great to see you again. I'm here to help you find the perfect student accommodation. What can I assist you with today?";
    } else if (message.includes("thank")) {
      return "You're welcome! I'm always here to help. Is there anything else you'd like to know about finding or booking student accommodation?";
    } else if (message.includes("bye") || message.includes("goodbye")) {
      return "Goodbye! Feel free to reach out anytime you need help with your accommodation search. Have a great day!";
    } else {
      return "I understand you're asking about student accommodation. I can help with property searches, pricing, roommate matching, booking assistance, and much more. Could you please be more specific about what you'd like to know?";
    }
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI typing delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        content: getAIResponse(inputMessage),
        timestamp: new Date(),
        suggestions: [
          "Tell me more about this",
          "Show me examples",
          "What else should I know?",
          "Help with something else"
        ]
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputMessage(suggestion);
    inputRef.current?.focus();
  };

  const handleQuickAction = (action: string) => {
    const actionMessages: { [key: string]: string } = {
      "search_properties": "I'd like to search for properties",
      "price_alerts": "How do I set up price alerts?",
      "roommate_match": "Tell me about roommate matching",
      "book_property": "How do I book a property?"
    };

    if (actionMessages[action]) {
      setInputMessage(actionMessages[action]);
      inputRef.current?.focus();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 w-96 h-[600px] bg-white rounded-lg shadow-2xl border z-50 flex flex-col">
      {/* Header */}
      <CardHeader className="pb-3 border-b">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-lg">SmartStay AI</div>
              <div className="text-xs text-gray-500 font-normal">Always here to help</div>
            </div>
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <Avatar className="w-8 h-8 flex-shrink-0">
                  <AvatarFallback className={message.sender === 'user' ? 'bg-blue-100' : 'bg-purple-100'}>
                    {message.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </AvatarFallback>
                </Avatar>
                <div className={`p-3 rounded-lg ${message.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>
                  <div className="text-sm">{message.content}</div>
                  <div className={`text-xs mt-1 ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Suggestions */}
          {messages.length > 0 && messages[messages.length - 1].sender === 'ai' && messages[messages.length - 1].suggestions && (
            <div className="space-y-2">
              <div className="text-xs text-gray-500 px-2">Suggested questions:</div>
              <div className="flex flex-wrap gap-2">
                {messages[messages.length - 1].suggestions?.map((suggestion, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="text-xs h-7"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-2">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-purple-100">
                    <Bot className="w-4 h-4" />
                  </AvatarFallback>
                </Avatar>
                <div className="bg-gray-100 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      {/* Quick Actions */}
      {messages.length === 1 && (
        <div className="p-3 border-t bg-gray-50">
          <div className="text-xs text-gray-500 mb-2">Quick actions:</div>
          <div className="grid grid-cols-2 gap-2">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="text-xs h-8 flex items-center space-x-1"
                onClick={() => handleQuickAction(action.action)}
              >
                {action.icon}
                <span>{action.label}</span>
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t">
        <div className="flex space-x-2">
          <Input
            ref={inputRef}
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything about student accommodation..."
            className="flex-1"
          />
          <Button 
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isTyping}
            size="sm"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
        <div className="text-xs text-gray-500 mt-2 text-center">
          Powered by AI • Available 24/7
        </div>
      </div>
    </div>
  );
}