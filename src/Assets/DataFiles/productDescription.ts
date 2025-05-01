// import firstDressPic from "../Images/weed2.jpg";
// import secDressPic from "../../Assets/Images/weed2.jpeg"; 
// import thrdDressPic from "../Images/BannerImage.jpg";


import BannerImage from "../../Assets/Images/weed2.jpg"

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


const productsDescription: Product[] = [
  {
    id: 1,
    category: "Accesories",
    image: [BannerImage, BannerImage, BannerImage],
    productName: "Venus Dress",
    description: "Elegant black dress with a stylish design.",
    price: 449, 
    rating: 5,
    colors: ["#4F4F4F", "#32CD32", "#00CED1"],
    sizes: ["XS", "S", "M", "L", "XL"],
    quantity: 12,
  },
  {
    id: 2,
    category: "Western wear",
    image: [BannerImage, BannerImage, BannerImage],
    productName: "Bianca Dress",
    description: "A chic and versatile dress.",
    price: 399,
    rating: 4.8,
    colors: ["#4F4F4F", "#32CD32", "#00CED1"],
    sizes: ["XS", "S", "M", "L", "XL"],
    quantity: 10,
  },
  {
    id: 3,
    category: "Ethnic wear",
    image: [BannerImage, BannerImage, BannerImage],
    productName: "IGA Top",
    description: "Casual black top for everyday wear.",
    price: 199,
    rating: 4.5,
    colors: ["#4F4F4F", "#32CD32", "#00CED1"],
    sizes: ["XS", "S", "M", "L", "XL"],
    quantity: 9,
  },
  {
    id: 4,
    category: "Sport",
    image: [BannerImage, BannerImage, BannerImage],
    productName: "Men's Sportswear Hoodie",
    description: "100% cotton hoodie for comfort and performance.",
    price: 6.99,
    rating: 4,
    colors: ["#4F4F4F", "#32CD32", "#00CED1"],
    sizes: ["XS", "S", "M", "L", "XL"],
    quantity: 1,
  },
  {
    id: 5,
    category: "Sport",
    image: [BannerImage, BannerImage, BannerImage],
    productName: "Sportswear Set",
    description: "Stylish sportswear made of cotton and nylon.",
    price: 13.14,
    rating: 4,
    colors: ["#4F4F4F", "#32CD32", "#00CED1"],
    sizes: ["XS", "S", "M", "L", "XL"],
    quantity: 1,
  },
  {
    id: 6,
    category: "Sport",
    image: [BannerImage, BannerImage, BannerImage],
    productName: "Women's Yoga Pants",
    description: "Comfortable and printed yoga pants for women.",
    price: 3.5,
    rating: 4.9,
    colors: ["#4F4F4F", "#32CD32", "#00CED1"],
    sizes: ["XS", "S", "M", "L", "XL"],
    quantity: 1,
  },
  {
    id: 7,
    category: "Sport",
    image: [BannerImage, BannerImage, BannerImage],
    productName: "Men's Performance T-Shirts",
    description: "Sweat-wicking fabric for peak performance.",
    price: 8, 
    rating: 4.2,
    colors: ["#4F4F4F", "#32CD32", "#00CED1"],
    sizes: ["XS", "S", "M", "L", "XL"],
    quantity: 1,
  },
  {
    id: 8,
    category: "Sport",
    image: [BannerImage, BannerImage, BannerImage],
    productName: "Polyester Sportswear",
    description: "Durable sportswear made from 100% polyester.",
    price: 3.5,
    rating: 4,
    colors: ["#4F4F4F", "#32CD32", "#00CED1"],
    sizes: ["XS", "S", "M", "L", "XL"],
    quantity: 1,
  },
  {
    id: 9,
    category: "Sport",
    image: [BannerImage, BannerImage, BannerImage],
    productName: "Activewear Shorts",
    description: "High-waisted shorts with side pockets.",
    price: 3.4,
    rating: 3.4,
    colors: ["#4F4F4F", "#32CD32", "#00CED1"],
    sizes: ["XS", "S", "M", "L", "XL"],
    quantity: 1,
  },
  {
    id: 10,
    category: "Sport",
    image: [BannerImage, BannerImage, BannerImage],
    productName: "Men's Stretch T-Shirt",
    description: "4-way stretch fabric for ultimate mobility.",
    price: 3.5,
    rating: 4,
    colors: ["#4F4F4F", "#32CD32", "#00CED1"],
    sizes: ["XS", "S", "M", "L", "XL"],
    quantity: 1,
  },
  {
    id: 11,
    category: "Sport",
    image: [BannerImage, BannerImage, BannerImage],
    productName: "Men's Stretch T-Shirt",
    description: "4-way stretch fabric for ultimate mobility.",
    price: 3.5,
    rating: 4,
    colors: ["#4F4F4F", "#32CD32", "#00CED1"],
    sizes: ["XS", "S", "M", "L", "XL"],
    quantity: 1,
  },
  {
    id: 12,
    category: "Sport",
    image: [BannerImage, BannerImage, BannerImage],
    productName: "Men's Stretch T-Shirt",
    description: "4-way stretch fabric for ultimate mobility.",
    price: 3.5,
    rating: 4,
    colors: ["#4F4F4F", "#32CD32", "#00CED1"],
    sizes: ["XS", "S", "M", "L", "XL"],
    quantity: 1,
  },
];

export default productsDescription;
