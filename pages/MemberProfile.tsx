import React from 'react';

export const MemberProfile: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 mb-6 flex flex-col sm:flex-row items-center gap-6">
        <div className="w-24 h-24 rounded-full bg-slate-200 flex-shrink-0 overflow-hidden">
            <img src="https://i.pravatar.cc/150?u=jane" alt="Jane Doe" className="w-full h-full object-cover" />
        </div>
        <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Jane Doe</h1>
            <p className="text-slate-500 dark:text-slate-400">Member ID: 892345</p>
        </div>
      </div>

      <div className="border-b border-slate-200 dark:border-slate-700 mb-6">
         <nav className="flex gap-8">
           <button className="px-1 pb-4 text-sm font-bold text-primary-600 border-b-2 border-primary-600">Personal Information</button>
           <button className="px-1 pb-4 text-sm font-medium text-slate-500 hover:text-slate-700 border-b-2 border-transparent hover:border-slate-300 transition-colors">Borrow/Return History</button>
           <button className="px-1 pb-4 text-sm font-medium text-slate-500 hover:text-slate-700 border-b-2 border-transparent hover:border-slate-300 transition-colors">Fines</button>
         </nav>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
         <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
             {[
               { label: 'Full Name', value: 'Jane Doe' },
               { label: 'Email', value: 'jane.doe@example.com' },
               { label: 'Phone Number', value: '(555) 123-4567' },
               { label: 'Address', value: '123 Main St, Anytown, USA' },
               { label: 'Library Card Number', value: 'LBC-987654321' },
               { label: 'Member Since', value: 'Oct 15, 2020' },
             ].map((item) => (
               <div key={item.label} className="border-b border-slate-100 dark:border-slate-700 pb-4 last:border-0">
                 <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">{item.label}</p>
                 <p className="text-base font-medium text-slate-900 dark:text-white">{item.value}</p>
               </div>
             ))}
         </div>
         
         <div className="bg-slate-50 dark:bg-slate-900/50 p-6 border-t border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">Account Status</h3>
                <p className="text-sm text-slate-500">Toggle to change the member's account status between Active and Locked.</p>
            </div>
            <div className="flex items-center gap-3">
               <span className="text-sm font-medium text-slate-900 dark:text-white">Active</span>
               <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary-600 transition-colors">
                 <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition-transform" />
               </button>
            </div>
         </div>

         <div className="p-6 border-t border-slate-200 dark:border-slate-700 flex justify-end">
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-bold text-sm transition-colors">
                Save Changes
            </button>
         </div>
      </div>
    </div>
  );
};