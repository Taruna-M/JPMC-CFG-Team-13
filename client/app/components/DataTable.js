// app/components/DataTable.js
'use client'
export default function DataTable() {
  const helpRequests = [
    { name: "Ravi Kumar", issue: "Medical Help", status: "Resolved" },
    { name: "Anita Sharma", issue: "Shelter", status: "Pending" },
    { name: "Kiran Das", issue: "Counseling", status: "Resolved" },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-bold text-gray-700 mb-4">Recent Help Requests</h3>
      <table className="min-w-full text-sm text-left">
        <thead>
          <tr className="text-gray-600 border-b">
            <th className="py-2">Name</th>
            <th className="py-2">Issue</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {helpRequests.map((req, index) => (
            <tr key={index} className="border-t text-gray-800">
              <td className="py-2">{req.name}</td>
              <td className="py-2">{req.issue}</td>
              <td className={`py-2 font-bold ${req.status === 'Resolved' ? 'text-green-600' : 'text-red-500'}`}>
                {req.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
