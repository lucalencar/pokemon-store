import {
    LOAD_POKE_REQUEST,
    LOAD_POKE_SUCCESS,
    LOAD_POKE_FAILURE
} from "../action/action";

export const POKE_KEY = 'pokeStore'

let initialState = {
    data: [],
    loading:false,
    errorMessage:'',
     pokeUrlData:{}
}

export const pokeReducer = (state = initialState, action) =>{
    let {type, payload} = action
    switch(type){
         
        
                    case LOAD_POKE_REQUEST:
                        return{
                            ...state,
                            loading:true
                        }
                        case LOAD_POKE_SUCCESS:
                            return{
                                ...state,
                                loading:false,
                                pokeUrlData:payload
                            }
            
                             
                            case LOAD_POKE_FAILURE:
                                return{
                                    ...state,
                                    errorMessage:payload
                                }
                    default: return state
    }

}