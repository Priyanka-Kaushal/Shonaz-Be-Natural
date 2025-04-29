import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProductById } from "../redux/actions/product";
import { toast } from "react-hot-toast";
import { cartItems } from "../redux/actions/cart";
import Spinner from "../layout/Spinner";

const ProductPage = ({ handleCartToggle }) => {
  const product = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [activeSize, setActiveSize] = useState();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getProductById(id));
  }, [id]);
  const setOption = (size) => {
    setActiveSize(size);
  };
  const addToCart = () => {
    if (!activeSize) {
      toast.error("Please select an size");
      return;
    }
    setLoading(true);
    dispatch(cartItems({ activeSize, quantity, id }))
      .then(() => {
        setLoading(false);
        handleCartToggle();
      })
      .catch((error) => setLoading(false));
  };
  if (!product) return;
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="  rounded-lg bg-fuchsia-300 mb-4">
              <img
                className="w-full h-full object-contain"
                loading="lazy"
                src={product?.image}
                alt="Product Image"
              />
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="w-full px-2">
                <button
                  onClick={addToCart}
                  disabled={product.quantity <= 0}
                  className={`w-full bg-fuchsia-700 text-white py-2 px-4 rounded-full font-bold hover:bg-fuchsia-600 ${
                    product.quantity <= 0
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed hover:bg-gray-300"
                      : ""
                  }`}
                >
                  {loading ? (
                    <Spinner />
                  ) : product.quantity <= 0 ? (
                    "Out of Stock"
                  ) : (
                    "Add to Cart"
                  )}
                </button>
              </div>
              {/* <div className="w-1/2 px-2">
                <button className="w-full bg-fuchsia-300 text-fuchsia-800 py-2 px-4 rounded-full font-bold hover:bg-fuchsia-200">
                  Buy Now
                </button>
              </div> */}
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl text-fuchsia-800 font-bold mb-2">
              {product.title}
            </h2>
            <p className="text-fuchsia-600 text-sm mb-4">{product.subTitle}</p>
            <p className="text-fuchsia-800 font-bold mb-4 ">
              Seller:{" "}
              <span className="text-fuchsia-600 font-semibold">
                {product.user[0].bussiness}
              </span>
            </p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-fuchsia-700">Price:</span>
                <span className="text-fuchsia-600">
                  {" "}
                  ₹{product.price / 100}
                </span>
              </div>
              <div>
                <span className="font-bold text-fuchsia-700">
                  Availability:
                </span>
                <span className="text-fuchsia-600">
                  {product.quantity > 0 ? "In Stock" : "Out Of Stock"}
                </span>
              </div>
            </div>

            {product?.sizes && (
              <div className="mb-4">
                <span className="font-bold text-fuchsia-700">Select Size:</span>
                <div className="flex flex-wrap items-center mt-2">
                  {product.sizes.map((size, index) => (
                    <button
                      key={index}
                      onClick={() => setOption(size)}
                      className={`bg-fuchsia-300 text-fuchsia-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-fuchsia-400 ${
                        activeSize === size ? "active bg-fuchsia-500" : ""
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {/* Quantity Selector */}
            <div className="mb-4">
              <span className="font-bold text-fuchsia-700">
                Select Quantity:
              </span>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => {
                    if (quantity > 1) {
                      setQuantity(quantity - 1);
                    } else {
                      setQuantity(quantity);
                      toast.error("Min Limit reached");
                    }
                  }}
                  className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-fuchsia-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-fuchsia-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 12H4"
                    />
                  </svg>
                </button>
                <div className="bg-gray-100 border-t border-b border-fuchsia-100 text-fuchsia-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                  {quantity}
                </div>
                <button
                  onClick={() => {
                    if (quantity < product.quantity) {
                      setQuantity(quantity + 1);
                    } else {
                      setQuantity(quantity);
                      toast.error("Max Limit reached");
                    }
                  }}
                  className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-fuchsia-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-fuchsia-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* End Quantity Selector */}
            {product?.description && (
              <div>
                <span className="font-bold text-fuchsia-700">
                  Product Description:
                </span>
                <p className="text-fuchsia-600 text-sm mt-2">
                  {product.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductPage;