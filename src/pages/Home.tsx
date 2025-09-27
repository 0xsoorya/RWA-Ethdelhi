import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, Users, TrendingUp, Wallet, Globe, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-tokenization.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-hero opacity-20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(147,51,234,0.3),transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3),transparent_50%)] animate-pulse" style={{animationDelay: '1s'}} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_90%,rgba(168,85,247,0.2),transparent_50%)] animate-pulse" style={{animationDelay: '2s'}} />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-bounce" style={{animationDelay: '0.5s'}} />
        <div className="absolute top-40 right-20 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-bounce" style={{animationDelay: '1.5s'}} />
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary/30 rounded-full blur-xl animate-bounce" style={{animationDelay: '2.5s'}} />
        
        <div className="relative container mx-auto px-4 z-10">
          <div className="text-center space-y-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 text-sm text-primary animate-fade-in">
                <Sparkles className="h-4 w-4" />
                Web3 Powered Marketplace
              </div>
              
              <h1 className="text-7xl md:text-8xl font-black bg-gradient-hero bg-clip-text text-transparent leading-tight tracking-tight">
                SELL
                <span className="block text-6xl md:text-7xl font-light">EVERYTHING</span>
                <span className="block text-5xl md:text-6xl bg-gradient-primary bg-clip-text">WEB3</span>
              </h1>
              
              <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                The future of peer-to-peer selling. Secure, decentralized, and powered by blockchain technology. 
                <span className="text-primary font-medium">Your marketplace, your rules.</span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-premium text-lg px-12 py-6 rounded-xl group">
                <Link to="/create" className="flex items-center gap-3">
                  <Wallet className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Start Selling
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" asChild className="text-lg px-12 py-6 rounded-xl border-2 hover:bg-primary/5">
                <Link to="/marketplace" className="flex items-center gap-3">
                  <Globe className="h-5 w-5" />
                  Explore Market
                </Link>
              </Button>
            </div>
            
            <div className="pt-12 flex items-center justify-center gap-12 text-muted-foreground">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm">Items Listed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5K+</div>
                <div className="text-sm">Active Sellers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">$2M+</div>
                <div className="text-sm">Volume Traded</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 border-t border-border/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">Why Web3Market?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Experience the next generation of peer-to-peer selling with blockchain security and decentralized trust.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4 p-6 rounded-lg bg-card/30 backdrop-blur border border-border/50 hover:shadow-card transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg">Blockchain Secured</h3>
              <p className="text-muted-foreground text-sm">
                Every transaction is secured by blockchain technology. No intermediaries, just pure trust.
              </p>
            </div>
            
            <div className="text-center space-y-4 p-6 rounded-lg bg-card/30 backdrop-blur border border-border/50 hover:shadow-card transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg">Instant Transactions</h3>
              <p className="text-muted-foreground text-sm">
                Smart contracts enable instant, secure transactions without waiting for approvals.
              </p>
            </div>
            
            <div className="text-center space-y-4 p-6 rounded-lg bg-card/30 backdrop-blur border border-border/50 hover:shadow-card transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg">Decentralized Network</h3>
              <p className="text-muted-foreground text-sm">
                Connect with buyers and sellers globally on our decentralized marketplace.
              </p>
            </div>
            
            <div className="text-center space-y-4 p-6 rounded-lg bg-card/30 backdrop-blur border border-border/50 hover:shadow-card transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg">Zero Hidden Fees</h3>
              <p className="text-muted-foreground text-sm">
                Transparent, blockchain-based transactions with minimal fees. What you see is what you pay.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 border-t border-border/40">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent">Ready to Join the Future?</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join thousands of sellers and buyers already using Web3Market 
              to trade securely in the decentralized economy.
            </p>
            
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-premium text-lg px-12 py-6 rounded-xl group">
              <Link to="/create" className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
                List Your First Item
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;