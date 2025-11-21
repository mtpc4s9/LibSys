import React from 'react';
import { Link } from 'react-router-dom';

const booksData = [
  { id: '1', title: 'The Midnight Library', author: 'Matt Haig', isbn: '978-0-7352-1129-2', category: 'Fiction', available: 15, borrowed: 5, status: 'Available', cover: 'https://covers.openlibrary.org/b/id/10603777-M.jpg' },
  { id: '2', title: 'Atomic Habits', author: 'James Clear', isbn: '978-0-7352-1129-2', category: 'Self-Help', available: 0, borrowed: 12, status: 'Out of stock', cover: 'https://covers.openlibrary.org/b/id/10528221-M.jpg' },
  { id: '3', title: 'Dune', author: 'Frank Herbert', isbn: '978-0-441-01359-3', category: 'Sci-Fi', available: 5, borrowed: 2, status: 'Repairing', cover: 'https://covers.openlibrary.org/b/id/14509832-M.jpg' },
];

export const Books: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Book Inventory Management</h1>
        <Link to="/add-book" className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2.5 rounded-lg font-medium transition-colors shadow-sm">
          <span className="material-symbols-outlined text-xl">add</span>
          Add New Book
        </Link>
      </div>

      <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
          <input 
            type="text" 
            placeholder="Search by Title, Author, or ISBN..." 
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
          />
        </div>
        <div className="flex flex-wrap gap-3">
           {['Category', 'Status', 'Publication Year'].map(filter => (
             <button key={filter} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-sm font-medium text-slate-700 dark:text-slate-200 transition-colors">
               {filter}
               <span className="material-symbols-outlined text-lg">expand_more</span>
             </button>
           ))}
           <button className="px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-700 text-sm font-medium text-slate-600 dark:text-slate-300 transition-colors ml-auto">
             Clear Filters
           </button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="px-4 py-4 w-10">
                  <input type="checkbox" className="rounded border-slate-300 text-primary-600 focus:ring-primary-500" />
                </th>
                <th className="px-4 py-4">Cover</th>
                <th className="px-4 py-4">Title</th>
                <th className="px-4 py-4">Author</th>
                <th className="px-4 py-4">ISBN</th>
                <th className="px-4 py-4">Category</th>
                <th className="px-4 py-4 text-center">Available</th>
                <th className="px-4 py-4 text-center">Borrowed</th>
                <th className="px-4 py-4">Status</th>
                <th className="px-4 py-4 text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {booksData.map((book) => (
                <tr key={book.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <td className="px-4 py-4">
                     <input type="checkbox" className="rounded border-slate-300 text-primary-600 focus:ring-primary-500" />
                  </td>
                  <td className="px-4 py-4">
                    <div className="h-14 w-10 bg-slate-200 rounded overflow-hidden shadow-sm">
                       <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
                    </div>
                  </td>
                  <td className="px-4 py-4 font-medium text-slate-900 dark:text-white">{book.title}</td>
                  <td className="px-4 py-4 text-slate-600 dark:text-slate-400">{book.author}</td>
                  <td className="px-4 py-4 text-slate-500 font-mono text-xs">{book.isbn}</td>
                  <td className="px-4 py-4 text-slate-600 dark:text-slate-400">{book.category}</td>
                  <td className="px-4 py-4 text-center text-slate-900 dark:text-white">{book.available}</td>
                  <td className="px-4 py-4 text-center text-slate-900 dark:text-white">{book.borrowed}</td>
                  <td className="px-4 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border
                      ${book.status === 'Available' ? 'bg-green-50 text-green-700 border-green-100' : 
                        book.status === 'Out of stock' ? 'bg-red-50 text-red-700 border-red-100' : 
                        'bg-yellow-50 text-yellow-700 border-yellow-100'}`}>
                      {book.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="text-slate-400 hover:text-primary-600 transition-colors">
                        <span className="material-symbols-outlined text-lg">edit</span>
                      </button>
                      <button className="text-slate-400 hover:text-red-600 transition-colors">
                        <span className="material-symbols-outlined text-lg">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-sm text-slate-500">
           <span>Showing 1 to 10 of 150 books</span>
           <div className="flex gap-2">
             <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-300 hover:bg-slate-50 disabled:opacity-50">
               <span className="material-symbols-outlined text-lg">chevron_left</span>
             </button>
             <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-300 hover:bg-slate-50">
               <span className="material-symbols-outlined text-lg">chevron_right</span>
             </button>
           </div>
        </div>
      </div>
    </div>
  );
};