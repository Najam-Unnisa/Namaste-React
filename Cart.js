import { useDispatch, useSelector } from "react-redux";
import ItemLists from "./ItemLists";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items); // make sure you are subscribing to the right portion of the store..

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

  return (
    <div className="text-center m-4 p-4 ">
      <h1 className="text-2xl font-bold">Cart</h1>

      <div className="w-6/12 m-auto ">
      <button className="m-2 p-2 bg-black text-white rounded-lg" 
      onClick={handleClearCart}
      >Clear Cart</button>

      {cartItems.length === 0 && <h1>Cart is empty. Add items to the cart!</h1>}

        <ItemLists items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
