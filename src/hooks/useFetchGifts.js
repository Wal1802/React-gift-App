import { useState,useEffect } from "react"

import {getGifts} from '../helpers/getGifts';

export const useFetchGifts = ( category ) =>{
    
    const [state, setState] = useState({
        data:[],
        isLoading:true
    })

    

    useEffect( () => {
        
        
        const fetchData = async () =>{
            const result = await getGifts(category);
    
            setState({
                data:result,
                isLoading:false
            });
        }
        
        fetchData();


    },[category]);



    return state;
}