import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { addToCart, removeFromCart } from "../redux/action/CartAction";


export default function useCart() {

    const cartList = useSelector((state) => state.Cart);
    const dispatch = useDispatch();

    const addCart = (item) => {
        dispatch(addToCart(item));
    }

    const removeCart = (item) => {
        dispatch(removeFromCart(item));
    }

    return {
        addCart, removeCart, cartList
    }
}