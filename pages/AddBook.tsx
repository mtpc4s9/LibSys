import React from 'react';
import { useNavigate } from 'react-router-dom';

export const AddBook: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-8">Add New Book</h1>
      
      <form className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
         <div className="p-6 space-y-8">
            
            {/* Cover */}
            <section>
               <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Book Cover</h3>
               <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg p-10 flex flex-col items-center justify-center text-center gap-4 hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors cursor-pointer">
                  <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center text-slate-500">
                     <span className="material-symbols-outlined">upload_file</span>
                  </div>
                  <div>
                     <p className="text-lg font-bold text-slate-900 dark:text-white">Upload Cover Image</p>
                     <p className="text-sm text-slate-500">Drag and drop an image here or click to browse files.</p>
                  </div>
                  <button type="button" className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2 px-4 rounded-lg text-sm transition-colors dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600">
                     Upload Image
                  </button>
               </div>
            </section>

            <hr className="border-slate-200 dark:border-slate-700" />

            {/* Details */}
            <section>
               <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Book Details</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                     <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Title</label>
                     <input type="text" placeholder="e.g., The Great Gatsby" className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 py-2 px-3 focus:ring-2 focus:ring-primary-500 outline-none" />
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Author</label>
                     <input type="text" placeholder="e.g., F. Scott Fitzgerald" className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 py-2 px-3 focus:ring-2 focus:ring-primary-500 outline-none" />
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">ISBN</label>
                     <input type="text" placeholder="e.g., 978-0743273565" className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 py-2 px-3 focus:ring-2 focus:ring-primary-500 outline-none" />
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Publisher</label>
                     <input type="text" placeholder="e.g., Charles Scribner's Sons" className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 py-2 px-3 focus:ring-2 focus:ring-primary-500 outline-none" />
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Publication Year</label>
                     <input type="number" placeholder="e.g., 1925" className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 py-2 px-3 focus:ring-2 focus:ring-primary-500 outline-none" />
                  </div>
               </div>
            </section>

            <hr className="border-slate-200 dark:border-slate-700" />

            {/* Classification */}
            <section>
               <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Classification</h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                     <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Category</label>
                     <select className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 py-2 px-3 focus:ring-2 focus:ring-primary-500 outline-none">
                        <option>Fiction</option>
                        <option>Non-Fiction</option>
                     </select>
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Classification Code <span className="text-slate-400">(Optional)</span></label>
                     <input type="text" placeholder="e.g., 813.52" className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 py-2 px-3 focus:ring-2 focus:ring-primary-500 outline-none" />
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Total Quantity</label>
                     <input type="number" defaultValue="1" min="1" className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 py-2 px-3 focus:ring-2 focus:ring-primary-500 outline-none" />
                  </div>
               </div>
            </section>

            <hr className="border-slate-200 dark:border-slate-700" />

             {/* Desc */}
             <section>
               <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Descriptive Information</h3>
               <div className="space-y-6">
                   <div>
                     <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Book Description</label>
                     <textarea rows={5} placeholder="A short summary of the book..." className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 py-2 px-3 focus:ring-2 focus:ring-primary-500 outline-none"></textarea>
                   </div>
                   <div>
                     <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Search Keywords</label>
                     <input type="text" placeholder="e.g., American Dream, Jazz Age" className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 py-2 px-3 focus:ring-2 focus:ring-primary-500 outline-none" />
                   </div>
               </div>
            </section>

         </div>
         
         <div className="p-4 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-700 flex justify-end gap-3 rounded-b-xl">
             <button onClick={() => navigate('/books')} type="button" className="px-4 py-2 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-700 transition-colors">
                Cancel
             </button>
             <button type="submit" className="px-4 py-2 rounded-lg text-sm font-bold text-white bg-primary-600 hover:bg-primary-700 transition-colors">
                Save Book
             </button>
         </div>
      </form>
    </div>
  );
};