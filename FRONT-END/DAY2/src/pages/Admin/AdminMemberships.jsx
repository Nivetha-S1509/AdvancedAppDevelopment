import React, { useState } from 'react';

const AdminOrder = () => {
  const [orders, setOrders] = useState([
    { id: 1,name:'Deepika',pname:'Igniters Mix',category:'Corporate Party', date: '2024-01-31', venue:'Taj Coromandal', total: 25.99, status: 'Completed' },
    { id: 2,name:'Shaheer',pname:'Sweet 16',category:'Birthday Party', date: '2024-03-24', venue:'ITC Grand Chola', total: 35.50, status: 'Completed' },
    { id: 3, name:'Rashmi',pname:'Wildest Dreams',category:'Karaoke Night', date: '2024-03-15', venue:'The Leela Palace',total: 19.95, status: 'Upcoming' },
    { id: 4, name:'Adelaine',pname:'Hope and Harmony', category:'Charity Gala', date: '2024-03-15', venue:'Fisherman Cove',total: 19.95, status: 'Upcoming' },
    { id: 5, name:'Amir',pname:'Reconnect', category:'Reunion', date: '2024-03-15', venue:'Le Meridien', total: 19.95, status: 'Upcoming' },
  ]);

  return (
    <main className="p-4">
      <div className="bg-white rounded-lg shadow-2xl p-6">
        <h2 className="text-2xl font-bold mb-4">EVENTS</h2>
        <table className="table-auto w-full text-xl">
          <thead>
            <tr className="bg-purple-300">
              <th className="px-4 py-2 text-gray-800">BookingID</th>
              <th className="px-4 py-2 text-gray-800">User Name</th>
              <th className="px-4 py-2 text-gray-800">Party Name </th>
              <th className="px-4 py-2 text-gray-800">Category </th>
              <th className="px-4 py-2 text-gray-800">Date</th>
              <th className="px-4 py-2 text-gray-800">Venue</th>
              <th className="px-4 py-2 text-gray-800">Budget</th>
              <th className="px-4 py-2 text-gray-800">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100 hover:bg-blue-200" : "bg-gray-200 hover:bg-gray-300"}>
                <td className="border px-4 py-2">{order.id}</td>
                <td className="border px-4 py-2 text-purple-700">{order.name}</td>
                <td className="border px-4 py-2 text-green-700">{order.pname}</td>
                <td className="border px-4 py-2 text-red-700">{order.category}</td>
                <td className="border px-4 py-2 text-yellow-700">{order.date}</td>
                <td className="border px-4 py-2 text-yellow-700">{order.venue}</td>
                <td className="border px-4 py-2 text-yellow-700">{order.total}</td>
                <td className="border px-4 py-2 text-yellow-700">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default AdminOrder;