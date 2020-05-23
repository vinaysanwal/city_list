import { GET_CITY  , CITY_ERR} from "../actions/types";

const initialstate = {
    cities : null,
    loading: true,
}


export default function(state = initialstate , action){
    const {type , payload} = action; 

    switch(type) {
        case GET_CITY:
            return {
                ...state , 
                cities: payload,
                loading: false
            };
        case CITY_ERR :
            return {
                ...state,
                loading:false
            }
        default:
            return state;
    }
}