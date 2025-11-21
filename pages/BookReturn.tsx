
import React from 'react';

export const BookReturn: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="flex flex-col gap-2">
         <div className="flex items-center gap-2 text-sm text-slate-500">
            <span>Circulation</span>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span>Return</span>
         </div>
         <h1 className="text-3xl font-black text-slate-900 dark:text-white">Book Return</h1>
         <p className="text-slate-500">Scan the book's barcode to process a return and calculate any applicable fines.</p>
      </header>

      {/* Input Section */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row items-end gap-4">
          <label className="w-full flex-1">
            <span className="block text-slate-900 dark:text-white font-medium mb-2">Enter or Scan ISBN / Book ID</span>
            <div className="relative">
              <input 
                className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 h-12 px-4 pr-12 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                placeholder="e.g., 978-0321765723"
              />
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">barcode_scanner</span>
            </div>
          </label>
          <button className="h-12 px-6 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg transition-colors whitespace-nowrap">
            Find Book
          </button>
        </div>
      </div>

      {/* Information Display Card */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm space-y-6">
        <div className="flex justify-between items-start">
           <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Borrowing Information</h3>
              <p className="text-sm text-slate-500">Details for the located book record.</p>
           </div>
           <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Overdue</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
           <div>
              <p className="text-sm text-slate-500 mb-1">Book Title</p>
              <p className="font-semibold text-slate-900 dark:text-white">Designing Data-Intensive Applications</p>
           </div>
           <div>
              <p className="text-sm text-slate-500 mb-1">Author</p>
              <p className="font-semibold text-slate-900 dark:text-white">Martin Kleppmann</p>
           </div>
           <div>
              <p className="text-sm text-slate-500 mb-1">Borrower</p>
              <p className="font-semibold text-slate-900 dark:text-white">Jane Doe</p>
           </div>
           <div>
              <p className="text-sm text-slate-500 mb-1">Member ID</p>
              <p className="font-mono text-sm font-semibold text-slate-900 dark:text-white">LIB-08241</p>
           </div>
           <div>
              <p className="text-sm text-slate-500 mb-1">Due Date</p>
              <p className="font-semibold text-red-600">Oct 15, 2023</p>
           </div>
           <div>
              <p className="text-sm text-slate-500 mb-1">Return Date</p>
              <p className="font-semibold text-slate-900 dark:text-white">Today (Oct 27, 2023)</p>
           </div>
        </div>

        {/* Fine Calculation Section */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
           <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Fine Calculation</h3>
           <div className="flex flex-col sm:flex-row gap-6 items-center">
              <div className="flex-1 w-full bg-slate-50 dark:bg-slate-900 rounded-lg p-4 flex justify-between items-center">
                 <span className="text-slate-600 dark:text-slate-400">Days Overdue</span>
                 <span className="font-bold text-slate-900 dark:text-white">12 Days</span>
              </div>
              <div className="hidden sm:block text-slate-300">×</div>
              <div className="flex-1 w-full bg-slate-50 dark:bg-slate-900 rounded-lg p-4 flex justify-between items-center">
                 <span className="text-slate-600 dark:text-slate-400">Fine Rate</span>
                 <span className="font-bold text-slate-900 dark:text-white">$0.25 / day</span>
              </div>
              <div className="hidden sm:block text-slate-300">=</div>
              <div className="flex-1 w-full bg-primary-50 dark:bg-primary-900/30 border border-primary-100 dark:border-primary-800 rounded-lg p-4 flex justify-between items-center">
                 <span className="text-primary-700 dark:text-primary-300 font-medium">Total Fine</span>
                 <span className="text-2xl font-black text-primary-600 dark:text-primary-400">$3.00</span>
              </div>
           </div>
           
           <div className="mt-4 flex items-center gap-2">
              <input type="checkbox" id="waive" className="rounded border-slate-300 text-primary-600 focus:ring-primary-500" />
              <label htmlFor="waive" className="text-sm font-medium text-slate-700 dark:text-slate-300 select-none cursor-pointer">Waive Fine (Admin Only)</label>
           </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
           <button className="flex-1 h-12 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg transition-colors">
             Confirm Return
           </button>
           <button className="flex-1 h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded-lg transition-colors">
             Clear / Scan Next
           </button>
        </div>

      </div>
    </div>
  );
};
