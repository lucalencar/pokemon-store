import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseAction, increaseAction } from "../redux/action/CounterAction";

export default function useCounter() {

    const state = useSelector((state) => state.counter);

    const dispatch = useDispatch();

    const [counter, setCounter] = useState(0);
    
    const increase = () => {
        dispatch(increaseAction());
    }

    const decrease = () => {
        if (state.count <= 0) {
            setCounter(0);
        }
        else {
            dispatch(decreaseAction());
        }
    }

    useEffect(() => {
        setCounter(state.count);
    }, [state]);


    function subTotal(pokemonPreco) {
        const preco = (pokemonPreco * counter).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        return preco;
    }

    return {
        counter, increase, decrease, subTotal
    };
}