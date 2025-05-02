import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import RegistrationPage from './pages/RegistrationPage';
import PaymentPage from './pages/PaymentPage';
import CartPage from './pages/CartPage';
import GamePage from './pages/GamePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 text-white">
        <Navbar />
        <main className="p-6 max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/register/:gameId" element={<RegistrationPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/games" element={<GamePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
