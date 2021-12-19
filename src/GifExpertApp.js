import React, {useState} from 'react';

import AddCategory from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';


const GiftExpertApp = ( ) =>{

    const [categories,setCategories]  = useState(['Bayern Munich']);
    // const categories = ['One Punch', 'Samurai X', 'Bayern Munich'];


    // const handleAdd = () => {

    //     setCategories([...categories,`${categories.length+1}. holaaaa`]);
    // }

    const handleAddCategory = ( value ) => {

        if( !categories.some(category => category===value) )
            setCategories([value,...categories]);
    }

    return(
        <>
            <h4>Gift Expert App</h4>
            <AddCategory addNewCategory= {handleAddCategory} />

            <hr />
            <ol>
                {
                    categories.map( category  => 
                        <GiftGrid key={ category } category={category} />
                    )
                }
            </ol>
        </>
    )
}


export default GiftExpertApp;