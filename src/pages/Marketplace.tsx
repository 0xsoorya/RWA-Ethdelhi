import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { AssetCard, Asset } from "@/components/AssetCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Search, Filter, Plus, QrCode, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

// Mock data
const mockAssets: Asset[] = [
  {
    id: "1",
    title: "Luxury Manhattan Penthouse",
    description: "Premium penthouse with panoramic city views, featuring 4 bedrooms, 3 bathrooms, and a private rooftop terrace.",
    price: 1000,
    category: "Real Estate",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tokenSupply: 10000,
    tokensSold: 7500,
  },
  {
    id: "2", 
    title: "Vintage Ferrari 250 GT",
    description: "Rare 1962 Ferrari 250 GT in pristine condition. Fully restored with original engine and documented provenance.",
    price: 500,
    category: "Vehicles",
    location: "Monaco",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tokenSupply: 5000,
    tokensSold: 3200,
  },
  {
    id: "3",
    title: "Contemporary Art Collection",
    description: "Curated collection of contemporary paintings by emerging artists. Includes works by 5 different artists.",
    price: 250,
    category: "Art & Collectibles",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tokenSupply: 8000,
    tokensSold: 1200,
  },
  {
    id: "4",
    title: "Gold Mining Operation",
    description: "Operational gold mine in Nevada with proven reserves. Includes all equipment and 10-year extraction rights.",
    price: 2000,
    category: "Commodities",
    location: "Nevada, USA",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tokenSupply: 15000,
    tokensSold: 12000,
  },
  {
    id: "5",
    title: "Commercial Office Building",
    description: "Modern 15-story office building in downtown district. Fully leased with long-term tenants and stable income.",
    price: 750,
    category: "Real Estate",
    location: "Toronto, Canada",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tokenSupply: 12000,
    tokensSold: 8500,
  },
  {
    id: "6",
    title: "Rare Wine Collection",
    description: "Exclusive collection of vintage wines from Bordeaux region. Includes bottles from 1982, 1990, and 2005.",
    price: 150,
    category: "Art & Collectibles", 
    location: "Bordeaux, France",
    image: "https://images.unsplash.com/photo-1506377872008-6645d6e08c81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tokenSupply: 3000,
    tokensSold: 800,
  },
];

const Marketplace = () => {
  const { toast } = useToast();
  const [assets, setAssets] = useState(mockAssets);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  
  const categories = ["all", "Real Estate", "Vehicles", "Art & Collectibles", "Commodities"];
  const priceRanges = [
    { value: "all", label: "All Prices" },
    { value: "0-500", label: "$0 - $500" },
    { value: "500-1000", label: "$500 - $1,000" },
    { value: "1000-2000", label: "$1,000 - $2,000" },
    { value: "2000+", label: "$2,000+" }
  ];
  
  const handleBuy = (assetId: string) => {
    const asset = assets.find(a => a.id === assetId);
    setSelectedAsset(asset || null);
    setIsVerified(false);
    setShowVerificationModal(true);
  };

  const handleVerify = () => {
    // Simulate verification after 2 seconds
    setTimeout(() => {
      setIsVerified(true);
      toast({
        title: "Identity Verified!",
        description: "You can now proceed with the token purchase.",
      });
    }, 2000);
  };

  const handlePurchase = () => {
    toast({
      title: "Purchase Successful!",
      description: `You have successfully purchased tokens for ${selectedAsset?.title}`,
    });
    setShowVerificationModal(false);
    setSelectedAsset(null);
    setIsVerified(false);
  };
  
  const filteredAssets = assets.filter(asset => {
    const matchesSearch = asset.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         asset.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || asset.category === selectedCategory;
    
    let matchesPrice = true;
    if (priceRange !== "all") {
      const [min, max] = priceRange.split("-").map(p => p.replace("+", ""));
      if (max) {
        matchesPrice = asset.price >= parseInt(min) && asset.price <= parseInt(max);
      } else {
        matchesPrice = asset.price >= parseInt(min);
      }
    }
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Asset Marketplace</h1>
            <p className="text-muted-foreground">
              Discover and invest in tokenized real-world assets
            </p>
          </div>
          
          <Button asChild className="bg-gradient-primary hover:opacity-90 transition-opacity">
            <Link to="/create" className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              List Asset
            </Link>
          </Button>
        </div>
        
        {/* Filters */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search assets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9"
            />
          </div>
          
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={priceRange} onValueChange={setPriceRange}>
            <SelectTrigger>
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent>
              {priceRanges.map(range => (
                <SelectItem key={range.value} value={range.value}>
                  {range.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            More Filters
          </Button>
        </div>
        
        {/* Stats */}
        <div className="mb-8 flex flex-wrap gap-4">
          <Badge variant="secondary" className="px-3 py-1">
            {filteredAssets.length} Assets Available
          </Badge>
          <Badge variant="secondary" className="px-3 py-1">
            ${filteredAssets.reduce((sum, asset) => sum + (asset.price * asset.tokenSupply), 0).toLocaleString()} Total Value
          </Badge>
        </div>
        
        {/* Assets Grid */}
        {filteredAssets.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAssets.map(asset => (
              <AssetCard 
                key={asset.id} 
                asset={asset} 
                onBuy={handleBuy}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No assets found matching your criteria.</p>
            <Button asChild className="mt-4 bg-gradient-primary hover:opacity-90 transition-opacity">
              <Link to="/create">List the First Asset</Link>
            </Button>
          </div>
        )}
      </div>

      {/* Verification Modal */}
      <Dialog open={showVerificationModal} onOpenChange={setShowVerificationModal}>
        <DialogContent className="max-w-md mx-auto bg-white">
          <DialogHeader className="text-center">
            
            <p className="text-gray-600 mb-6 items-center">
              Scan QR code to verify your region and age.
            </p>
          </DialogHeader>
          
          <div className="flex flex-col items-center space-y-6">
            {/* QR Code Placeholder */}
            <div className="w-64 h-64 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
              {isVerified ? (
                <div className="text-center">
                  <Check className="w-16 h-16 text-green-500 mx-auto mb-2" />
                  <p className="text-green-600 font-medium">Verified!</p>
                </div>
              ) : (
                <div className="text-center">
                  <QrCode className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500 text-sm">QR Code Placeholder</p>
                </div>
              )}
            </div>
            
            {/* Action Buttons */}
            <div className="w-full space-y-3">
              {!isVerified ? (
                <>
                  <Button 
                    className="w-full bg-gray-800 hover:bg-gray-700 text-white"
                    onClick={handleVerify}
                  >
                    Copy Universal Link
                  </Button>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={handleVerify}
                  >
                    Open Self App
                  </Button>
                </>
              ) : null}
              
              {/* User Address */}
              <div className="text-center">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  USER ADDRESS
                </p>
                <p className="text-xs text-gray-600 font-mono bg-gray-50 p-2 rounded border">
                  0x00000000000000000000000000000000000000000000000
                </p>
              </div>
              
              {/* Buy Now Button */}
              <Button
                className={`w-full ${
                  isVerified 
                    ? 'bg-green-600 hover:bg-green-700 text-white' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                disabled={!isVerified}
                onClick={handlePurchase}
              >
                {isVerified ? 'Buy Now' : 'Verification Required'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Marketplace;