import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';

const borrowingTrendData = [
  { week: 'W1', val: 300 }, { week: 'W1', val: 450 }, { week: 'W2', val: 400 }, 
  { week: 'W2', val: 380 }, { week: 'W3', val: 500 }, { week: 'W3', val: 480 },
  { week: 'W4', val: 600 }, { week: 'W4', val: 550 }, { week: 'W5', val: 700 }
];
// Smoothed data roughly matching the curve
const smoothData = [
    { name: 'Week 1', val: 25 }, { name: '1.2', val: 60 }, { name: '1.5', val: 50 },
    { name: 'Week 2', val: 30 }, { name: '2.2', val: 65 }, { name: '2.5', val: 40 },
    { name: 'Week 3', val: 55 }, { name: '3.2', val: 20 }, { name: '3.5', val: 70 },
    { name: 'Week 4', val: 45 }, { name: '4.2', val: 80 }
];

const registrationData = [
  { name: '1', val: 30 }, { name: '2', val: 50 }, { name: '3', val: 25 }, 
  { name: '4', val: 60 }, { name: '5', val: 20 }, { name: '6', val: 35 }, { name: '7', val: 45 }
];

export const Reports: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <header className="flex flex-wrap justify-between items-center gap-4">
         <div>
            <h1 className="text-4xl font-black text-slate-900 dark:text-white">Reports & Statistics</h1>
            <p className="text-slate-500 mt-1">View key library metrics and generate reports.</p>
         </div>
         <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg font-medium text-sm hover:bg-slate-50">
               <span className="material-symbols-outlined text-base">picture_as_pdf</span> Download as PDF
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg font-medium text-sm hover:bg-slate-50">
               <span className="material-symbols-outlined text-base">grid_on</span> Download as Excel
            </button>
         </div>
      </header>

      <div className="flex gap-3 overflow-x-auto pb-2">
         <button className="px-4 py-1.5 bg-primary-600 text-white rounded-lg text-sm font-medium">Last 30 Days</button>
         <button className="px-4 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300">This Month</button>
         <button className="px-4 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300">This Year</button>
         <button className="px-4 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2"><span className="material-symbols-outlined text-base">calendar_month</span> Custom Range</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         {/* Borrowing Trends */}
         <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="flex justify-between mb-4">
               <h3 className="font-medium text-slate-900 dark:text-white">Borrowing Trends</h3>
               <a href="#" className="text-primary-600 text-sm hover:underline">View Details</a>
            </div>
            <p className="text-3xl font-bold text-slate-900 dark:text-white mb-1">1,234</p>
            <div className="flex gap-2 text-sm mb-6">
               <span className="text-slate-500">Total borrows this month</span>
               <span className="text-green-600 font-medium flex items-center"><span className="material-symbols-outlined text-sm">arrow_upward</span> +12.5%</span>
            </div>
            <div className="h-[200px]">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={smoothData}>
                     <defs>
                        <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="5%" stopColor="#1973f0" stopOpacity={0.2}/>
                           <stop offset="95%" stopColor="#1973f0" stopOpacity={0}/>
                        </linearGradient>
                     </defs>
                     <Area type="monotone" dataKey="val" stroke="#1973f0" strokeWidth={3} fillOpacity={1} fill="url(#colorVal)" />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
            <div className="flex justify-around text-xs text-slate-500 font-bold mt-2">
               <span>Week 1</span><span>Week 2</span><span>Week 3</span><span>Week 4</span>
            </div>
         </div>

         {/* Overdue Items */}
         <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col gap-6 justify-center">
             <div className="flex justify-between items-center">
                <h3 className="font-medium text-slate-900 dark:text-white">Overdue Items</h3>
                <a href="#" className="text-primary-600 text-sm hover:underline">View Details</a>
             </div>
             <div>
                <p className="text-4xl font-bold text-red-600 mb-1">84</p>
                <p className="text-sm text-slate-500">Total items overdue</p>
             </div>
             <div>
                <p className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-1">12 Days</p>
                <p className="text-sm text-slate-500">Average days overdue</p>
             </div>
         </div>

         {/* New Users */}
         <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
             <div className="flex justify-between mb-2">
               <h3 className="font-medium text-slate-900 dark:text-white">New User Registrations</h3>
               <a href="#" className="text-primary-600 text-sm hover:underline">View Details</a>
             </div>
             <p className="text-3xl font-bold text-slate-900 dark:text-white mb-1">45</p>
             <div className="flex gap-2 text-sm mb-6">
               <span className="text-slate-500">New users this month</span>
               <span className="text-green-600 font-medium flex items-center"><span className="material-symbols-outlined text-sm">arrow_upward</span> +5.2%</span>
             </div>
             <div className="h-[100px]">
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={registrationData}>
                     <Bar dataKey="val" fill="#1973f0" radius={[4, 4, 4, 4]} barSize={20} />
                  </BarChart>
               </ResponsiveContainer>
             </div>
         </div>

         {/* Book Inventory Donut */}
         <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="flex justify-between items-center mb-6">
               <h3 className="font-medium text-slate-900 dark:text-white">Book Inventory Overview</h3>
               <a href="#" className="text-primary-600 text-sm hover:underline">View Details</a>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
               <div className="relative w-40 h-40 flex items-center justify-center">
                  <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                     <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e2e8f0" strokeWidth="3" />
                     <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831" fill="none" stroke="#1973f0" strokeWidth="3" strokeDasharray="65, 100" />
                     <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831" fill="none" stroke="#f97316" strokeWidth="3" strokeDasharray="25, 100" strokeDashoffset="-65" />
                     <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831" fill="none" stroke="#facc15" strokeWidth="3" strokeDasharray="10, 100" strokeDashoffset="-90" />
                  </svg>
                  <div className="absolute text-center">
                     <p className="text-2xl font-bold text-slate-900 dark:text-white">15,782</p>
                     <p className="text-xs text-slate-500">Total Books</p>
                  </div>
               </div>
               <div className="space-y-3">
                  <div className="flex items-center gap-3">
                     <span className="w-3 h-3 rounded-full bg-primary-600"></span>
                     <span className="text-sm text-slate-700 dark:text-slate-300">Available (65%)</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                     <span className="text-sm text-slate-700 dark:text-slate-300">Borrowed (25%)</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                     <span className="text-sm text-slate-700 dark:text-slate-300">On Hold (10%)</span>
                  </div>
               </div>
            </div>
         </div>

      </div>
    </div>
  );
};