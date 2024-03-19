import React from 'react'
import UserTitlebar from '../../components/Shared/UserTitlebar'

const UserDashboard = () => {
    return (
        <>
            <UserTitlebar Title='Dashboard' />

        <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">User Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-5xl font-semibold mb-5">Recent Events</h2>
          <div className="flex flex-col gap-4">
           
              <div className="flex items-center gap-2">
                <img src="https://i.pinimg.com/736x/96/70/39/9670393af0ab983cc56419c7abd6469g5.jp" alt="cake" className="w-20 h-25 rounded-full"/>
                <div>
                  <h3 className="text-lg font-semibold"> Sweet 16 </h3>
                  <p className="text-gray-600">Category: Birthday Party</p>
                  <p className="text-gray-600">Event Date: January 1, 2024</p>
                  <p className="text-gray-600">Venue: ITC Grand Chola </p>
                  <p className="text-gray-600">Budgetted On: $100</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAOssvCwQ-QvMdCm0Au6j_JXHTH4Xzy_3nlg&usqp=CAU" alt="Product Image" className="w-20 h-20 rounded-full" />
                <div>
                  <h3 className="text-lg font-semibold"> Bridal Bliss Bash</h3>
                  <p className="text-gray-600"> Category : Bachelorette Party </p>
                  <p className="text-gray-600"> Event Date: January 10, 2024</p>
                  <p className="text-gray-600"> Venue: Taj Coromandel </p>
                  <p className="text-gray-600"> Budgetted On : $300</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <img src="https://www.winni.in/celebrate-relations/wp-content/uploads/2019/06/Corporate-Party-With-5-Amazing-Ideas.jpg" alt="Product Image" className="w-20 h-20 rounded-full" />
                <div>
                  <h3 className="text-lg font-semibold"> Innovation Mixer </h3>
                  <p className="text-gray-600"> Category : Corporate Party </p>
                  <p className="text-gray-600"> Event Date: January 31, 2024</p>
                  <p className="text-gray-600"> Venue: Park Hyatt </p>
                  <p className="text-gray-600"> Budgetted On : $300</p>
                </div>
              </div>
          

          
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-5xl font-semibold mb-2"> Plan My Next Event </h2>
          <div className="divide-y divide-gray-200">
            <div className="account-item p-4 hover:bg-blue-100 transition duration-300">
              <p className="text-gray-600">Username: Ram</p>
              <p className="text-gray-600">Email: Ram@gmail.com</p>
              <p className="text-gray-600">Membership: Premium</p>
            </div>
            <hr className="my-4" />
            <div className="account-item p-4 hover:bg-blue-100 transition duration-300">
              <p className="text-gray-600">Username: Radha</p>
              <p className="text-gray-600">Email: Radha@gmail.com</p>
              <p className="text-gray-600">Membership: Premium</p>
            </div>
            <hr className="my-4" />
            <div className="account-item p-4 hover:bg-blue-100 transition duration-300">
              <p className="text-gray-600">Username: Daisy</p>
              <p className="text-gray-600">Email: Daisy@gmail.com</p>
              <p className="text-gray-600">Membership: Premium</p>
            </div>
            <hr className="my-4" />
          </div>
        </div>


        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-5xl font-semibold mb-2"> Settings </h2>
          <div>
            <p className="text-gray-600">Notifications: On</p>
            <p className="text-gray-600">Theme: Light</p>
            <p className="text-gray-600">Language: English</p>
          </div>
        </div>
      </div>
    </div>


        </>
    )
}

export default UserDashboard