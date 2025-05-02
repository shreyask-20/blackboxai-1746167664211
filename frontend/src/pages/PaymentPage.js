import React, { useState } from 'react';

export default function PaymentPage() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [message, setMessage] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();
    // Mock payment processing
    setMessage('Payment processed successfully! Thank you for your purchase.');
    setCardNumber('');
    setExpiry('');
    setCvv('');
  };

  return (
    <section className="glass p-8 rounded-lg shadow-lg max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">Payment</h1>
      <form onSubmit={handlePayment} className="space-y-4">
        <div>
          <label className="block mb-1" htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
            maxLength={16}
            className="w-full p-2 rounded bg-black bg-opacity-20 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="expiry">Expiry Date</label>
          <input
            type="text"
            id="expiry"
            placeholder="MM/YY"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            required
            maxLength={5}
            className="w-full p-2 rounded bg-black bg-opacity-20 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="cvv">CVV</label>
          <input
            type="password"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
            maxLength={3}
            className="w-full p-2 rounded bg-black bg-opacity-20 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-400 text-black font-semibold py-2 rounded hover:bg-yellow-500 transition duration-300"
        >
          Pay Now
        </button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </section>
  );
}
