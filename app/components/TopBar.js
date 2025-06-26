// app/components/Topbar.js

export default function Topbar() {
  return (
    <header className="h-16 bg-white shadow-md fixed top-0 left-64 right-0 flex items-center justify-between px-6 z-10">
      <h1 className="text-xl font-bold text-gray-800">Welcome, Volunteer!</h1>
      <div className="flex items-center gap-4">
        <button className="text-sm font-semibold text-blue-600 hover:underline">Notifications</button>
        <button className="text-sm font-semibold text-red-500 hover:underline">Logout</button>
      </div>
    </header>
  );
}
