import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useStore, type Product } from '@/lib/store';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const addToCart = useStore((state) => state.addToCart);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const shouldShowReadMore = product.description.length > 80;

  return (
    <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-4">
        {product.category && product.category.toLowerCase() !== 'uncategorized' && (
          <span className="text-xs font-medium text-primary uppercase tracking-wide">
            {product.category}
          </span>
        )}
        <h3 className="font-semibold text-foreground mt-1 mb-2">{product.name}</h3>
        <div className="mb-4">
          <p className={`text-muted-foreground text-sm ${!showFullDescription ? 'line-clamp-2' : ''}`}>
            {product.description}
          </p>
          {shouldShowReadMore && (
            <button
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="text-primary text-sm font-medium hover:underline mt-1"
            >
              {showFullDescription ? 'Show less' : 'Read more'}
            </button>
          )}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-foreground">
            PKR {product.price.toFixed(0)}
          </span>
          <Button size="sm" onClick={handleAddToCart}>
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
