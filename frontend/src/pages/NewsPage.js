import React from 'react';

const newsItems = [
  {
    id: 1,
    title: 'New Tournament Announced!',
    date: '2024-06-01',
    content: 'We are excited to announce a new tournament for the popular game XYZ. Register now to secure your spot!',
  },
  {
    id: 2,
    title: 'Platform Update',
    date: '2024-05-20',
    content: 'Our platform has been updated with new features including improved payment options and game returns.',
  },
  {
    id: 3,
    title: 'Game Sale Event',
    date: '2024-05-15',
    content: 'Enjoy discounts on select games during our summer sale event. Check out the Games page for details.',
  },
];

export default function NewsPage() {
  return (
    <section className="glass p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-6">Latest News</h1>
      <ul className="space-y-6">
        {newsItems.map((item) => (
          <li key={item.id} className="border-b border-white border-opacity-20 pb-4">
            <h2 className="text-2xl font-semibold">{item.title}</h2>
            <p className="text-sm text-yellow-300 mb-2">{new Date(item.date).toLocaleDateString()}</p>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
