export interface ProductDetails {
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  imageCover: string;
  images: string[];
  category: {
    _id: string;
    name: string;
    slug: string;
    image: string;
  };
  brand: {
    _id: string;
    name: string;
    slug: string;
    image: string;
  };
  ratingsAverage: number;
  ratingsQuantity: number;
  sold: number;
  subcategory: Array<{
    _id: string;
    name: string;
    slug: string;
    category: string;
  }>;
  createdAt: string;
  updatedAt: string;
  id: string;
}
