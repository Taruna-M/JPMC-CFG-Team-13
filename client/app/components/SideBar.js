// app/components/Sidebar.js

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white shadow-lg fixed top-0 left-0 p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-8">NGO Dashboard</h2>
      <ul className="space-y-4 text-lg font-semibold text-gray-700">
        <li className="hover:text-blue-500 cursor-pointer">Home</li>
        <li className="hover:text-blue-500 cursor-pointer">Analytics</li>
        <li className="hover:text-blue-500 cursor-pointer">Volunteers</li>
        <li className="hover:text-blue-500 cursor-pointer">Reports</li>
        <li className="hover:text-blue-500 cursor-pointer">Help Requests</li>
      </ul>
    </aside>
  );
}
