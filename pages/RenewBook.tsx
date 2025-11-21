
import React from 'react';

export const RenewBook: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Breadcrumbs */}
      <div className="flex flex-wrap gap-2 items-center mb-6">
        <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Circulation</span>
        <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 text-sm">chevron_right</span>
        <span className="text-slate-900 dark:text-white text-sm font-medium">Renew Book</span>
      </div>

      {/* PageHeading */}
      <div className="flex flex-wrap justify-between gap-3 mb-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Renew a Book Loan</h1>
          <p className="text-slate-500 dark:text-slate-400 text-base">Enter the book's ISBN or the library's unique item barcode to check its renewal eligibility.</p>
        </div>
      </div>

      {/* Search Form */}
      <div className="flex flex-wrap items-end gap-4 mb-8">
        <label className="flex flex-col min-w-40 flex-1">
          <span className="text-slate-800 dark:text-slate-200 text-sm font-medium mb-2">Enter ISBN or Item Barcode</span>
          <input 
            className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 h-12 px-4 focus:ring-2 focus:ring-primary-500 outline-none transition-all" 
            placeholder="e.g. 978-3-16-148410-0" 
          />
        </label>
        <button className="flex min-w-[84px] items-center justify-center gap-2 rounded-lg h-12 px-5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-bold transition-colors">
          <span className="material-symbols-outlined text-xl">search</span>
          Search
        </button>
      </div>

      {/* Status Display Area - Mocked State */}
      <div className="space-y-6">
        
        {/* Success Notification Example */}
        <div className="flex items-center gap-4 p-4 rounded-lg bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800">
          <span className="material-symbols-outlined text-green-600 dark:text-green-400">check_circle</span>
          <p className="text-green-800 dark:text-green-300 text-sm font-medium">Scan successful. Item found.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Book Details Card */}
          <div className="lg:col-span-2 p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="flex items-start gap-6">
              <div className="w-24 h-36 bg-slate-200 rounded-lg flex-shrink-0 overflow-hidden">
                 <img src="https://covers.openlibrary.org/b/id/10603777-M.jpg" alt="Book Cover" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Book Details</p>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">The Midnight Library</h3>
                <p className="text-slate-600 dark:text-slate-300">by Matt Haig</p>
                <p className="text-slate-400 text-xs font-mono pt-2">ISBN: 978-0-525-55947-4</p>
              </div>
            </div>
          </div>

          {/* Loan Details Card */}
          <div className="lg:col-span-1 p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-4">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Current Loan</p>
            <div>
              <p className="text-slate-900 dark:text-white text-base font-bold">John Doe</p>
              <p className="text-slate-500 dark:text-slate-400 text-xs font-mono">ID: MBR-1138</p>
            </div>
            <div className="border-t border-slate-100 dark:border-slate-700 pt-2">
              <p className="text-slate-900 dark:text-white text-base font-bold">Due: Oct 25, 2023</p>
              <p className="text-red-600 dark:text-red-400 text-xs font-bold mt-1">Overdue by 3 days</p>
            </div>
          </div>
        </div>

        {/* Eligibility Checklist */}
        <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <h3 className="text-slate-900 dark:text-white font-bold mb-4">Renewal Eligibility Checklist</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
               <span className="material-symbols-outlined text-green-500">check_circle</span>
               <p className="text-slate-700 dark:text-slate-300 text-sm">No active holds by other members</p>
            </div>
            <div className="flex items-center gap-3">
               <span className="material-symbols-outlined text-green-500">check_circle</span>
               <p className="text-slate-700 dark:text-slate-300 text-sm">Renewal limit not reached (1 of 2 used)</p>
            </div>
            <div className="flex items-center gap-3">
               <span className="material-symbols-outlined text-yellow-500">warning</span>
               <p className="text-slate-700 dark:text-slate-300 text-sm">Item is overdue (Admin override required)</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
           <button className="px-4 py-2 rounded-lg text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
             Clear
           </button>
           <button className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg transition-colors">
             Renew Book
           </button>
        </div>

      </div>
    </div>
  );
};
