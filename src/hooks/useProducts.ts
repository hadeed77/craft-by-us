import { useQuery } from '@tanstack/react-query';
import { fetchProductsFromSheet, isGoogleSheetConfigured } from '@/lib/googleSheets';
import { products as defaultProducts } from '@/lib/products';
import type { Product } from '@/lib/store';

export function useProducts() {
  return useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: async () => {
      if (!isGoogleSheetConfigured()) {
        return defaultProducts;
      }
      
      const sheetProducts = await fetchProductsFromSheet();
      
      // If sheet returns products, use them; otherwise fall back to defaults
      if (sheetProducts.length > 0) {
        return sheetProducts;
      }
      
      return defaultProducts;
    },
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    refetchOnWindowFocus: false,
  });
}
