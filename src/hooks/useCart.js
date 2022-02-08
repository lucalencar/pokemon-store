import { useDispatch, useSelector } from "react-redux"; 
import { addToCart, removeFromCart, increment, decrement } from "../redux/action/CartAction";

//hook para as funcionalidades do carrinho
export default function useCart() {
    const cartList = useSelector((state) => state.Cart);
    const dispatch = useDispatch();

//funcion para alterar o store e adicionar um item no carrinho
    const addCart = (item) => {
        dispatch(addToCart(item));
    }
//funcion para alterar o store e remover um item do carrinho
    const removeCart = (item) => {
        dispatch(removeFromCart(item));
    }
//function para alterar o store e adicionar uma quantidade a um item do carrinho
    const addQuantity = (item) => {
        dispatch(increment(item));
    }
//function para alterar o store e remover uma quantidade a um item do carrinho
    const removeQuantity = (item) => {
        dispatch(decrement(item));
    }
//const para calcular o valor total no carrinho
    const total = cartList.items.reduce(function(prev, current) {
        return prev +  +(current.price * current.quantity)
      }, 0);
//const para formatar o preço para a moeda real br 
      const formatPrice = (e) => {
        return parseFloat(e).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    }
//const para pegar a imagem pela id do pokemon
    const imgUrl = (e) => {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${e}.png`;
    }
//funcion para chamar a action de adicionar ao carrinho e puxar as informações do pokemon via home/search bar
    function addToCartList(index, nome, preco, img) {
        const item = { id: index, name: nome, price: preco, image: img, quantity: 1 };
        addCart(item);
      }

    return {
        addCart, removeCart, cartList, addQuantity, removeQuantity, total, formatPrice, imgUrl, addToCartList
    }
}