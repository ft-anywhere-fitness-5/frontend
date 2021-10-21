import { FETCH_START, FETCH_SUCCESS,RES_SUCCESS, RES_START, DELETE_CLASS, SEARCH_CLASSES } from "../actions"
const initialState = {
    isFetching: false,
    classes:[],
    filtered:[],
    reserved:[],
    username:'guest'
}
                    //classList.filter(class=>[radiovalue.name]:input == item.radioname)
        //classList.keys.filter(class=>[radiovalue.name]:input == item.radioname
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
        case SEARCH_CLASSES:
            //console.log(state.classes[0].class_id)
            console.log(action.payload.search + '.search')
            console.log(state.classes[0][action.payload.search] + ' class-0, payload.search?')
            return{
                ...state,
                classes: state.classes.filter(item => {
                    const searchCat = item[action.payload.search]
                    const upperCat = searchCat.toUpperCase()
                    const searchTerm = action.payload.input
                    const upperTerm = searchTerm.toUpperCase()
                    return(upperCat.includes(upperTerm))
                })
            }

        default:
            return state
    }
}