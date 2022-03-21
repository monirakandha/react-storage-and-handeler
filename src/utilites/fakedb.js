//use localstorges to manage data
const addTodb = id => {
    let shoppingCart = {};
    localStorage.setItem('Shopping-cart', JSON.stringify(shoppingCart));


    const quantity = shoppingCart[id];
    if (quantity){
            console.log('already exsist');
            const newQuantity = parseInt (quantity) + 1;
            shoppingCart[id] = newQuantity;
            // localStorage.setItem(id , newQuantity);
    }
    else{
        console.log('new iteam');
        shoppingCart[id] = 1 ;
        // localStorage.setItem(id , 1);
    }
    
}

export {addTodb}