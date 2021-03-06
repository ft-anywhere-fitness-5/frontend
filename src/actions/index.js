import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";
export const FETCH_START= 'FETCH_START'
export const FETCH_SUCCESS= 'FETCH_SUCCESS'
export const RES_START= 'RES_START'
export const RES_SUCCESS= 'RES_SUCCESS'
export const DELETE_CLASS='DELETE_CLASS'
export const SEARCH_CLASSES='SEARCH_CLASSES'

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

export const getReserved=()=>{
    return ( dispatch => {
        dispatch({type: RES_START})

        axiosWithAuth().get(`https://ft-anywhere-fitness-5.herokuapp.com/api/user`)
            .then(resp=>{
                console.log(resp.data)
                console.log('array here^^')
                dispatch(resSuccess(resp.data))

            })
            .catch(er=>{
                console.log('res error')
                console.log(er)
            })
    })
}

export const resSuccess = (classes)=> {
    return ({type:RES_SUCCESS, payload:classes});
}

export const deleteClass = (id)=>{
    return({type:DELETE_CLASS, payload: id})
}

export const searchClasses = (search,input) => {
    getClasses();
    return({type:SEARCH_CLASSES, payload:search, input})
}