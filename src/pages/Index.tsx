import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/lib/products';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Package, Truck } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroSection />

        {/* Features Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center">
                  <Heart className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Made with Love</h3>
                <p className="text-muted-foreground text-sm">
                  Every piece is handcrafted with attention to detail and care.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center">
                  <Package className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Gift Ready</h3>
                <p className="text-muted-foreground text-sm">
                  Beautifully packaged and ready to gift to your loved ones.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center">
                  <Truck className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Fast Shipping</h3>
                <p className="text-muted-foreground text-sm">
                  Quick and careful delivery right to your doorstep.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-primary font-medium uppercase tracking-widest text-sm">
                Our Collection
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                Featured Products
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg">
                <Link to="/shop">
                  View All Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-accent-foreground font-medium uppercase tracking-widest text-sm">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Crafted with Passion
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                At Craft By Us, we believe in the beauty of handmade. Each piece tells a story, 
                crafted with love and dedication to bring unique artistry into your home.
              </p>
              <Button asChild>
                <Link to="/about">Learn Our Story</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
