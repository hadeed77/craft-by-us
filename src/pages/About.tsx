import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Heart, Sparkles, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-widest text-sm">
              Our Story
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              About Craft By Us
            </h1>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg mx-auto text-center mb-16">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Welcome to <span className="text-primary font-semibold">Craft By Us</span>, where every piece tells a story. 
                We are a passionate team of artisans dedicated to creating beautiful, handcrafted items 
                that bring warmth and creativity into your home.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mt-6">
                Our journey began with a simple belief: that handmade items carry a special energy 
                that mass-produced goods simply cannot replicate. Each piece we create is infused 
                with love, attention to detail, and the desire to make something truly unique.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center">
                  <Heart className="h-7 w-7 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Passion</h3>
                <p className="text-muted-foreground text-sm">
                  Every item is created with genuine love and dedication to the craft.
                </p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center">
                  <Sparkles className="h-7 w-7 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Quality</h3>
                <p className="text-muted-foreground text-sm">
                  We use only the finest materials to ensure lasting beauty.
                </p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center">
                  <Users className="h-7 w-7 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Community</h3>
                <p className="text-muted-foreground text-sm">
                  Supporting local artisans and sustainable practices.
                </p>
              </div>
            </div>

            <div className="text-center bg-accent p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                "Shaping Your Thoughts"
              </h2>
              <p className="text-muted-foreground">
                Our tagline reflects our mission: to create pieces that inspire creativity 
                and bring your ideas to life through beautiful, handcrafted art.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
