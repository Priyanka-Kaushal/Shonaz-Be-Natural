import BannerImage from "../../Assets/Images/weed2.jpg";

export interface Product {
  id: number;
  category: string;
  image: string[];        // array of image URLs
  productName: string;
  description: string;
  price: number;
  rating: number;
  colors: string[];
  sizes: string[];
  quantity: number;
}

// ✅ Now add missing fields: rating, colors, sizes, quantity
const data: Product[] = [
  {
    id: 1,
    productName: "T-Shirt",
    category: "boys",
    description: "Boys Cotton T-shirt",
    price: 499,
    rating: 4.5,
    colors: ["red", "blue"],
    sizes: ["S", "M", "L"],
    quantity: 10,
    image: [BannerImage] // ✅ You can also use imported image here
  },
  {
    id: 2,
    productName: "Dress",
    category: "girls",
    description: "Girls Party Dress",
    price: 999,
    rating: 4.7,
    colors: ["pink", "purple"],
    sizes: ["M", "L"],
    quantity: 15,
    image: ["../../Assets/Images/girlsdress.jpg"] // Replace with actual image path
  },
  {
    id: 3,
    productName: "Jacket",
    category: "new-arrival",
    description: "New Arrival Winter Jacket",
    price: 1499,
    rating: 4.8,
    colors: ["black"],
    sizes: ["L", "XL"],
    quantity: 5,
    image: ["../../Assets/Images/jacket.jpg"] // Replace with actual image path
  }
];

export default data;
