import React from 'react';
import { Link } from 'react-router-dom';
import { RiGift2Line, RiPaletteLine, RiFileList2Line, RiHistoryLine, RiLogoutBoxLine, RiDashboardLine, RiSettings3Line, RiEarthLine } from 'react-icons/ri'; // Importing the required icons

class AdminLeftbar extends React.Component {
  render() {
    const { logout, settings } = this.props; // Extracting logout and settings from props

    return (
      <div className="left-sidebar bg-gradient-to-br rounded-lg from-purple-700 to-purple-100 text-white w-48 py-6 px-4">
        <Link to="/admin/dashboard" className="block w-full text-left py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition duration-300 mb-4 border-b border-gray-600">
          <RiDashboardLine className="inline-block mr-2" />
          Dashboard
        </Link>
        <Link to="/admin/recent" className="block w-full text-left py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition duration-300 mb-4 border-b border-gray-600">
          <RiGift2Line className="inline-block mr-2" />
          Events
        </Link>
        <Link to="/admin/upcoming" className="block w-full text-left py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition duration-300 mb-4 border-b border-gray-600">
          <RiPaletteLine className="inline-block mr-2" />
          Payments
        </Link>
        <Link to="/admin/services" className="block w-full text-left py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition duration-300 mb-4 border-b border-gray-600">
          <RiFileList2Line className="inline-block mr-2" />
          Feedbacks
        </Link>
        <Link to="/admin/feedback" className="block w-full text-left py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition duration-300 mb-4 border-b border-gray-600">
          <RiHistoryLine className="inline-block mr-2" />
          Services
        </Link>
        <Link to="/admin/category" className="block w-full text-left py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition duration-300 mb-4 border-b border-gray-600">
              <RiEarthLine className="inline-block mr-2" /> {/* Changed icon to RiSettings3Line */}
              Categories
        </Link>
       <Link to="/admin/setting" className="block w-full text-left py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition duration-300 mb-4 border-b border-gray-600">
              <RiSettings3Line className="inline-block mr-2" /> {/* Changed icon to RiSettings3Line */}
              Settings
               </Link>
        
        <div className="flex flex-col justify-between h-full">
          <div> {/* Empty div to push Logout button to bottom */}
          <Link to="/">
            <button onClick={logout} className="bg-blue-500 block w-full text-white py-2 px-4 rounded hover:bg-blue-500 transition duration-300">
              <RiLogoutBoxLine className="inline-block mr-2" />
              Logout
            </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminLeftbar;