import React from 'react';
import { addTodb } from '../../utilites/fakedb';
import './Cosmetic.css'
const Cosmetic = (props) => {
    const {name , price , id} = props.cosmetic;
    const addtoCart = (id) =>{
       addTodb(id);
        console.log('iteam added' , id);
    }
    const addToCartWithParameter = () => addtoCart(id);
    return (
        <div className='product'>
            <h2> Buy this:{name}</h2>
            <h4>Only For: ${price}</h4>
            <h5>Id Number : {id}</h5>
            <button onClick={addToCartWithParameter}>Add to cart</button>
            <button onClick={() => addtoCart(id)}>Purchese</button>
        </div>
    );
};

export default Cosmetic;