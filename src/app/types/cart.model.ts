export interface ProductInCart {
  data: {
    _id: string;
    cartOwner: string;
    products: ProductInCart[];
    totalCartPrice: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  count: number;
  _id: string;
  product: {
    _id: string;
    title: string;
    imageCover: string;
    ratingsAverage?: number;
    category?: {
      _id: string;
      name: string;
      image: string;
    };
    brand?: {
      _id: string;
      name: string;
      image: string;
    };
    price: number;
    key: string; // لأي فيلد إضافي مش متوقع
  };
  price: number;

  status: string;
  numOfCartItems: number;
  cartId: string;
}
