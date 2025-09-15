import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Checkbox } from "../ui/checkbox";
import { Slider } from "../ui/slider";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { 
  MapPin, 
  DollarSign, 
  Wifi, 
  Car, 
  Utensils, 
  Snowflake, 
  Bath, 
  Filter,
  Grid,
  Map,
  Star,
  Heart,
  CreditCard
} from "lucide-react";
import { getSupabaseClient } from "@/lib/supabaseClient";

interface SearchListingsProps {
  onViewChange: (view: string) => void;
}

export function SearchListings({ onViewChange }: SearchListingsProps) {
  const [showFilters, setShowFilters] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [budget, setBudget] = useState([10000]);
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fallbackProperties = [
    {
      id: 1,
      name: "Modern Student Apartment",
      location: "2.5 km from Stanford University",
      price: 15000,
      deposit: 30000,
      type: "PG",
      sharing: "Single",
      rating: 4.5,
      reviews: 23,
      image: "https://images.unsplash.com/photo-1721743169026-d18a016f8996?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcm9vbSUyMGFjY29tbW9kYXRpb258ZW58MXx8fHwxNzU3MDgyODI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      amenities: ["wifi", "food", "parking", "ac"],
      highlighted: true
    },
    {
      id: 2,
      name: "Cozy Shared Living Space",
      location: "1.8 km from MIT",
      price: 8000,
      deposit: 16000,
      type: "Shared Room",
      sharing: "Double",
      rating: 4.2,
      reviews: 15,
      image: "https://images.unsplash.com/photo-1603072388139-565853396b38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBiZWRyb29tfGVufDF8fHx8MTc1NzA2MDgwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      amenities: ["wifi", "food", "laundry"]
    },
    {
      id: 3,
      name: "Premium University Housing",
      location: "0.5 km from Harvard",
      price: 20000,
      deposit: 40000,
      type: "Flat",
      sharing: "Single",
      rating: 4.8,
      reviews: 41,
      image: "https://images.unsplash.com/photo-1627889587269-1ec7c8b29049?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudCUyMGhvdXNpbmd8ZW58MXx8fHwxNzU3MDgyODI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      amenities: ["wifi", "food", "parking", "ac", "bathroom"]
    },
    {
      id: 4,
      name: "Budget-Friendly Student Room",
      location: "3.2 km from UC Berkeley",
      price: 6000,
      deposit: 12000,
      type: "PG",
      sharing: "Triple",
      rating: 3.9,
      reviews: 8,
      image: "https://images.unsplash.com/photo-1581954548122-4dff8989c0f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGFyZWQlMjBsaXZpbmclMjBzcGFjZXxlbnwxfHx8fDE3NTcwODI4MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      amenities: ["wifi", "food"]
    }
  ];

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case "wifi": return <Wifi className="w-3 h-3" />;
      case "parking": return <Car className="w-3 h-3" />;
      case "food": return <Utensils className="w-3 h-3" />;
      case "ac": return <Snowflake className="w-3 h-3" />;
      case "bathroom": return <Bath className="w-3 h-3" />;
      default: return null;
    }
  };

  useEffect(() => {
    const supabase = getSupabaseClient();
    const run = async () => {
      try {
        if (!supabase) {
          setError('Supabase client not configured (missing env vars)');
          setProperties(fallbackProperties);
          return;
        }
        const { data, error: dbError } = await supabase
          .from('listings')
          .select('*')
          .limit(30);
        if (dbError) {
          setError(dbError.message);
          setProperties(fallbackProperties);
          return;
        }
        if (!data || data.length === 0) {
          setError('No listings found in database');
          setProperties(fallbackProperties);
          return;
        }
        // Map DB rows to UI shape minimally
        const mapped = data.map((row: any, idx: number) => ({
          id: row.id ?? idx + 1,
          name: row.name ?? row.title ?? 'Listing',
          location: row.location ?? row.area ?? 'Near campus',
          price: Number(row.price ?? 10000),
          deposit: Number(row.deposit ?? 2 * (Number(row.price ?? 10000))),
          type: row.type ?? 'PG',
          sharing: row.sharing ?? 'Single',
          rating: Number(row.rating ?? 4.5),
          reviews: Number(row.reviews ?? 0),
          image: row.image_url ?? row.image ?? fallbackProperties[0].image,
          amenities: Array.isArray(row.amenities) ? row.amenities : ['wifi', 'food'],
          highlighted: !!row.highlighted,
        }));
        setProperties(mapped);
      } catch (e: any) {
        setError(e?.message ?? 'Unknown error');
        setProperties(fallbackProperties);
      } finally {
        setLoading(false);
      }
    };
    run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4">
        {/* Search Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1">
              <Input 
                placeholder="Search by location, university, or property name..." 
                className="max-w-md"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant={showFilters ? "default" : "outline"}
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </Button>
              <div className="flex border rounded-lg p-1">
                <Button
                  variant={viewMode === 'grid' ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'map' ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode('map')}
                >
                  <Map className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="w-80 bg-white rounded-lg shadow-sm p-6 h-fit">
              <h3 className="text-lg font-semibold mb-6">Filters</h3>
              
              {/* Property Type */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Property Type</h4>
                <div className="space-y-2">
                  {["PG", "Flat", "Shared Room"].map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox id={type} />
                      <label htmlFor={type} className="text-sm">{type}</label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Budget Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Budget Range</h4>
                <div className="px-2">
                  <Slider
                    value={budget}
                    onValueChange={setBudget}
                    max={30000}
                    min={5000}
                    step={1000}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>₹5,000</span>
                    <span>₹{budget[0].toLocaleString()}</span>
                    <span>₹30,000+</span>
                  </div>
                </div>
              </div>

              {/* Sharing Options */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Sharing</h4>
                <div className="space-y-2">
                  {["Single", "Double", "Triple"].map((sharing) => (
                    <div key={sharing} className="flex items-center space-x-2">
                      <Checkbox id={sharing} />
                      <label htmlFor={sharing} className="text-sm">{sharing}</label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Amenities</h4>
                <div className="space-y-2">
                  {[
                    { id: "wifi", label: "Wi-Fi", icon: <Wifi className="w-4 h-4" /> },
                    { id: "food", label: "Food Included", icon: <Utensils className="w-4 h-4" /> },
                    { id: "parking", label: "Parking", icon: <Car className="w-4 h-4" /> },
                    { id: "ac", label: "AC", icon: <Snowflake className="w-4 h-4" /> },
                    { id: "bathroom", label: "Attached Bathroom", icon: <Bath className="w-4 h-4" /> }
                  ].map((amenity) => (
                    <div key={amenity.id} className="flex items-center space-x-2">
                      <Checkbox id={amenity.id} />
                      <label htmlFor={amenity.id} className="text-sm flex items-center space-x-2">
                        {amenity.icon}
                        <span>{amenity.label}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full">Apply Filters</Button>
            </div>
          )}

          {/* Results */}
          <div className="flex-1">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-gray-600">
                {loading ? 'Loading...' : `${properties.length} properties found`}
                {error ? ` • fallback due to: ${error}` : ''}
              </p>
              <select className="border rounded-lg px-3 py-2 text-sm">
                <option>Sort by: Relevance</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Distance</option>
                <option>Rating</option>
              </select>
            </div>

            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {properties.map((property) => (
                  <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="relative">
                      <ImageWithFallback
                        src={property.image}
                        alt={property.name}
                        className="w-full h-48 object-cover"
                      />
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-2 right-2 bg-white/90 hover:bg-white p-2"
                      >
                        <Heart className="w-4 h-4" />
                      </Button>
                      {property.highlighted && (
                        <Badge className="absolute top-2 left-2 bg-green-500 hover:bg-green-600">
                          Featured
                        </Badge>
                      )}
                      <Badge className="absolute bottom-2 right-2 bg-blue-500 hover:bg-blue-600">
                        {property.sharing}
                      </Badge>
                    </div>
                    
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg leading-tight">{property.name}</CardTitle>
                        <div className="flex items-center space-x-1 text-sm">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>{property.rating}</span>
                          <span className="text-gray-500">({property.reviews})</span>
                        </div>
                      </div>
                      <CardDescription className="flex items-center text-sm">
                        <MapPin className="w-3 h-3 mr-1" />
                        {property.location}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <div className="flex items-center">
                            <DollarSign className="w-4 h-4 mr-1 text-green-600" />
                            <span className="font-semibold">₹{property.price.toLocaleString()}</span>
                            <span className="text-gray-500 text-sm">/month</span>
                          </div>
                          <p className="text-xs text-gray-500">Deposit: ₹{property.deposit.toLocaleString()}</p>
                        </div>
                        <Badge variant="outline">{property.type}</Badge>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {property.amenities.slice(0, 4).map((amenity) => (
                          <Badge key={amenity} variant="secondary" className="text-xs flex items-center space-x-1">
                            {getAmenityIcon(amenity)}
                            <span className="capitalize">{amenity}</span>
                          </Badge>
                        ))}
                        {property.amenities.length > 4 && (
                          <Badge variant="secondary" className="text-xs">
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
                          className="flex-1 bg-green-600 hover:bg-green-700 flex items-center space-x-1" 
                          onClick={() => onViewChange('booking-payment')}
                        >
                          <CreditCard className="w-3 h-3" />
                          <span>Book</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg p-6 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Map className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-500">Map view coming soon...</p>
                  <p className="text-sm text-gray-400">Properties will be displayed on an interactive map</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}