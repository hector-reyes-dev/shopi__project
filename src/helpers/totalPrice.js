/**
 * This function calculates total price of an order
 * @param {Array} products cartProducts: Array of Objects
 * @returns {number} Total price
 */
export const totalPrice = (products) => {
  return products.reduce((sum, product) => sum + product.price, 0);
};
