import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-crafts.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block text-primary font-medium mb-4 uppercase tracking-widest text-sm">
            Handcrafted with Love
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Shaping Your <span className="text-primary">Thoughts</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg">
            Discover unique, handcrafted pieces that bring warmth and creativity to your everyday life. 
            Each item is made with passion and care.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link to="/shop">
                Shop Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
