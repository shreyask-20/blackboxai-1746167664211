import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const games = {
  'game1': 'Game One',
  'game2': 'Game Two',
  'game3': 'Game Three',
};

export default function RegistrationPage() {
  const { gameId } = useParams();
  const gameName = games[gameId] || 'Unknown Game';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    teamName: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call backend API to register user for the tournament
      const response = await axios.post('http://localhost:5000/api/register', {
        gameId,
        ...formData,
      });
      setMessage('Registration successful! Check your email for receipt.');
      setFormData({ name: '', email: '', teamName: '' });
    } catch (error) {
      setMessage('Registration failed. Please try again.');
    }
  };

  return (
    <section className="glass p-8 rounded-lg shadow-lg max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">Register for {gameName}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1" htmlFor="name">Name</label>
          <input
            className="w-full p-2 rounded bg-black bg-opacity-20 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="email">Email</label>
          <input
            className="w-full p-2 rounded bg-black bg-opacity-20 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="teamName">Team Name</label>
          <input
            className="w-full p-2 rounded bg-black bg-opacity-20 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            type="text"
            id="teamName"
            name="teamName"
            value={formData.teamName}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-400 text-black font-semibold py-2 rounded hover:bg-yellow-500 transition duration-300"
        >
          Register
        </button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </section>
  );
}
