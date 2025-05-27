import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/Slices/cartSlice";

const Product = ( {productData} ) => {
  const dispatch = useDispatch();

  return <div className="m-5 h-[500px] w-[300px] flex flex-col items-center justify-around p-4 border border-gray-500 rounded-md shadow-[0px_0px_5px_rgb(0,0,0)] transition-all transform hover:scale-105">
    <h2 className="font-bold text-xl">{((productData.title).length>25)?((productData.title).substr(0,25)+" ..."):productData.title}</h2>
    <p className="text-grey-500 text-sm">{((productData.description).length>100)?((productData.description).substr(0,100)+" ..."):productData.description}</p>
    <img src={productData.image} alt="Image" className="w-[150px] h-[150px]"/>
    <div className="flex flex-row justify-between items-center w-11/12">
      <p className="text-green-700 text-lg font-semibold">Rs. {productData.price}</p>
      <button className="uppercase border border-gray-800 text-gray-800 rounded-lg p-2" onClick={()=>{dispatch(addToCart(productData))}}>Add to cart</button>
    </div>
  </div>;
};

export default Product;
