import React,{useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( { addNewCategory } ) => {

    const [category, setCategory] = useState('');
    
    const handleAdd = () =>{

    }

    const handleInput = ( {value} ) =>{

        setCategory(value);
    }

    const handleSubmit = ( event ) =>{

        event.preventDefault();

        if(category.trim().length>2)
            addNewCategory(category);


        setCategory('');



    }
    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text" 
                value={category}
                onChange={ ({target}) => handleInput(target)} 
            />
            
            <button onClick={handleAdd}>Agregar</button>
            
        </form>
    )
}


AddCategory.propTypes = {
    addNewCategory: PropTypes.func.isRequired
}

export default AddCategory;