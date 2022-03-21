import React from 'react';

const Cosmetic = (props) => {
    const {name , price} = props.cosmetic;
    return (
        <div>
            <h2> Buy this:{name}</h2>
            <h4>Only For: ${price}</h4>
        </div>
    );
};

export default Cosmetic;