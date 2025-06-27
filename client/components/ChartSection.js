// app/components/ChartSection.js
'use client'
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';

const data = [
  { name: 'Jan', volunteers: 30 },
  { name: 'Feb', volunteers: 45 },
  { name: 'Mar', volunteers: 60 },
  { name: 'Apr', volunteers: 80 },
];

const pieData = [
  { name: 'Resolved', value: 70 },
  { name: 'Pending', value: 30 },
];

const COLORS = ['#34d399', '#f87171'];

export default function ChartSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Bar Chart */}
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h3 className="text-lg font-bold text-gray-700 mb-4">Monthly Volunteers Joined</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="volunteers" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h3 className="text-lg font-bold text-gray-700 mb-4">Help Requests Status</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
