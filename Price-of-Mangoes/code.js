const mango = (quantity, price) => {
    let quantty = quantity - Math.floor(quantity / 3);
    return quantty * price
}

