import React from 'react' //,{useEffect } 
import PropTypes from 'prop-types';

// import {getGifts} from '../helpers/getGifts';
import {GiftGridItem} from './GiftGridItem';

import {useFetchGifts} from '../hooks/useFetchGifts';
import 'animate.css';



export const GiftGrid = ( { category } ) => {

    // const [images, setImages] = useState([])

    // useEffect( async () => {
        
    //    const result = await getGifts(category);

    //    setImages(result);

    // },[category]);

    const {data:images,isLoading} = useFetchGifts(category);

    // const handleClick = ( ) =>{

    // };
    return (
        <div >
            <h3 className='animate__animated animate__fadeIn'>
                {category}
            </h3>
            <hr />
            {
                !isLoading &&

                <div className='card-grid'>
                    {
                        images.map( ( img ) =>
                            <GiftGridItem key={ img.id } {...img} /> 
                        )
                    }

                </div>
            }
            {
                isLoading &&
                <p className='animate__animated animate__flash'>Cargando...</p>
            }
            
            
        </div>
    )
}

GiftGrid.propTypes={
    category:PropTypes.string.isRequired
}