// app/layout.js
import Sidebar from "@/components/SideBar";
import Topbar from "@/components/TopBar";

export default function RootLayout({ children }) {
  return (
    <div className="bg-gray-100">
      <Sidebar />
      <Topbar />
      <div className="ml-64 mt-16 p-6">{children}</div>
    </div>
  );
}
