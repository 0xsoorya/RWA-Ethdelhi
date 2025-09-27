import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-tokenization.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent leading-tight">
              Tokenize Real World Assets
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Transform your physical assets into tradeable tokens. Create new investment opportunities 
              and unlock liquidity in previously illiquid markets.
            </p>
            
            <div className="flex items-center justify-center gap-4 pt-6">
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-premium">
                <Link to="/create" className="flex items-center gap-2">
                  Start Tokenizing
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <Link to="/marketplace">
                  Browse Marketplace
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 border-t border-border/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose TokenAssets?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform provides everything you need to tokenize and trade real-world assets securely.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4 p-6 rounded-lg bg-card/30 backdrop-blur border border-border/50 hover:shadow-card transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg">Secure & Trusted</h3>
              <p className="text-muted-foreground text-sm">
                Built with enterprise-grade security to protect your assets and investments.
              </p>
            </div>
            
            <div className="text-center space-y-4 p-6 rounded-lg bg-card/30 backdrop-blur border border-border/50 hover:shadow-card transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg">Lightning Fast</h3>
              <p className="text-muted-foreground text-sm">
                Quick tokenization process and instant trading capabilities.
              </p>
            </div>
            
            <div className="text-center space-y-4 p-6 rounded-lg bg-card/30 backdrop-blur border border-border/50 hover:shadow-card transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg">Global Community</h3>
              <p className="text-muted-foreground text-sm">
                Connect with investors and asset owners from around the world.
              </p>
            </div>
            
            <div className="text-center space-y-4 p-6 rounded-lg bg-card/30 backdrop-blur border border-border/50 hover:shadow-card transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg">Transparent Pricing</h3>
              <p className="text-muted-foreground text-sm">
                Real-time market pricing with full transparency and fair valuations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 border-t border-border/40">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of investors and asset owners already using TokenAssets 
              to unlock new opportunities.
            </p>
            
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-premium">
              <Link to="/create" className="flex items-center gap-2">
                List Your First Asset
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;