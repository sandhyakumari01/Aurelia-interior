export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  images: string[];
  category: string;
  rating: number;
}

export async function fetchProducts(): Promise<Product[]> {

  const data = {
    "products": [
      {
        "id": 11,
        "title": "Annibale Colombo Bed",
        "description": "The Annibale Colombo Bed is a luxurious and elegant bed frame.",
        "category": "furniture",
        "price": 1899.99,
        "thumbnail": "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp",
        "images": ["https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/1.webp"],
        "rating": 4.77
      },
      {
        "id": 12,
        "title": "Annibale Colombo Sofa",
        "description": "The Annibale Colombo Sofa is a sophisticated seating option.",
        "category": "furniture",
        "price": 2499.99,
        "thumbnail": "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp",
        "images": ["https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/1.webp"],
        "rating": 3.92
      },
      {
        "id": 13,
        "title": "Bedside Table African Cherry",
        "description": "Stylish and functional addition to your bedroom.",
        "category": "furniture",
        "price": 299.99,
        "thumbnail": "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/thumbnail.webp",
        "images": ["https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/1.webp"],
        "rating": 2.87
      },
      {
        "id": 14,
        "title": "Knoll Saarinen Executive Conference Chair",
        "description": "Modern and ergonomic chair, perfect for your office.",
        "category": "furniture",
        "price": 499.99,
        "thumbnail": "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/thumbnail.webp",
        "images": ["https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/1.webp"],
        "rating": 4.88
      },
      {
        "id": 15,
        "title": "Wooden Bathroom Sink With Mirror",
        "description": "Unique and stylish addition to your bathroom.",
        "category": "furniture",
        "price": 799.99,
        "thumbnail": "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/thumbnail.webp",
        "images": ["https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/1.webp"],
        "rating": 3.59
      }
    ]
  };
  return data.products;
}