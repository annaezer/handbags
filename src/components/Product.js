import React from 'react';

function Product({label, image, description, price}) {
    return (
        <article>
        <span>{label}</span>
        <img src={image} alt={label}/>
        <p>{description}</p>
        <h4>{price}</h4>
    </article>
    );
}

export default Product;
