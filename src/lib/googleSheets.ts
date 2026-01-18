import type { Product } from './store';

// Instructions for setting up your Google Sheet:
// 1. Create a new Google Sheet with these columns (exactly as shown):
//    id | name | price | description | image | category
// 
// 2. Fill in your products (one per row)
//    Example row: 1 | Lavender Ceramic Mug | 34.99 | Handcrafted ceramic mug... | https://example.com/image.jpg | Ceramics
//
// 3. Publish the sheet:
//    - Go to File > Share > Publish to web
//    - Select "Entire Document" and "Comma-separated values (.csv)"
//    - Click "Publish"
//    - Copy the URL and paste it below
//
// 4. Replace the SHEET_CSV_URL below with your published CSV URL

// Replace this with your published Google Sheet CSV URL
const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRr4GYrptIx9HkIa0Dg2zZe5ef-pAEJqt43Cy5AFwO0JbHCoFHEomzXSj4Xa49O5PtoSNwmWAKhmou_/pub?gid=0&single=true&output=csv';

function parseCSV(csvText: string): Record<string, string>[] {
  const lines = csvText.trim().split('\n');
  if (lines.length < 2) return [];
  
  const headers = lines[0].split(',').map(h => h.trim().toLowerCase().replace(/"/g, ''));
  
  return lines.slice(1).map(line => {
    const values: string[] = [];
    let current = '';
    let inQuotes = false;
    
    for (const char of line) {
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        values.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    values.push(current.trim());
    
    const row: Record<string, string> = {};
    headers.forEach((header, index) => {
      row[header] = values[index] || '';
    });
    return row;
  });
}

export async function fetchProductsFromSheet(): Promise<Product[]> {
  if (!SHEET_CSV_URL) {
    console.warn('Google Sheet URL not configured. Using default products.');
    return [];
  }

  try {
    const response = await fetch(SHEET_CSV_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch sheet data');
    }
    
    const csvText = await response.text();
    const rows = parseCSV(csvText);
    
    return rows
      .filter(row => row.id && row.name && row.price)
      .map(row => ({
        id: row.id,
        name: row.name,
        price: parseFloat(row.price) || 0,
        description: row.description || '',
        image: row.image || '/placeholder.svg',
        category: row.category || 'Uncategorized',
      }));
  } catch (error) {
    console.error('Error fetching products from Google Sheet:', error);
    return [];
  }
}

export function isGoogleSheetConfigured(): boolean {
  return SHEET_CSV_URL.length > 0;
}
