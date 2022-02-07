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

      const formatPrice = (e) => {
        return parseFloat(e).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    }

    const imgUrl = (e) => {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${e}.png`;
    }

    function addToCartList(index, nome, preco, img) {
        const item = { id: index, name: nome, price: preco, image: img, quantity: 1 };
        addCart(item);
      }

    return {
        addCart, removeCart, cartList, addQuantity, removeQuantity, total, formatPrice, imgUrl, addToCartList
    }
}