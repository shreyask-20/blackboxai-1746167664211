import React, { useState } from 'react';

const availableGames = [
  { id: 'game1', name: 'Game One', price: 29.99 },
  { id: 'game2', name: 'Game Two', price: 49.99 },
  { id: 'game3', name: 'Game Three', price: 39.99 },
];

export default function GamePage() {
  const [games, setGames] = useState(availableGames);
  const [message, setMessage] = useState('');

  const purchaseGame = (id) => {
    setMessage(`You have purchased ${games.find(g => g.id === id).name}. Thank you!`);
  };

  const returnGame = (id) => {
    setMessage(`You have returned ${games.find(g => g.id === id).name}. Refund will be processed.`);
  };

  return (
    <section className="glass p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-6">Games Store</h1>
      {message && <p className="mb-4 text-yellow-300 font-semibold">{message}</p>}
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {games.map((game) => (
          <li key={game.id} className="glass p-4 rounded-lg shadow hover:scale-105 transform transition duration-300 cursor-pointer">
            <h2 className="text-2xl font-semibold mb-2">{game.name}</h2>
            <p className="mb-4">${game.price.toFixed(2)}</p>
            <div className="flex space-x-4">
              <button
                onClick={() => purchaseGame(game.id)}
                className="flex-1 bg-yellow-400 text-black font-semibold py-2 rounded hover:bg-yellow-500 transition duration-300"
              >
                Purchase
              </button>
              <button
                onClick={() => returnGame(game.id)}
                className="flex-1 bg-red-600 text-white font-semibold py-2 rounded hover:bg-red-700 transition duration-300"
              >
                Return
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
