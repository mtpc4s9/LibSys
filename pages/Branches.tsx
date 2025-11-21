import React from 'react';

const branches = [
  { name: 'Central City Library', address: '123 Main St, Metropolis', books: '125,480', lead: 'Eleanor Vance', status: 'Open' },
  { name: 'Northside Reading Room', address: '456 Oak Ave, Northwood', books: '89,210', lead: 'Marcus Thorne', status: 'Closed' },
  { name: 'West End Archives', address: '789 Pine Ln, Westview', books: '213,500', lead: 'Aria Chen', status: 'Maintenance' },
  { name: 'South Bridge Library', address: '321 River Rd, Southbank', books: '95,670', lead: 'James Sullivan', status: 'Open' },
];

export const Branches: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
       <div className="flex justify-between items-center">
         <div>
            <h1 className="text-3xl font-black text-slate-900 dark:text-white">Branch Management</h1>
            <p className="text-slate-500 mt-1">View and manage all library branches in one place.</p>
         </div>
         <button className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2.5 rounded-lg font-bold transition-colors">
           <span className="material-symbols-outlined">add</span>
           Add New Branch
         </button>
       </div>

       <div className="flex gap-4 flex-col md:flex-row">
          <div className="flex-1 relative">
             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <span className="material-symbols-outlined">search</span>
             </div>
             <input type="text" placeholder="Search by branch name or address..." className="w-full pl-10 pr-4 h-12 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none" />
          </div>
          <div className="flex gap-3">
             <button className="px-4 h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-slate-50">Status: All <span className="material-symbols-outlined text-slate-400">expand_more</span></button>
             <button className="px-4 h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-slate-50">City: All <span className="material-symbols-outlined text-slate-400">expand_more</span></button>
          </div>
       </div>

       <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="overflow-x-auto">
             <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
                   <tr>
                      <th className="px-6 py-4 font-medium text-slate-500 uppercase tracking-wider">Branch Name</th>
                      <th className="px-6 py-4 font-medium text-slate-500 uppercase tracking-wider">Address</th>
                      <th className="px-6 py-4 font-medium text-slate-500 uppercase tracking-wider text-center">Book Quantity</th>
                      <th className="px-6 py-4 font-medium text-slate-500 uppercase tracking-wider">Lead Staff</th>
                      <th className="px-6 py-4 font-medium text-slate-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 font-medium text-slate-500 uppercase tracking-wider text-right">Actions</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                   {branches.map((branch, idx) => (
                      <tr key={idx}>
                         <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{branch.name}</td>
                         <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{branch.address}</td>
                         <td className="px-6 py-4 text-center text-slate-600 dark:text-slate-400">{branch.books}</td>
                         <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{branch.lead}</td>
                         <td className="px-6 py-4">
                             <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium
                                ${branch.status === 'Open' ? 'bg-green-100 text-green-700' : 
                                  branch.status === 'Closed' ? 'bg-red-100 text-red-700' : 
                                  'bg-yellow-100 text-yellow-800'}`}>
                                <span className={`w-1.5 h-1.5 rounded-full ${
                                   branch.status === 'Open' ? 'bg-green-500' : 
                                   branch.status === 'Closed' ? 'bg-red-500' : 'bg-yellow-500'
                                }`}></span>
                                {branch.status}
                             </span>
                         </td>
                         <td className="px-6 py-4 text-right">
                            <div className="flex justify-end gap-2">
                               <button className="p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500"><span className="material-symbols-outlined text-base">edit</span></button>
                               <button className="p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500"><span className="material-symbols-outlined text-base">visibility</span></button>
                               <button className="p-2 rounded hover:bg-red-50 text-red-500"><span className="material-symbols-outlined text-base">delete</span></button>
                            </div>
                         </td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </div>
          <div className="flex justify-between items-center p-4 border-t border-slate-200 dark:border-slate-700">
             <span className="text-sm text-slate-500">Showing <span className="font-semibold text-slate-900 dark:text-white">1-4</span> of 12</span>
             <div className="flex">
                <button className="h-8 px-3 border border-r-0 border-slate-300 rounded-l-lg text-slate-500 hover:bg-slate-50 text-sm disabled:opacity-50">Previous</button>
                <button className="h-8 px-3 border border-slate-300 rounded-r-lg text-slate-500 hover:bg-slate-50 text-sm">Next</button>
             </div>
          </div>
       </div>
    </div>
  );
};