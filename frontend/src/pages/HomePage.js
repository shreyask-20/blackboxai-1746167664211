import React from 'react';

export default function HomePage() {
  return (
    <section className="glass p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-4">Welcome to GameTourny</h1>
      <p className="text-lg mb-6">
        Join exciting gaming tournaments, register for your favorite games, and compete with players worldwide.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass p-4 rounded-lg hover:scale-105 transform transition duration-300 cursor-pointer">
          <h2 className="text-2xl font-semibold mb-2">Tournaments</h2>
          <p>Explore upcoming tournaments and register to participate.</p>
        </div>
        <div className="glass p-4 rounded-lg hover:scale-105 transform transition duration-300 cursor-pointer">
          <h2 className="text-2xl font-semibold mb-2">News</h2>
          <p>Stay updated with the latest gaming news and announcements.</p>
        </div>
        <div className="glass p-4 rounded-lg hover:scale-105 transform transition duration-300 cursor-pointer">
          <h2 className="text-2xl font-semibold mb-2">Games</h2>
          <p>Purchase and return games easily through our platform.</p>
        </div>
      </div>
    </section>
  );
}
