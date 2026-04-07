import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, BookOpen, Users, Award, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { heroBanner } from "@/assets";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-background py-24 mt-[4.5rem]">
      {/* Enhanced Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-to-tl from-accent/20 via-primary/20 to-secondary/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-full blur-3xl opacity-20 animate-spin" style={{ animationDuration: '30s' }} />
        
        {/* Floating Books Animation */}
        <div className="absolute top-20 left-20 w-8 h-8 bg-primary/20 rounded-md opacity-20 animate-bounce" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-32 w-6 h-6 bg-accent/20 rounded-md opacity-20 animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-40 w-7 h-7 bg-secondary/20 rounded-md opacity-20 animate-bounce" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-primary/20 rounded-md opacity-20 animate-bounce" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <Card className="flex-1 border-none shadow-none bg-transparent">
          <CardContent className="space-y-8 animate-fade-in-up p-0">
            {/* Trust Indicators */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-border">
                <Star className="w-4 h-4 text-primary fill-primary" />
                <span className="text-sm font-medium text-foreground">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-border">
                <Users className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-foreground">50K+ Readers</span>
              </div>
              <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-border">
                <Award className="w-4 h-4 text-secondary-foreground" />
                <span className="text-sm font-medium text-foreground">Award Winner</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground leading-tight tracking-tight">
              <span className="inline-block mb-2">
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Discover Your Next
                </span>
              </span>
              <br />
              <span className="inline-flex items-center gap-4 text-foreground">
                Favorite Book
                <div className="relative">
                  <BookOpen className="w-12 h-12 text-primary" />
                  <Sparkles className="w-6 h-6 text-accent absolute -top-2 -right-2" />
                </div>
              </span>
            </h1>

            {/* Enhanced Description */}
            <div className="space-y-4">
              <p className="text-muted-foreground text-xl leading-relaxed">
                Browse through{" "}
                <Badge variant="outline" className="inline-flex bg-primary/10 text-primary border-primary/20 font-semibold px-3 py-1">
                  🔥 10,000+ Bestsellers
                </Badge>{" "}
                across{" "}
                <Badge variant="outline" className="inline-flex bg-accent/10 text-accent-foreground border-accent/20 font-semibold px-3 py-1">
                  📚 50+ Genres
                </Badge>
              </p>
              
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="bg-primary text-primary-foreground border-primary font-bold px-4 py-2 shadow-lg hover:scale-105 transition-transform">
                  ✨ Inspire
                </Badge>
                <Badge variant="outline" className="bg-accent text-accent-foreground border-accent font-bold px-4 py-2 shadow-lg hover:scale-105 transition-transform">
                  🎓 Educate
                </Badge>
                <Badge variant="outline" className="bg-secondary text-secondary-foreground border-secondary font-bold px-4 py-2 shadow-lg hover:scale-105 transition-transform">
                  🎭 Entertain
                </Badge>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/shop">
                <Button
                  size="lg"
                  className="group px-8 py-4 text-lg font-semibold bg-primary text-primary-foreground shadow-2xl hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 hover:shadow-3xl"
                >
                  Shop Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg font-semibold bg-card/80 backdrop-blur-sm border-border text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Browse Categories
              </Button>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="bg-card/60 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">📦 Free Shipping</h3>
                <p className="text-sm text-muted-foreground">On orders over ₹500</p>
              </div>
              <div className="bg-card/60 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">🔄 Easy Returns</h3>
                <p className="text-sm text-muted-foreground">30-day return policy</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Right Image with Enhanced Design */}
        <Card className="flex-1 hidden md:flex justify-center animate-fade-in border-none shadow-none bg-transparent">
          <CardContent className="p-0 relative">
            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-xl opacity-60 " />
            <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-br from-accent/30 to-secondary/30 rounded-full blur-xl opacity-60" />
            
            {/* Main Image Container */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <img
                src={heroBanner}
                alt="Books Hero"
                className="relative w-full max-w-lg rounded-2xl shadow-2xl object-cover transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl"
              />
              
              {/* Floating Stats */}
              <div className="absolute -top-4 -left-4 bg-card/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-border">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">2M+</div>
                  <div className="text-xs text-muted-foreground">Books Sold</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-card/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-border">
                <div className="text-center">
                  <div className="text-lg font-bold text-accent-foreground">24/7</div>
                  <div className="text-xs text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Wave Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;