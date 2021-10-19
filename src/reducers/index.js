import { FETCH_START } from "../actions"
import { FETCH_SUCCESS } from "../actions"
const initialState = {
    isFetching: false,
    classes:[],
    instructor: false,
    reserved:[],
    username:'guest'
}

export const reducer = (state = initialState, action)=>{
    switch(action.type){
        case FETCH_START:
            return{
                ...state,
                isFetching: true
            }
        case FETCH_SUCCESS:
            return{
                ...state,
                isFetching:false,
                classes: action.payload
            }
        default:
            return state
    }
}