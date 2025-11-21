
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const AddAuthor: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Add New Author</h1>
        <p className="text-slate-500">Fill in the details below to add a new author to the system.</p>
      </div>
      
      <form className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
         <div className="p-6 md:p-8 space-y-6">
            
            {/* Name */}
            <div>
               <label htmlFor="author-name" className="block text-base font-medium text-slate-900 dark:text-white mb-2">Author Name</label>
               <input 
                 id="author-name" 
                 type="text" 
                 placeholder="e.g., Jane Austen" 
                 className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 py-3 px-4 focus:ring-2 focus:ring-primary-500 outline-none transition-all" 
               />
            </div>

            {/* Dates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                   <label htmlFor="dob" className="block text-base font-medium text-slate-900 dark:text-white mb-2">Date of Birth</label>
                   <div className="relative">
                     <input 
                        id="dob" 
                        type="date" 
                        className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 py-3 px-4 focus:ring-2 focus:ring-primary-500 outline-none transition-all" 
                     />
                   </div>
                </div>
                <div>
                   <label htmlFor="dod" className="block text-base font-medium text-slate-900 dark:text-white mb-2">Date of Death <span className="text-slate-400 font-normal text-sm">(Optional)</span></label>
                   <div className="relative">
                     <input 
                        id="dod" 
                        type="date" 
                        className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 py-3 px-4 focus:ring-2 focus:ring-primary-500 outline-none transition-all" 
                     />
                   </div>
                </div>
            </div>

            {/* Biography */}
            <div>
                <label htmlFor="biography" className="block text-base font-medium text-slate-900 dark:text-white mb-2">Biography / Description</label>
                <textarea 
                    id="biography" 
                    rows={5} 
                    placeholder="Provide a brief biography of the author..." 
                    className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 py-3 px-4 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                ></textarea>
            </div>

            {/* Associated Books (Mockup for multi-select flow) */}
            <div>
                <label className="block text-base font-medium text-slate-900 dark:text-white mb-2">Associated Books</label>
                <div className="flex gap-4 mb-3">
                    <div className="relative flex-1">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                        <input 
                            type="text" 
                            placeholder="Search and select books to link..." 
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary-500 outline-none" 
                        />
                    </div>
                    <button type="button" className="flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-900/20 text-primary-600 rounded-lg font-medium hover:bg-primary-100 dark:hover:bg-primary-900/40 transition-colors">
                        <span className="material-symbols-outlined">add</span>
                        Add New Book
                    </button>
                </div>
                
                {/* Chips for selected books */}
                <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-700 px-3 py-1.5 rounded-full text-sm text-slate-700 dark:text-slate-200">
                        <span>Pride and Prejudice</span>
                        <button type="button" className="hover:text-red-500 flex items-center"><span className="material-symbols-outlined text-sm">close</span></button>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-700 px-3 py-1.5 rounded-full text-sm text-slate-700 dark:text-slate-200">
                        <span>Sense and Sensibility</span>
                        <button type="button" className="hover:text-red-500 flex items-center"><span className="material-symbols-outlined text-sm">close</span></button>
                    </div>
                </div>
            </div>

         </div>
         
         <div className="p-4 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-700 flex justify-end gap-3 rounded-b-xl">
             <button onClick={() => navigate('/authors')} type="button" className="px-6 py-2.5 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-700 transition-colors">
                Cancel
             </button>
             <button type="submit" className="px-6 py-2.5 rounded-lg text-sm font-bold text-white bg-primary-600 hover:bg-primary-700 transition-colors">
                Create Author
             </button>
         </div>
      </form>
    </div>
  );
};
