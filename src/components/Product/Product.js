import React from 'react';

const Product = (props) => {

    const productStyle = {border:'1px solid lightgray', margin:'50px', padding:'20px', width:'200px' , textAlign:'center'};
    const {addToCart, product} = props;
    return (
        <div style={productStyle}>
           <h3>{product.name}</h3> 
           <button onClick={() => addToCart(product.id, product.name)}>Add To Cart</button>
        </div>
    );
};

export default Product;