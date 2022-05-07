import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';
import PhotoList from '../PhotoList';

function Gallery( currentCategory ) {
    const {name, description} =  currentCategory
   
    return (
        <section>
            <h1 data-testid="h1tag">{name}</h1>
            <p>{description}</p>
            <PhotoList />
        </section>
    )
}

export default Gallery;