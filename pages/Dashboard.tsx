import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';

const monthlyData = [
  { name: 'Jan', val: 400 },
  { name: 'Feb', val: 300 },
  { name: 'Mar', val: 600 },
  { name: 'Apr', val: 200 },
  { name: 'May', val: 500 },
  { name: 'Jun', val: 750 },
];

const categoryData = [
  { name: 'Fiction', value: 60, color: '#1973f0' },
  { name: 'Non-Fiction', value: 25, color: '#25c9b0' },
  { name: 'Science', value: 15, color: '#f5a623' },
];

const StatCard = ({ title, value, icon, subtext }: { title: string; value: string; icon: string; subtext?: string }) => (
  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg text-primary-600 dark:text-primary-400">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <h3 className="text-slate-600 dark:text-slate-400 font-medium">{title}</h3>
    </div>
    <div className="flex items-end justify-between">
        <p className="text-3xl font-bold text-slate-900 dark:text-white">{value}</p>
        {subtext && <span className="text-primary-600 text-sm font-medium hover:underline cursor-pointer">{subtext}</span>}
    </div>
  </div>
);

export const Dashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Library Overview</h1>
          <p className="text-slate-500 mt-1">Last Updated: Just now</p>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Books" value="15,234" icon="menu_book" />
        <StatCard title="Books Borrowed" value="847" icon="bookmark_added" />
        <StatCard title="Active Members" value="1,205" icon="person" />
        <StatCard title="Pending Requests" value="12" icon="pending_actions" subtext="View All" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Book Categories Donut */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Book Categories</h3>
          <div className="flex-1 relative min-h-[250px]">
             <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={100}
                    paddingAngle={0}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
             </ResponsiveContainer>
             <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-sm text-slate-500">Total</span>
                <span className="text-3xl font-bold text-slate-900 dark:text-white">15,234</span>
             </div>
          </div>
          <div className="flex justify-center gap-4 mt-4 flex-wrap">
             {categoryData.map((cat) => (
               <div key={cat.name} className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }}></span>
                  <span className="text-sm text-slate-600 dark:text-slate-300">{cat.name} ({cat.value}%)</span>
               </div>
             ))}
          </div>
        </div>

        {/* Borrowing Trends Bar */}
        <div className="lg:col-span-3 bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
           <div className="flex justify-between items-start mb-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Monthly Borrowing Trends</h3>
              <div className="flex items-center gap-1 text-green-600 bg-green-50 px-2 py-1 rounded text-sm font-medium">
                 <span className="material-symbols-outlined text-sm">arrow_upward</span> 2.1%
              </div>
           </div>
           <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                  <Tooltip 
                    cursor={{ fill: 'transparent' }}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="val" radius={[6, 6, 0, 0]} barSize={40}>
                    {monthlyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === monthlyData.length - 1 ? '#1973f0' : '#cbd5e1'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
           </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-200 dark:border-slate-700">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Most Popular Books</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 dark:bg-slate-900 text-slate-500 font-medium">
              <tr>
                <th className="px-6 py-4 w-16">Rank</th>
                <th className="px-6 py-4">Book Title</th>
                <th className="px-6 py-4">Author</th>
                <th className="px-6 py-4 text-right">Total Borrows</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {[
                { rank: 1, title: "The Midnight Library", author: "Matt Haig", borrows: 231 },
                { rank: 2, title: "Project Hail Mary", author: "Andy Weir", borrows: 215 },
                { rank: 3, title: "Klara and the Sun", author: "Kazuo Ishiguro", borrows: 198 },
                { rank: 4, title: "Atomic Habits", author: "James Clear", borrows: 182 },
                { rank: 5, title: "The Four Winds", author: "Kristin Hannah", borrows: 177 },
              ].map((book) => (
                <tr key={book.rank} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{book.rank}</td>
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{book.title}</td>
                  <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{book.author}</td>
                  <td className="px-6 py-4 text-right font-bold text-slate-900 dark:text-white">{book.borrows}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};