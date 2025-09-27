
// wishlist.model.ts

// 🟢 واجهة المنتج في الـ wishlist
export interface WishlistProduct {
  _id: string;
  title: string;
  imageCover: string;
  price: number;
    count: number; 
  // ✨ إذا فيه خصائص إضافية من الـ API ضيفها هنا
}

// 🟢 واجهة استجابة الـ API للـ wishlist
export interface WishlistResponse {
  status: string;               // مثل "success"
  count: number;                // عدد المنتجات
  data: WishlistProduct[];      // مصفوفة المنتجات
  message: string;              // رسالة الاستجابة
  statusCode: number;           // الكود، مثل 200
}
