import React from 'react';

export const Settings: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
       <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-8 pb-6 border-b border-slate-200 dark:border-slate-700">Library Regulations & Settings</h1>
       
       <div className="space-y-10">
          {/* Borrowing Rules */}
          <section className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
             <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-6">Borrowing Rules</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                   <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Maximum Books per User</label>
                   <input type="number" defaultValue="5" className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-2.5 focus:ring-2 focus:ring-primary-500 outline-none" />
                </div>
                <div>
                   <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Standard Loan Period (Days)</label>
                   <input type="number" defaultValue="21" className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-2.5 focus:ring-2 focus:ring-primary-500 outline-none" />
                </div>
             </div>
             <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center">
                       <span className="material-symbols-outlined">autorenew</span>
                    </div>
                    <span className="font-medium text-slate-800 dark:text-white">Allow Renewals</span>
                 </div>
                 <div className="relative inline-flex h-7 w-12 items-center rounded-full bg-primary-600 cursor-pointer">
                     <span className="translate-x-6 inline-block h-5 w-5 transform rounded-full bg-white transition-transform" />
                 </div>
             </div>
          </section>

          {/* Fines */}
          <section className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
             <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-6">Overdue Fines</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                   <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Fine per Day ($)</label>
                   <input type="number" step="0.01" defaultValue="0.25" className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-2.5 focus:ring-2 focus:ring-primary-500 outline-none" />
                </div>
                <div>
                   <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Maximum Fine Cap ($)</label>
                   <input type="number" step="1.00" defaultValue="25.00" className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-2.5 focus:ring-2 focus:ring-primary-500 outline-none" />
                </div>
             </div>
          </section>

          {/* Staff */}
          <section className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
             <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-slate-800 dark:text-white">Staff Management</h2>
                <button className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors">
                   <span className="material-symbols-outlined text-lg">add</span> Add Librarian
                </button>
             </div>
             <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                   <thead className="bg-slate-50 dark:bg-slate-700">
                      <tr>
                         <th className="p-3 font-medium text-slate-600 dark:text-slate-300">Name</th>
                         <th className="p-3 font-medium text-slate-600 dark:text-slate-300">Email</th>
                         <th className="p-3 font-medium text-slate-600 dark:text-slate-300">Role</th>
                         <th className="p-3 font-medium text-slate-600 dark:text-slate-300">Status</th>
                         <th className="p-3 text-right">Actions</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                      <tr>
                         <td className="p-3 text-slate-800 dark:text-slate-200">Jane Doe</td>
                         <td className="p-3 text-slate-500">jane.doe@library.com</td>
                         <td className="p-3 text-slate-500">Administrator</td>
                         <td className="p-3"><span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full font-medium">Active</span></td>
                         <td className="p-3 text-right"><button className="text-primary-600 hover:underline">Edit</button></td>
                      </tr>
                      <tr>
                         <td className="p-3 text-slate-800 dark:text-slate-200">John Smith</td>
                         <td className="p-3 text-slate-500">john.smith@library.com</td>
                         <td className="p-3 text-slate-500">Librarian</td>
                         <td className="p-3"><span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full font-medium">Active</span></td>
                         <td className="p-3 text-right">
                            <button className="text-primary-600 hover:underline mr-2">Edit</button>
                            <button className="text-red-600 hover:underline">Deactivate</button>
                         </td>
                      </tr>
                   </tbody>
                </table>
             </div>
          </section>
       </div>

       <div className="sticky bottom-0 bg-white/90 dark:bg-slate-800/90 backdrop-blur p-4 mt-8 border-t border-slate-200 dark:border-slate-700 flex justify-end gap-3 -mx-4 md:mx-0 rounded-b-xl">
          <button className="px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">Cancel</button>
          <button className="px-4 py-2 text-sm font-medium bg-primary-600 text-white hover:bg-primary-700 rounded-lg transition-colors">Save Changes</button>
       </div>
    </div>
  );
};