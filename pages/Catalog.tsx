import React from 'react';
import { Link } from 'react-router-dom';

export const Catalog: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
       <div className="flex justify-between items-center py-6">
          <h1 className="text-3xl font-black text-slate-900 dark:text-white">Search Results for 'The Great Gatsby'</h1>
       </div>

       <div className="space-y-12">
          {/* Books */}
          <section>
             <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Books</h2>
                <Link to="/books" className="text-sm font-medium text-primary-600 hover:underline">View All</Link>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {[
                    { isbn: '9780743273565', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', cover: 'https://covers.openlibrary.org/b/id/10603777-M.jpg' },
                    { isbn: '9781536213010', title: 'Gatsby: A Graphic Novel', author: 'K. Woodman-Maynard', cover: 'https://covers.openlibrary.org/b/id/10522704-M.jpg' }
                 ].map((book, i) => (
                    <div key={i} className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700 flex justify-between items-start gap-4 shadow-sm">
                       <div className="flex-1 flex flex-col gap-4">
                          <div>
                             <p className="text-xs text-slate-500 uppercase">ISBN: {book.isbn}</p>
                             <p className="text-base font-bold text-slate-900 dark:text-white mt-1">{book.title}</p>
                             <p className="text-sm text-slate-500">{book.author}</p>
                          </div>
                          <button className="bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium px-4 py-2 rounded-md w-fit transition-colors">View Details</button>
                       </div>
                       <img src={book.cover} alt={book.title} className="w-24 h-36 object-cover rounded-md shadow-sm bg-slate-200" />
                    </div>
                 ))}
             </div>
          </section>

          {/* Members */}
          <section>
             <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Members</h2>
                <Link to="/members" className="text-sm font-medium text-primary-600 hover:underline">View All</Link>
             </div>
             <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 flex justify-between items-center gap-4 shadow-sm">
                <div className="flex items-center gap-4">
                   <img src="https://i.pravatar.cc/150?u=gatsby" alt="Gatsby Smith" className="w-10 h-10 rounded-full" />
                   <div>
                      <p className="font-semibold text-slate-900 dark:text-white">Gatsby Smith</p>
                      <p className="text-sm text-slate-500">Card No: 202400123</p>
                   </div>
                </div>
                <Link to="/member/gatsby-smith" className="bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 text-sm font-medium px-4 py-2 rounded-md transition-colors">
                   View Profile
                </Link>
             </div>
          </section>

          {/* Transactions */}
          <section>
             <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Transactions</h2>
                <Link to="/circulation" className="text-sm font-medium text-primary-600 hover:underline">View All</Link>
             </div>
             <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 flex justify-between items-center gap-4 shadow-sm">
                 <div className="flex-1 flex gap-6 items-center">
                    <div>
                       <p className="font-semibold text-slate-900 dark:text-white">#TXN-58920</p>
                       <p className="text-sm text-slate-500">The Great Gatsby</p>
                    </div>
                    <div className="text-sm text-slate-500 flex items-center gap-1">
                       <span className="material-symbols-outlined text-base">person</span> Gatsby Smith
                    </div>
                 </div>
                 <div className="flex flex-col items-end gap-1">
                    <span className="bg-red-100 text-red-700 text-xs font-medium px-2 py-1 rounded-full">Overdue</span>
                    <p className="text-xs text-slate-500">Due: May 15, 2024</p>
                 </div>
             </div>
          </section>
       </div>
    </div>
  );
};