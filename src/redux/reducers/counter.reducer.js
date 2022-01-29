import TYPES from "../types/types"

const INITIAL_STATE = {
    count: 0
}

const CounterReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.increase:
            return {...state, count: state.count +1}

        case TYPES.decrease:
            return {...state, count: state.count -1}
    
        default:
            return state;
    }
}

export default CounterReducer;