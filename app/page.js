'use client'
import { motion } from 'framer-motion';
import ChartSection from "./components/ChartSection";
import DataTable from "./components/DataTable";

export default function Home() {
  return (
    <motion.div
      className="space-y-6 px-6 py-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Dashboard Overview</h2>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[250, 45, 12].map((value, idx) => (
          <motion.div
            key={idx}
            className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg transition-transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              {idx === 0 ? "Total Volunteers" : idx === 1 ? "Help Requests" : "Ongoing Projects"}
            </p>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{value}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <ChartSection />

      {/* Table Section */}
      <DataTable />
    </motion.div>
  );
}
