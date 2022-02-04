import { useDispatch, useSelector } from "react-redux"; 
import { addToCart, removeFromCart, increment, decrement } from "../redux/action/CartAction";


export default function useCart() {

    const cartList = useSelector((state) => state.Cart);
    const dispatch = useDispatch();

   

    const addCart = (item) => {
        dispatch(addToCart(item));
    }

    const removeCart = (item) => {
        dispatch(removeFromCart(item));
    }

    const addQuantity = (item) => {
        dispatch(increment(item));
    }

    const removeQuantity = (item) => {
        dispatch(decrement(item));
    }

    const total = cartList.items.reduce(function(prev, current) {
        return prev +  +(current.price * current.quantity)
      }, 0);

    return {
        addCart, removeCart, cartList, addQuantity, removeQuantity, total
    }
}