import axios from "axios";
export const FETCH_START= 'FETCH_START'
export const FETCH_SUCCESS= 'FETCH_SUCCESS'

export const getClasses = () => {
    return ( dispatch => {
        dispatch({type: FETCH_START})
        
        axios.get('https://ft-anywhere-fitness-5.herokuapp.com/api/classes/')
            .then(res=>{
                dispatch(fetchSuccess(res.data))
            })
            .catch(er=>{
                console.log('this error!')
                console.error(er)
            })
    })
}

export const fetchSuccess = (classes)=> {
    return ({type:FETCH_SUCCESS, payload:classes});
}