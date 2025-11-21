
import React from 'react';

export const Circulation: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-wrap gap-2 items-center mb-6">
        <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Circulation</span>
        <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 text-sm">chevron_right</span>
        <span className="text-slate-900 dark:text-white text-sm font-medium">Check Out</span>
      </div>

      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Check Out Book</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6 space-y-6">
             <div>
                <label className="block text-sm font-medium text-slate-800 dark:text-slate-200 mb-2">Scan Member ID</label>
                <div className="relative">
                   <input type="text" defaultValue="M-19851126" className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 h-12 pl-4 pr-10 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-600 outline-none" placeholder="Scan member ID" />
                   <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">qr_code_scanner</span>
                </div>
             </div>
             <div>
                <label className="block text-sm font-medium text-slate-800 dark:text-slate-200 mb-2">Scan Book ISBN / Code</label>
                <div className="relative">
                   <input type="text" defaultValue="978-0321765723" className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 h-12 pl-4 pr-10 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-600 outline-none" placeholder="Scan book code" />
                   <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">barcode_scanner</span>
                </div>
             </div>
             <div className="pt-6">
                <button className="w-full h-12 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg transition-colors">
                   Confirm Check Out
                </button>
             </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6 flex flex-col gap-4">
             <h3 className="text-lg font-bold text-slate-900 dark:text-white">Transaction Details</h3>
             
             <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-dashed border-slate-200 dark:border-slate-700">
                   <span className="text-sm text-slate-500">Member Name</span>
                   <span className="text-sm font-medium text-slate-900 dark:text-white">Ryan Reynolds</span>
                </div>
                <div className="flex justify-between py-3 border-b border-dashed border-slate-200 dark:border-slate-700">
                   <span className="text-sm text-slate-500">Book Title</span>
                   <span className="text-sm font-medium text-slate-900 dark:text-white">The C++ Standard Library</span>
                </div>
                <div className="flex justify-between py-3 border-b border-dashed border-slate-200 dark:border-slate-700">
                   <span className="text-sm text-slate-500">Availability</span>
                   <span className="text-sm font-medium text-green-600">Available</span>
                </div>
                <div className="flex justify-between py-3 border-b border-dashed border-slate-200 dark:border-slate-700">
                   <span className="text-sm text-slate-500">Checkout Date</span>
                   <span className="text-sm font-medium text-slate-900 dark:text-white">Today (23 Aug 2024)</span>
                </div>
                <div className="flex justify-between py-3">
                   <span className="text-sm text-slate-500">Due Date</span>
                   <span className="text-sm font-bold text-slate-900 dark:text-white">06 Sep 2024</span>
                </div>
             </div>

             <div className="mt-auto p-3 bg-green-50 dark:bg-green-900/30 rounded-lg flex items-center gap-3">
                <span className="material-symbols-outlined text-green-600">check_circle</span>
                <span className="text-sm text-green-800 dark:text-green-200">Book available. Ready to confirm.</span>
             </div>
          </div>
      </div>
    </div>
  );
};
