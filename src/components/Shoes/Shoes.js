import React from 'react';
import { add, multiply } from '../../utilites/calculate';

const Shoes = () => {
    const first = 23;
    const second = 40;
    const result = multiply(first, second);
    const sum = add(first , second);
    return (
        <div>
            <h2>This is shoes compo</h2>
            <h2>Result: {result} and total: {sum}</h2>
        </div>
    );
};

export default Shoes;