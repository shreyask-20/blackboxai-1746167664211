import React, { useState } from 'react';

const initialCart = [
  { id: 'game1', name: 'Game One', price: 29.99 },
  { id: 'game2', name: 'Game Two', price: 49.99 },
];

export default function CartPage() {
  const [cart, setCart] = useState(initialCart);

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <section className="glass p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4 mb-6">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center border-b border-white border-opacity-20 pb-2">
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-yellow-300">${item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded transition duration-300"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="text-right text-2xl font-bold mb-4">Total: ${totalPrice}</div>
          <button
            className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded hover:bg-yellow-500 transition duration-300"
            onClick={() => alert('Proceed to payment page')}
          >
            Proceed to Payment
          </button>
        </>
      )}
    </section>
  );
}
