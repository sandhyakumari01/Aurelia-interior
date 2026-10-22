export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const servicesData: Service[] = [
  {
    id: '1',
    title: 'Interior Design',
    description: 'Thoughtfully designed spaces for everyday living.',
    image: 'https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/1.webp'
  },
  {
    id: '2',
    title: 'Custom Furniture',
    description: 'Handcrafted pieces, made for your home.',
    image: 'https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/1.webp'
  },
  {
    id: '3',
    title: '3D Walkthroughs',
    description: 'Visualize your space before it’s built.',
    image: 'https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/1.webp'
  }
];

