import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Checkbox } from "../ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Slider } from "../ui/slider";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { 
  ArrowLeft, 
  User, 
  MapPin, 
  Heart, 
  MessageSquare, 
  Star,
  Clock,
  Music,
  Book,
  Coffee,
  Gamepad2,
  Moon,
  Sun,
  Volume2,
  VolumeX,
  Users,
  Filter,
  Search
} from "lucide-react";

interface RoommateMatchProps {
  onViewChange: (view: string) => void;
}

export function RoommateMatch({ onViewChange }: RoommateMatchProps) {
  const [showFilters, setShowFilters] = useState(false);
  const [currentTab, setCurrentTab] = useState<'browse' | 'create-profile'>('browse');
  const [ageRange, setAgeRange] = useState([18, 25]);
  
  const [profileData, setProfileData] = useState({
    name: "",
    age: "",
    university: "",
    course: "",
    bio: "",
    interests: [] as string[],
    studyHabits: "",
    sleepSchedule: "",
    cleanliness: "",
    socialLevel: "",
    budget: ""
  });

  const potentialRoommates = [
    {
      id: 1,
      name: "Priya Sharma",
      age: 21,
      university: "Stanford University",
      course: "Computer Science",
      bio: "Final year CS student looking for a study-focused roommate. Love coding sessions with good coffee!",
      interests: ["Reading", "Music", "Coding", "Cooking"],
      studyHabits: "Early Bird",
      sleepSchedule: "Early to bed",
      cleanliness: "Very Clean",
      socialLevel: "Moderately Social",
      budget: "₹12,000 - ₹18,000",
      matchPercentage: 92,
      avatar: "https://images.unsplash.com/photo-1650525217641-891e936d3486?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudCUyMHByb2ZpbGVzfGVufDF8fHx8MTc1NzA4NDgyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      verified: true
    },
    {
      id: 2,
      name: "Rahul Mehta",
      age: 22,
      university: "MIT",
      course: "Mechanical Engineering",
      bio: "Engineering student who enjoys quiet study sessions and weekend sports. Looking for a like-minded roommate.",
      interests: ["Sports", "Reading", "Movies", "Gaming"],
      studyHabits: "Night Owl",
      sleepSchedule: "Late to bed",
      cleanliness: "Clean",
      socialLevel: "Very Social",
      budget: "₹10,000 - ₹15,000",
      matchPercentage: 87,
      avatar: "https://images.unsplash.com/photo-1629360021730-3d258452c425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzU3MDg0ODI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      verified: true
    },
    {
      id: 3,
      name: "Anjali Patel",
      age: 20,
      university: "Harvard University",
      course: "Psychology",
      bio: "Psychology major who loves deep conversations and maintaining a peaceful living environment.",
      interests: ["Reading", "Yoga", "Art", "Cooking"],
      studyHabits: "Flexible",
      sleepSchedule: "Regular schedule",
      cleanliness: "Very Clean",
      socialLevel: "Quiet & Peaceful",
      budget: "₹15,000 - ₹20,000",
      matchPercentage: 94,
      avatar: "",
      verified: true
    },
    {
      id: 4,
      name: "Arjun Singh",
      age: 23,
      university: "UC Berkeley",
      course: "Business Administration",
      bio: "MBA student with a busy schedule. Looking for a responsible roommate who respects personal space.",
      interests: ["Business", "Travel", "Fitness", "Music"],
      studyHabits: "Early Bird",
      sleepSchedule: "Early to bed",
      cleanliness: "Clean",
      socialLevel: "Moderately Social",
      budget: "₹18,000 - ₹25,000",
      matchPercentage: 89,
      avatar: "",
      verified: false
    }
  ];

  const interestOptions = [
    { id: "reading", label: "Reading", icon: <Book className="w-4 h-4" /> },
    { id: "music", label: "Music", icon: <Music className="w-4 h-4" /> },
    { id: "gaming", label: "Gaming", icon: <Gamepad2 className="w-4 h-4" /> },
    { id: "cooking", label: "Cooking", icon: <Coffee className="w-4 h-4" /> },
    { id: "sports", label: "Sports", icon: <Users className="w-4 h-4" /> },
    { id: "art", label: "Art", icon: <Heart className="w-4 h-4" /> },
    { id: "travel", label: "Travel", icon: <MapPin className="w-4 h-4" /> },
    { id: "fitness", label: "Fitness", icon: <Users className="w-4 h-4" /> }
  ];

  const handleInterestChange = (interestId: string, checked: boolean) => {
    setProfileData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, interestId]
        : prev.interests.filter(id => id !== interestId)
    }));
  };

  const getMatchColor = (percentage: number) => {
    if (percentage >= 90) return "text-green-600 bg-green-100";
    if (percentage >= 80) return "text-blue-600 bg-blue-100";
    if (percentage >= 70) return "text-orange-600 bg-orange-100";
    return "text-gray-600 bg-gray-100";
  };

  const renderCreateProfile = () => (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Create Your Roommate Profile</CardTitle>
          <CardDescription>
            Help us find the perfect roommate match by sharing your preferences and lifestyle
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Full Name</label>
              <Input
                placeholder="Enter your full name"
                value={profileData.name}
                onChange={(e) => setProfileData(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Age</label>
              <Input
                type="number"
                placeholder="Age"
                value={profileData.age}
                onChange={(e) => setProfileData(prev => ({ ...prev, age: e.target.value }))}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">University</label>
              <Select
                value={profileData.university}
                onValueChange={(value) => setProfileData(prev => ({ ...prev, university: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select university" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="stanford">Stanford University</SelectItem>
                  <SelectItem value="mit">MIT</SelectItem>
                  <SelectItem value="harvard">Harvard University</SelectItem>
                  <SelectItem value="berkeley">UC Berkeley</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Course/Major</label>
              <Input
                placeholder="e.g., Computer Science"
                value={profileData.course}
                onChange={(e) => setProfileData(prev => ({ ...prev, course: e.target.value }))}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">About You</label>
            <Textarea
              placeholder="Tell potential roommates about yourself, your hobbies, and what you're looking for in a roommate..."
              value={profileData.bio}
              onChange={(e) => setProfileData(prev => ({ ...prev, bio: e.target.value }))}
              rows={4}
            />
          </div>

          <div className="space-y-4">
            <label className="text-sm font-medium">Interests & Hobbies</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {interestOptions.map((interest) => (
                <div key={interest.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={interest.id}
                    checked={profileData.interests.includes(interest.id)}
                    onCheckedChange={(checked) => 
                      handleInterestChange(interest.id, checked as boolean)
                    }
                  />
                  <label 
                    htmlFor={interest.id} 
                    className="text-sm flex items-center space-x-2 cursor-pointer"
                  >
                    {interest.icon}
                    <span>{interest.label}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Study Habits</label>
              <Select
                value={profileData.studyHabits}
                onValueChange={(value) => setProfileData(prev => ({ ...prev, studyHabits: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select preference" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="early-bird">Early Bird (Morning)</SelectItem>
                  <SelectItem value="night-owl">Night Owl (Evening)</SelectItem>
                  <SelectItem value="flexible">Flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Sleep Schedule</label>
              <Select
                value={profileData.sleepSchedule}
                onValueChange={(value) => setProfileData(prev => ({ ...prev, sleepSchedule: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select preference" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="early">Early to bed, early to rise</SelectItem>
                  <SelectItem value="late">Late to bed, late to rise</SelectItem>
                  <SelectItem value="regular">Regular schedule</SelectItem>
                  <SelectItem value="irregular">Irregular schedule</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Cleanliness Level</label>
              <Select
                value={profileData.cleanliness}
                onValueChange={(value) => setProfileData(prev => ({ ...prev, cleanliness: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select preference" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="very-clean">Very Clean & Organized</SelectItem>
                  <SelectItem value="clean">Clean</SelectItem>
                  <SelectItem value="average">Average</SelectItem>
                  <SelectItem value="relaxed">Relaxed about cleaning</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Social Level</label>
              <Select
                value={profileData.socialLevel}
                onValueChange={(value) => setProfileData(prev => ({ ...prev, socialLevel: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select preference" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="very-social">Very Social & Outgoing</SelectItem>
                  <SelectItem value="moderate">Moderately Social</SelectItem>
                  <SelectItem value="quiet">Quiet & Peaceful</SelectItem>
                  <SelectItem value="private">Prefer Privacy</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Budget Range</label>
            <Input
              placeholder="e.g., ₹10,000 - ₹15,000"
              value={profileData.budget}
              onChange={(e) => setProfileData(prev => ({ ...prev, budget: e.target.value }))}
            />
          </div>

          <Button className="w-full">Save Profile & Start Matching</Button>
        </CardContent>
      </Card>
    </div>
  );

  const renderBrowseRoommates = () => (
    <div>
      {/* Search and Filters */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="Search by university, course, or interests..." 
                className="pl-10"
              />
            </div>
          </div>
          <Button
            variant={showFilters ? "default" : "outline"}
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2"
          >
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </Button>
        </div>

        {showFilters && (
          <Card className="mt-4">
            <CardContent className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">University</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Any university" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Universities</SelectItem>
                      <SelectItem value="stanford">Stanford University</SelectItem>
                      <SelectItem value="mit">MIT</SelectItem>
                      <SelectItem value="harvard">Harvard University</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Age Range</label>
                  <div className="px-2">
                    <Slider
                      value={ageRange}
                      onValueChange={setAgeRange}
                      max={30}
                      min={18}
                      step={1}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>{ageRange[0]} years</span>
                      <span>{ageRange[1]} years</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Study Habits</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Any preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any</SelectItem>
                      <SelectItem value="early-bird">Early Bird</SelectItem>
                      <SelectItem value="night-owl">Night Owl</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Social Level</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Any preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any</SelectItem>
                      <SelectItem value="very-social">Very Social</SelectItem>
                      <SelectItem value="moderate">Moderate</SelectItem>
                      <SelectItem value="quiet">Quiet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Roommate Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {potentialRoommates.map((roommate) => (
          <Card key={roommate.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-12 h-12">
                    {roommate.avatar ? (
                      <AvatarImage src={roommate.avatar} alt={roommate.name} />
                    ) : (
                      <AvatarFallback>
                        {roommate.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg flex items-center space-x-2">
                      <span>{roommate.name}</span>
                      {roommate.verified && (
                        <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                          Verified
                        </Badge>
                      )}
                    </CardTitle>
                    <CardDescription>
                      {roommate.age} years • {roommate.course}
                    </CardDescription>
                  </div>
                </div>
                <Badge className={`${getMatchColor(roommate.matchPercentage)} text-xs`}>
                  {roommate.matchPercentage}% match
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="w-3 h-3 mr-1" />
                {roommate.university}
              </div>
              
              <p className="text-sm text-gray-700 line-clamp-3">{roommate.bio}</p>
              
              <div className="space-y-2">
                <div className="flex flex-wrap gap-1">
                  {roommate.interests.slice(0, 3).map((interest) => (
                    <Badge key={interest} variant="outline" className="text-xs">
                      {interest}
                    </Badge>
                  ))}
                  {roommate.interests.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{roommate.interests.length - 3} more
                    </Badge>
                  )}
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {roommate.studyHabits}
                  </div>
                  <div className="flex items-center">
                    <Moon className="w-3 h-3 mr-1" />
                    {roommate.sleepSchedule}
                  </div>
                </div>
                
                <div className="text-xs text-gray-600">
                  <strong>Budget:</strong> {roommate.budget}
                </div>
              </div>
              
              <div className="flex space-x-2 pt-2">
                <Button size="sm" className="flex-1 flex items-center space-x-1">
                  <MessageSquare className="w-3 h-3" />
                  <span>Connect</span>
                </Button>
                <Button variant="outline" size="sm" className="flex items-center space-x-1">
                  <Heart className="w-3 h-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

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
                <Users className="w-8 h-8 text-blue-600" />
                <span>Find Your Perfect Roommate</span>
              </h1>
              <p className="text-gray-600 mt-1">Connect with like-minded students based on your lifestyle and preferences</p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-8 max-w-md">
          <Button
            variant={currentTab === 'browse' ? 'default' : 'ghost'}
            onClick={() => setCurrentTab('browse')}
            className="flex-1"
          >
            Browse Roommates
          </Button>
          <Button
            variant={currentTab === 'create-profile' ? 'default' : 'ghost'}
            onClick={() => setCurrentTab('create-profile')}
            className="flex-1"
          >
            Create Profile
          </Button>
        </div>

        {/* Content */}
        {currentTab === 'browse' ? renderBrowseRoommates() : renderCreateProfile()}

        {/* Tips Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span>Roommate Matching Tips</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium mb-2">Be Honest About Your Lifestyle</h4>
                <p className="text-sm text-gray-600">Share your real preferences to find genuinely compatible roommates</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium mb-2">Meet Before Deciding</h4>
                <p className="text-sm text-gray-600">Always have a video call or in-person meeting before making commitments</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-medium mb-2">Discuss Expectations</h4>
                <p className="text-sm text-gray-600">Talk about sharing responsibilities, guests, and house rules upfront</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}