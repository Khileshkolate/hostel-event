// // AdminSidebar.jsx
// import React from 'react';

// const AdminSidebar = ({ activeSection, setActiveSection }) => {
//   const menuItems = [
//     { id: 'dashboard', label: 'Dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
//     { id: 'addEvent', label: 'Add Event', icon: 'M12 4v16m8-8H4' },
//     { id: 'approveRequest', label: 'Approve Requests', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
//     { id: 'donationAmount', label: 'Set Donation Amount', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
//     { id: 'yearlyData', label: 'Year-wise Data', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
//     { id: 'reports', label: 'Reports', icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
//   ];

//   return (
//     <div className="bg-indigo-800 text-purple-100 w-64 min-h-screen space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
//       <div className="text-white flex items-center space-x-2 px-4">
//         <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//         </svg>
//         <span className="text-2xl font-extrabold">Admin Panel</span>
//       </div>

//       <nav>
//         {menuItems.map((item) => (
//           <button
//             key={item.id}
//             onClick={() => setActiveSection(item.id)}
//             className={`w-full flex items-center space-x-3 py-3 px-4 rounded-lg transition-colors duration-200 ${
//               activeSection === item.id
//                 ? 'bg-indigo-700 text-white shadow-lg'
//                 : 'text-indigo-100 hover:bg-indigo-600'
//             }`}
//           >
//             <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
//             </svg>
//             <span>{item.label}</span>
//           </button>
//         ))}
//       </nav>
//     </div>
//   );
// };

// export default AdminSidebar;









// AdminSidebar.jsx
import React from 'react';

const AdminSidebar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'addEvent', label: 'Add Event', icon: '➕' },
    { id: 'manageEvents', label: 'Manage Events', icon: '📅' },
    { id: 'approveRequest', label: 'Approve Requests', icon: '✅' },
    { id: 'donationAmount', label: 'Donation Amount', icon: '💰' },
    { id: 'yearlyData', label: 'Yearly Data', icon: '📈' },
    { id: 'reports', label: 'Reports', icon: '📋' },
  ];

  return (
    <div className="w-64 bg-gray-800 text-white">
      <div className="p-4 text-xl font-semibold border-b border-gray-700">
        Admin Panel
      </div>
      <nav className="p-2">
        {menuItems.map(item => (
          <button
            key={item.id}
            className={`w-full flex items-center px-4 py-3 rounded-lg mb-1 transition-colors ${
              activeSection === item.id ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:bg-gray-700'
            }`}
            onClick={() => setActiveSection(item.id)}
          >
            <span className="mr-3 text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default AdminSidebar;