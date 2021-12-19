import React from 'react'

export const GiftGridItem = ({id,title,url}) => {
    return (
        <div className='card animate__animated animate__fadeIn'>
            <img src={ url } alt={ title }></img>
            <h5> { title } </h5>

        </div>
    )
}
