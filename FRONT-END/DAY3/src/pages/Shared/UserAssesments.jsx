import React from 'react';
import party from '../../assets/img/party10.jpg'

const Myorder= () => {
  const orders = [
    { id: 1,name:'Igniters Mix',category:'Corporate Party', date: '2024-01-31', venue:'Taj Coromandal',num:40, total: 25.99, status: 'Completed' },
    { id: 2,name:'Sweet 16',category:'Birthday Party', date: '2024-03-24', venue:'ITC Grand Chola',num:22, total: 35.50, status: 'Completed' },
    { id: 3, name:'Wildest Dreams',category:'Karaoke Night', date: '2024-03-15', venue:'The Leela Palace',num:10, total: 19.95, status: 'Upcoming' },
    { id: 4, name:'Hope and Harmony', category:'Charity Gala', date: '2024-03-15', venue:'The Leela Palace',num:10, total: 19.95, status: 'Upcoming' },
    { id: 5, name:'Reconnect', category:'Reunion', date: '2024-03-15', venue:'The Leela Palace',num:10, total: 19.95, status: 'Cancelled' },
    { id: 6, name:'Reconnect', category:'Reunion', date: '2024-03-15', venue:'The Leela Palace',num:10, total: 19.95, status: 'Cancelled' },
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">My Events</h1>
      
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {orders.map(order => (
          
          <div key={order.id} className="bg-gradient-to-br rounded-lg from-purple-400 via-purple-200 to-pink-100, shadow-2xl border p-4">
            <h2 className="text-xl text-black font-semibold mb-2"> Event {order.id}</h2>
            <h2 className="text-3xl text-yellow-800 font-semibold mb-2"> {order.name}</h2>
            <h2 className="text-2xl text-black font-semibold mb-2"> Category: {order.category}</h2>
            <h2 className={`text-2xl font-semibold ${order.status === 'Completed' ? 'text-green-600' : order.status === 'Upcoming' ? 'text-blue-600' : 'text-red-600'}`}>Status: {order.status}</h2>
            <p className="text-gray text-2xl mb-2">Date: {order.date}</p>
            <p className="text-gray text-2xl mb-2">Venue: {order.venue}</p>
            <p className="text-gray text-2xl mb-2">Number of Guests: {order.num}</p>
            <p className="text-gray text-2xl mb-2">Budget: ${order.total}</p>
          </div>
        ))}
      </div>
    </div>
    
  );
}

export default Myorder;
