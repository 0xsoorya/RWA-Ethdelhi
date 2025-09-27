import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Navigation } from "@/components/Navigation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Upload, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CreateAsset = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Asset Listed Successfully!",
      description: "Your asset has been tokenized and is now available on the marketplace.",
    });
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-4">
              <Link to="/marketplace" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Marketplace
              </Link>
            </Button>
            
            <h1 className="text-3xl font-bold mb-2">List Your Asset</h1>
            <p className="text-muted-foreground">
              Transform your real-world asset into tradeable tokens and unlock new investment opportunities.
            </p>
          </div>
          
          <Card className="bg-card/50 backdrop-blur border-border/50">
            <CardHeader>
              <CardTitle className="text-xl">Asset Details</CardTitle>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Asset Title *</Label>
                    <Input 
                      id="title" 
                      placeholder="e.g., Luxury Downtown Apartment"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">Description *</Label>
                    <Textarea 
                      id="description"
                      placeholder="Describe your asset in detail..."
                      className="min-h-[100px]"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="real-estate">Real Estate</SelectItem>
                          <SelectItem value="art">Art & Collectibles</SelectItem>
                          <SelectItem value="commodities">Commodities</SelectItem>
                          <SelectItem value="vehicles">Vehicles</SelectItem>
                          <SelectItem value="equipment">Equipment</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="location">Location *</Label>
                      <Input 
                        id="location" 
                        placeholder="City, Country"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                {/* Tokenization Details */}
                <div className="space-y-4 pt-6 border-t border-border/50">
                  <h3 className="text-lg font-semibold">Tokenization Details</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="total-value">Total Asset Value ($) *</Label>
                      <Input 
                        id="total-value" 
                        type="number" 
                        placeholder="1000000"
                        min="1"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="token-supply">Total Token Supply *</Label>
                      <Input 
                        id="token-supply" 
                        type="number" 
                        placeholder="10000"
                        min="1"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="min-investment">Minimum Investment ($) *</Label>
                    <Input 
                      id="min-investment" 
                      type="number" 
                      placeholder="100"
                      min="1"
                      required
                    />
                  </div>
                </div>
                
                {/* Upload Section */}
                <div className="space-y-4 pt-6 border-t border-border/50">
                  <h3 className="text-lg font-semibold">Asset Images</h3>
                  
                  <div className="border-2 border-dashed border-border/50 rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                    <Upload className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Drop your images here or click to browse
                    </p>
                    <p className="text-xs text-muted-foreground">
                      PNG, JPG up to 10MB each
                    </p>
                  </div>
                </div>
                
                {/* Submit Button */}
                <div className="pt-6">
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:opacity-90 transition-opacity shadow-premium"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating Asset..." : "List Asset for Tokenization"}
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    By listing your asset, you agree to our terms and conditions.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CreateAsset;