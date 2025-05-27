import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector( (state)=>state.cart );

  return <div className=" sticky top-0 z-50 h-14 w-full bg-gray-500 text-white flex flex-row justify-between items-center p-5">
    <h1 className="font-bold text-2xl">ECOMZY</h1>
    <div className="flex flex-row justify-center items-center gap-4">
      <Link to="/">Home</Link>
      <Link to="/cart" className="relative h-[40px] w-[40px] flex items-center justify-center"><FaShoppingCart className="text-xl"/><p className="absolute top-[0%] right-[0%] w-[20px] h-[20px] text-white font-semibold rounded-full bg-black text-center">{cartItems.length}</p></Link>
    </div>
  </div>;
};

export default Navbar;
