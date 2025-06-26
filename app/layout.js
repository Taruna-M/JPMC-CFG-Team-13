// app/layout.js

import './globals.css';
import Sidebar from './components/SideBar';
import Topbar from './components/TopBar';

export const metadata = {
  title: 'NGO Dashboard',
  description: 'Analytics Dashboard for NGO Volunteers and Help Seekers',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Sidebar />
        <Topbar />
        <div className="ml-64 mt-16 p-6">{children}</div>
      </body>
    </html>
  );
}
