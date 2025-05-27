import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/Slices/cartSlice";

const CartItem = ({item}) => {
  const dispatch = useDispatch();

  return (
      <div className="flex flex-row gap-5 items-center justify-center w-3/4 p-10 border border-b-black">
        <img src={item.image} className="w-[200px] h-[200px]"/>
        <div className="flex flex-col gap-2 w-3/4">
          <h2 className="font-bold text-xl">{((item.title).length>25)?((item.title).substr(0,25)+" ..."):item.title}</h2>
          <p className="text-grey-500 text-sm">{((item.description).length>100)?((item.description).substr(0,100)+" ..."):item.description}</p>
          <div className="flex flex-row justify-between items-center w-11/12">
            <p className="text-green-700 text-lg font-semibold">Rs. {item.price}</p>
            <button className="" onClick={()=>{dispatch(removeFromCart(item))}}><MdDelete className="text-red-700 text-lg"/></button>
          </div>
        </div>
      </div>
  );
};

export default CartItem;
