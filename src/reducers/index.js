import { FETCH_START, FETCH_SUCCESS,RES_SUCCESS, RES_START, DELETE_CLASS } from "../actions"
const initialState = {
    isFetching: false,
    classes:[],
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
        case RES_START:
            return{
                ...state,
                isFetching:true
            }
            case RES_SUCCESS:
                return{
                    ...state,
                    isFetching:false,
                    reserved:action.payload
                }
        case DELETE_CLASS:
            return{
                ...state,
                reserved: state.reserved.filter(item => item.id !== Number(action.payload)),
                classes: state.classes.filter(item => item.id !== Number(action.payload))
            }
        default:
            return state
    }
}