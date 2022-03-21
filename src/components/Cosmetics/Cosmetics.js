import React from 'react';

const Cosmetics = () => {
    const cosmetics = [
        {id:1 , name: 'Alta' , price:100},
        {id:2 , name: 'Mlta' , price:200},
        {id:3 , name: 'Klta' , price:300},
        {id:4 , name: 'Jlta' , price:400},
        {id:5 , name: 'Hlta' , price:500},
        {id:6 , name: 'Olta' , price:600},
    ]
    return (
        <div>
            <h1>Welcome to my cosmetics store</h1>
           {
               cosmetics.map(cosmetic => console.log(cosmetic))
           }
        </div>
    );
};

export default Cosmetics;