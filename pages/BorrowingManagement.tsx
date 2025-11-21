
import React from 'react';

const requests = [
  { id: 1, user: 'Olivia Chen', userId: '84321', book: 'The Midnight Library', date: '2023-10-26 10:15 AM', queue: '1 of 3' },
  { id: 2, user: 'Ben Carter', userId: '75439', book: 'Dune', date: '2023-10-26 09:45 AM', queue: 'Available' },
  { id: 3, user: 'Sophia Rodriguez', userId: '66548', book: 'Project Hail Mary', date: '2023-10-25 04:20 PM', queue: '2 of 2' },
];

export const BorrowingManagement: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
       <div className="flex justify-between items-center">
          <h1 className="text-3xl font-black text-slate-900 dark:text-white">Borrowing Management</h1>
       </div>

       {/* Tabs */}
       <div className="border-b border-slate-200 dark:border-slate-700">
         <div className="flex gap-8">
           <button className="pb-3 border-b-2 border-primary-600 text-primary-600 font-bold text-sm">Pending Requests (3)</button>
           <button className="pb-3 border-b-2 border-transparent text-slate-500 hover:text-slate-700 font-medium text-sm transition-colors">Approved</button>
           <button className="pb-3 border-b-2 border-transparent text-slate-500 hover:text-slate-700 font-medium text-sm transition-colors">Checked Out</button>
           <button className="pb-3 border-b-2 border-transparent text-slate-500 hover:text-slate-700 font-medium text-sm transition-colors">Overdue</button>
         </div>
       </div>

       {/* Search */}
       <div className="relative max-w-md">
         <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
         <input 
           type="text" 
           placeholder="Search by user name or book title..." 
           className="w-full pl-10 pr-4 h-11 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary-500 outline-none"
         />
       </div>

       {/* Table */}
       <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
             <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
                   <tr>
                      <th className="px-6 py-4 font-medium text-slate-500 uppercase tracking-wider">User</th>
                      <th className="px-6 py-4 font-medium text-slate-500 uppercase tracking-wider">Book Title</th>
                      <th className="px-6 py-4 font-medium text-slate-500 uppercase tracking-wider">Request Date</th>
                      <th className="px-6 py-4 font-medium text-slate-500 uppercase tracking-wider">Inventory Status</th>
                      <th className="px-6 py-4 font-medium text-slate-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 font-medium text-slate-500 uppercase tracking-wider text-right">Actions</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                   {requests.map((req) => (
                      <tr key={req.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                         <td className="px-6 py-4">
                            <p className="font-medium text-slate-900 dark:text-white">{req.user}</p>
                            <p className="text-xs text-slate-500">ID: {req.userId}</p>
                         </td>
                         <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{req.book}</td>
                         <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{req.date}</td>
                         <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                            {req.queue === 'Available' ? (
                               <span className="text-green-600 font-medium flex items-center gap-1"><span className="material-symbols-outlined text-sm">check_circle</span> In Stock</span>
                            ) : (
                               <span className="text-orange-600 font-medium">Queue: {req.queue}</span>
                            )}
                         </td>
                         <td className="px-6 py-4">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
                               Pending
                            </span>
                         </td>
                         <td className="px-6 py-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                               <button className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded text-xs font-bold transition-colors">
                                  <span className="material-symbols-outlined text-sm">check</span> Approve
                               </button>
                               <button className="flex items-center gap-1 bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 px-3 py-1.5 rounded text-xs font-bold transition-colors dark:bg-red-900/20 dark:border-red-900/50 dark:text-red-400">
                                  <span className="material-symbols-outlined text-sm">close</span> Reject
                               </button>
                            </div>
                         </td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </div>
       </div>
    </div>
  );
};
