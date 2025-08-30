import React, { useState } from 'react';

const AdminSidebar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'addEvent', label: 'Add Event', icon: '➕' },
    { id: 'manageEvents', label: 'Manage Events', icon: '📅' },
    { id: 'approveRequest', label: 'Approve Requests', icon: '✅' },
    { id: 'donationAmount', label: 'Donation Settings', icon: '💰' },
    { id: 'yearlyData', label: 'Yearly Data', icon: '📈' },
    { id: 'reports', label: 'Reports', icon: '📋' },
  ];

  return (
    <div className="w-64 bg-gradient-to-b from-indigo-800 to-indigo-900 text-white min-h-screen shadow-xl fixed">
      <div className="p-5 border-b border-indigo-700">
        <h1 className="text-xl font-bold flex items-center">
          <span className="bg-white text-indigo-700 rounded-lg p-1 mr-2">🏠</span>
          Hostel Admin
        </h1>
        <p className="text-indigo-300 text-sm mt-1">Events & Donation Manager</p>
      </div>
      
      <nav className="p-2 mt-2">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id} className="mb-1">
              <button
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-white text-indigo-700 shadow-md font-semibold'
                    : 'text-indigo-100 hover:bg-indigo-700'
                }`}
              >
                <span className="text-lg mr-3">{item.icon}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="absolute bottom-0 w-full p-4 border-t border-indigo-700">
        <button 
          onClick={() => alert('Logging out...')}
          className="w-full flex items-center justify-center px-4 py-2 bg-white text-indigo-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          <span className="mr-2">🚪</span>
          Logout
        </button>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon, color }) => (
  <div className="bg-white rounded-xl shadow-md p-6 flex items-center transition-transform hover:scale-[1.02] hover:shadow-lg">
    <div className={`p-3 rounded-xl ${color} mr-4`}>
      <span className="text-2xl">{icon}</span>
    </div>
    <div>
      <p className="text-gray-500 text-sm">{title}</p>
      <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
    </div>
  </div>
);

const EventCard = ({ event, onDelete }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg">
    <div className="h-48 overflow-hidden relative">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 right-0 m-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded">
        {event.date}
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{event.title}</h3>
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <span className="mr-2">⏰</span>
        {event.time} • {event.location}
      </div>
      <p className="text-sm text-gray-600 line-clamp-2 mb-4">{event.description}</p>
      
      <div className="flex justify-between">
        <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center">
          <span className="mr-1">✏️</span>
          Edit
        </button>
        <button
          className="text-red-600 hover:text-red-800 text-sm font-medium flex items-center"
          onClick={() => onDelete(event.id)}
        >
          <span className="mr-1">🗑️</span>
          Delete
        </button>
      </div>
    </div>
  </div>
);

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [donationAmounts, setDonationAmounts] = useState({
    firstYear: 500,
    secondYear: 750,
    thirdYear: 1000,
    fourthYear: 1250
  });

  // State for events management
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Ganesh Chaturthi 2025",
      date: "2025-08-27",
      time: "11:00 AM",
      location: "MP Theater",
      description: "Join us for an evening of live music performances by talented residents!",
      image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Saraswati Puja 2025",
      date: "2025-02-05",
      time: "6:30 AM",
      location: "Main Hall",
      description: "Celebration of the goddess of knowledge, music, art, speech, wisdom, and learning",
      image: "https://images.unsplash.com/photo-1649859394614-dc4f7290b7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FrYXN3YXRpJTIwcHVqYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Rawan Dhahan 2025",
      date: "2025-10-12",
      time: "8:00 PM",
      location: "Civil Ground",
      description: "Screening of the latest blockbuster. Free popcorn for all!",
      image: "https://images.unsplash.com/photo-1489599102910-59206b8ca314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWUlMjBuaWdodHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80"
    }
  ]);

  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
    image: ''
  });

  // Predefined list of events for the dropdown
  const eventOptions = [
    'Ganesh Chaturthi 2025',
    'Hostel Volleyball League 2025',
    'Hostel Football League 2025',
    'Hostel Cricket League 2025',
    'Hostel Badminton League 2025',
    'Saraswati Puja 2025',
    'Rawan Dhahan 2025'
  ];

  const handleAmountChange = (year, value) => {
    setDonationAmounts(prev => ({
      ...prev,
      [year]: parseInt(value) || 0
    }));
  };

  const saveDonationAmounts = () => {
    alert('Donation amounts saved successfully!');
  };

  const handleEventInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    const event = {
      ...newEvent,
      id: events.length > 0 ? Math.max(...events.map(e => e.id)) + 1 : 1
    };

    setEvents([...events, event]);
    setNewEvent({
      title: '',
      date: '',
      time: '',
      location: '',
      description: '',
      image: ''
    });
    alert('Event added successfully!');
  };

  const handleDeleteEvent = (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      setEvents(events.filter(event => event.id !== id));
      alert('Event deleted successfully!');
    }
  };

  // Sample data for demonstration
  const yearlyData = [
    { year: '1st Year', totalDonations: 12500, students: 250 },
    { year: '2nd Year', totalDonations: 18750, students: 250 },
    { year: '3rd Year', totalDonations: 20000, students: 200 },
    { year: '4th Year', totalDonations: 25000, students: 200 },
  ];

  const pendingRequests = [
    { id: 1, name: 'John Doe', year: '2nd Year', amount: 750, date: '2023-05-15' },
    { id: 2, name: 'Jane Smith', year: '3rd Year', amount: 1000, date: '2023-05-14' },
    { id: 3, name: 'Robert Johnson', year: '1st Year', amount: 500, date: '2023-05-13' },
  ];

  const renderContent = () => {
    switch(activeSection) {
      case 'dashboard':
        return (
          <div className="pt-6">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg p-6 mb-8 text-white">
              <h1 className="text-3xl font-bold mb-2">Dashboard Overview</h1>
              <p className="text-indigo-100">Welcome back! Here's what's happening today.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              <StatCard 
                title="Total Donations" 
                value="₹76,250" 
                icon="💰" 
                color="bg-green-100 text-green-600" 
              />
              <StatCard 
                title="Total Students" 
                value="900" 
                icon="👥" 
                color="bg-blue-100 text-blue-600" 
              />
              <StatCard 
                title="Upcoming Events" 
                value={events.length} 
                icon="📅" 
                color="bg-purple-100 text-purple-600" 
              />
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {events.slice(0, 3).map(event => (
                  <EventCard key={event.id} event={event} onDelete={handleDeleteEvent} />
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Pending Approvals</h2>
                <div className="space-y-4">
                  {pendingRequests.slice(0, 3).map(request => (
                    <div key={request.id} className="flex justify-between items-center p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
                      <div>
                        <h3 className="font-medium text-gray-800">{request.name}</h3>
                        <p className="text-sm text-gray-500">{request.year} • ₹{request.amount}</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 bg-green-100 text-green-600 rounded-md hover:bg-green-200">✅</button>
                        <button className="p-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200">❌</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Donation Summary</h2>
                <div className="space-y-3">
                  {yearlyData.map((data, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">{data.year}</span>
                        <span className="text-sm text-gray-600">₹{data.totalDonations}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-indigo-600 h-2 rounded-full" 
                          style={{ width: `${(data.totalDonations / 30000) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'addEvent':
        return (
          <div className="bg-white rounded-xl shadow-md p-6 pt-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Add New Event</h1>
            <p className="text-gray-600 mb-6">Create and schedule new hostel events</p>
            
            <form className="space-y-6" onSubmit={handleAddEvent}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Event Title</label>
                  <select
                    name="title"
                    value={newEvent.title}
                    onChange={handleEventInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  >
                    <option value="">Select an Event</option>
                    {eventOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Event Location</label>
                  <input
                    type="text"
                    name="location"
                    value={newEvent.location}
                    onChange={handleEventInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Event Description</label>
                <textarea
                  rows="4"
                  name="description"
                  value={newEvent.description}
                  onChange={handleEventInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Event Date</label>
                  <input
                    type="date"
                    name="date"
                    value={newEvent.date}
                    onChange={handleEventInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Event Time</label>
                  <input
                    type="time"
                    name="time"
                    value={newEvent.time}
                    onChange={handleEventInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Event Image URL</label>
                  <input
                    type="text"
                    name="image"
                    value={newEvent.image}
                    onChange={handleEventInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Paste image URL here"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button 
                  type="submit" 
                  className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-md transition-colors"
                >
                  Create Event
                </button>
              </div>
            </form>
          </div>
        );

      case 'manageEvents':
        return (
          <div className="bg-white rounded-xl shadow-md p-6 pt-8">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Manage Events</h1>
                <p className="text-gray-600">View, edit and delete hostel events</p>
              </div>
              <button 
                onClick={() => setActiveSection('addEvent')}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center shadow-md"
              >
                <span className="mr-2">➕</span>
                Add Event
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map(event => (
                <EventCard key={event.id} event={event} onDelete={handleDeleteEvent} />
              ))}
            </div>
          </div>
        );

      case 'approveRequest':
        return (
          <div className="bg-white rounded-xl shadow-md p-6 pt-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Approve Donation Requests</h1>
            <p className="text-gray-600 mb-6">Review and approve pending donation requests</p>

            <div className="overflow-x-auto rounded-lg shadow">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {pendingRequests.map((request) => (
                    <tr key={request.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0 bg-indigo-100 rounded-full flex items-center justify-center">
                            <span className="text-indigo-800 font-medium">{request.name.charAt(0)}</span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{request.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.year}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{request.amount}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-green-600 hover:text-green-900 mr-3 bg-green-100 px-3 py-1 rounded-md hover:bg-green-200">Approve</button>
                        <button className="text-red-600 hover:text-red-900 bg-red-100 px-3 py-1 rounded-md hover:bg-red-200">Reject</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'donationAmount':
        return (
          <div className="bg-white rounded-xl shadow-md p-6 pt-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Set Donation Amounts</h1>
            <p className="text-gray-600 mb-6">Configure donation amounts for each academic year</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {Object.entries(donationAmounts).map(([year, amount]) => (
                <div key={year} className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-medium text-gray-800 mb-3">
                    {year.replace('Year', ' Year').replace('first', '1st').replace('second', '2nd').replace('third', '3rd').replace('fourth', '4th')}
                  </h3>
                  <div className="flex items-center">
                    <span className="text-gray-600 mr-2 bg-gray-100 p-2 rounded-l-lg border-r border-gray-200">₹</span>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => handleAmountChange(year, e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                onClick={saveDonationAmounts}
                className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-md"
              >
                Save Changes
              </button>
            </div>
          </div>
        );

      case 'yearlyData':
        return (
          <div className="bg-white rounded-xl shadow-md p-6 pt-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Year-wise Donation Data</h1>
            <p className="text-gray-600 mb-6">Analytics of donations across academic years</p>

            <div className="overflow-x-auto rounded-lg shadow mb-8">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Academic Year</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Donations</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Number of Students</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Average per Student</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {yearlyData.map((data, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white hover:bg-gray-50' : 'bg-gray-50 hover:bg-gray-100'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{data.year}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{data.totalDonations}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.students}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{data.totalDonations / data.students}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Visual Representation</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {yearlyData.map((data, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{data.year}</span>
                      <span className="text-sm text-gray-500">₹{data.totalDonations}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-indigo-600 h-2.5 rounded-full"
                        style={{ width: `${(data.totalDonations / 30000) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'reports':
        return (
          <div className="bg-white rounded-xl shadow-md p-6 pt-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Generate Reports</h1>
            <p className="text-gray-600 mb-6">Create and download various reports</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="border border-gray-200 rounded-xl p-5 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                <div className="p-3 rounded-xl bg-indigo-100 text-indigo-600 mb-3">
                  <span className="text-2xl">📅</span>
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Monthly Report</h3>
                <p className="text-gray-600 mb-4 text-sm">Generate a detailed report of donations for a specific month</p>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm shadow-md">
                  Generate Report
                </button>
              </div>

              <div className="border border-gray-200 rounded-xl p-5 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                <div className="p-3 rounded-xl bg-green-100 text-green-600 mb-3">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Yearly Report</h3>
                <p className="text-gray-600 mb-4 text-sm">Generate a comprehensive report of donations for the academic year</p>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm shadow-md">
                  Generate Report
                </button>
              </div>

              <div className="border border-gray-200 rounded-xl p-5 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                <div className="p-3 rounded-xl bg-yellow-100 text-yellow-600 mb-3">
                  <span className="text-2xl">👤</span>
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Student-wise Report</h3>
                <p className="text-gray-600 mb-4 text-sm">Generate reports for individual student donation history</p>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm shadow-md">
                  Generate Report
                </button>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Recent Generated Reports</h3>
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <span className="text-gray-400 text-4xl mb-2 inline-block">📄</span>
                <p className="text-gray-500">No reports generated yet</p>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-white rounded-xl shadow-md p-6 pt-8">
            <h1 className="text-2xl font-bold text-gray-800">Welcome to Admin Dashboard</h1>
            <p className="text-gray-600 mt-2">Select an option from the sidebar to get started.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      <AdminSidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="flex-1 p-6 overflow-auto ml-64">
        <div className="max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;