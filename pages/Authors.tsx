
import React from 'react';
import { Link } from 'react-router-dom';
import { Author } from '../types';

// 20 Dummy Authors
const authorsData: Author[] = [
  { id: 'AUTH-001', name: 'George Orwell', dob: '1903-06-25', dod: '1950-01-21', biography: 'English novelist and essayist, journalist and critic.', bookCount: 12 },
  { id: 'AUTH-002', name: 'J.K. Rowling', dob: '1965-07-31', biography: 'British author, best known for the Harry Potter series.', bookCount: 21 },
  { id: 'AUTH-003', name: 'Haruki Murakami', dob: '1949-01-12', biography: 'Japanese writer. His books and stories have been bestsellers in Japan as well as internationally.', bookCount: 18 },
  { id: 'AUTH-004', name: 'Virginia Woolf', dob: '1882-01-25', dod: '1941-03-28', biography: 'English writer, considered one of the most important modernist 20th-century authors.', bookCount: 9 },
  { id: 'AUTH-005', name: 'Agatha Christie', dob: '1890-09-15', dod: '1976-01-12', biography: 'English writer known for her 66 detective novels and 14 short story collections.', bookCount: 80 },
  { id: 'AUTH-006', name: 'F. Scott Fitzgerald', dob: '1896-09-24', dod: '1940-12-21', biography: 'American novelist, essayist, screenwriter, and short-story writer.', bookCount: 5 },
  { id: 'AUTH-007', name: 'Jane Austen', dob: '1775-12-16', dod: '1817-07-18', biography: 'English novelist known primarily for her six major novels.', bookCount: 6 },
  { id: 'AUTH-008', name: 'Ernest Hemingway', dob: '1899-07-21', dod: '1961-07-02', biography: 'American novelist, short-story writer, journalist, and sportsman.', bookCount: 15 },
  { id: 'AUTH-009', name: 'Stephen King', dob: '1947-09-21', biography: 'American author of horror, supernatural fiction, suspense, crime, science-fiction, and fantasy novels.', bookCount: 65 },
  { id: 'AUTH-010', name: 'Gabriel García Márquez', dob: '1927-03-06', dod: '2014-04-17', biography: 'Colombian novelist, short-story writer, screenwriter, and journalist.', bookCount: 22 },
  { id: 'AUTH-011', name: 'Toni Morrison', dob: '1931-02-18', dod: '2019-08-05', biography: 'American novelist, essayist, book editor, and college professor.', bookCount: 11 },
  { id: 'AUTH-012', name: 'Leo Tolstoy', dob: '1828-09-09', dod: '1910-11-20', biography: 'Russian writer who is regarded as one of the greatest authors of all time.', bookCount: 25 },
  { id: 'AUTH-013', name: 'Chimamanda Ngozi Adichie', dob: '1977-09-15', biography: 'Nigerian writer whose works include novels, short stories and nonfiction.', bookCount: 7 },
  { id: 'AUTH-014', name: 'Mark Twain', dob: '1835-11-30', dod: '1910-04-21', biography: 'American writer, humorist, entrepreneur, publisher, and lecturer.', bookCount: 30 },
  { id: 'AUTH-015', name: 'Oscar Wilde', dob: '1854-10-16', dod: '1900-11-30', biography: 'Irish poet and playwright.', bookCount: 10 },
  { id: 'AUTH-016', name: 'Maya Angelou', dob: '1928-04-04', dod: '2014-05-28', biography: 'American memoirist, popular poet, and civil rights activist.', bookCount: 14 },
  { id: 'AUTH-017', name: 'J.R.R. Tolkien', dob: '1892-01-03', dod: '1973-09-02', biography: 'English writer, poet, philologist, and academic.', bookCount: 38 },
  { id: 'AUTH-018', name: 'Charles Dickens', dob: '1812-02-07', dod: '1870-06-09', biography: 'English writer and social critic.', bookCount: 20 },
  { id: 'AUTH-019', name: 'Franz Kafka', dob: '1883-07-03', dod: '1924-06-03', biography: 'German-speaking Bohemian novelist and short-story writer.', bookCount: 4 },
  { id: 'AUTH-020', name: 'Neil Gaiman', dob: '1960-11-10', biography: 'English author of short fiction, novels, comic books, graphic novels, nonfiction, audio theatre, and films.', bookCount: 40 },
];

export const Authors: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Author Management</h1>
            <p className="text-slate-500 mt-1">View, add, and manage authors in the library system.</p>
        </div>
        <Link to="/add-author" className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2.5 rounded-lg font-medium transition-colors shadow-sm">
          <span className="material-symbols-outlined text-xl">add</span>
          Add New Author
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
         {/* Search */}
         <div className="w-full md:max-w-md relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input 
                type="text" 
                placeholder="Search by author name..." 
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
            />
         </div>
         {/* Tools */}
         <div className="flex gap-2 w-full md:w-auto">
            <button className="flex items-center justify-center w-10 h-10 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">
                <span className="material-symbols-outlined">tune</span>
            </button>
            <button className="flex items-center justify-center w-10 h-10 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">
                <span className="material-symbols-outlined">download</span>
            </button>
         </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="px-6 py-4 font-medium text-slate-500 uppercase tracking-wider">Author ID</th>
                <th className="px-6 py-4 font-medium text-slate-500 uppercase tracking-wider">Author Name</th>
                <th className="px-6 py-4 font-medium text-slate-500 uppercase tracking-wider">Lifespan</th>
                <th className="px-6 py-4 font-medium text-slate-500 uppercase tracking-wider">No. of Books</th>
                <th className="px-6 py-4 font-medium text-slate-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {authorsData.map((author) => (
                <tr key={author.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <td className="px-6 py-4 text-slate-500 font-mono">{author.id}</td>
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                    {author.name}
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                    {new Date(author.dob).getFullYear()} - {author.dod ? new Date(author.dod).getFullYear() : 'Present'}
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                    {author.bookCount}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1 text-slate-400 hover:text-primary-600 rounded transition-colors" title="View Details">
                        <span className="material-symbols-outlined text-lg">visibility</span>
                      </button>
                      <button className="p-1 text-slate-400 hover:text-primary-600 rounded transition-colors" title="Edit">
                        <span className="material-symbols-outlined text-lg">edit</span>
                      </button>
                      <button className="p-1 text-slate-400 hover:text-red-600 rounded transition-colors" title="Delete">
                        <span className="material-symbols-outlined text-lg">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Mockup */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-sm text-slate-500">
           <span>Showing 1 to 20 of 20 results</span>
           <div className="flex gap-2">
             <button className="h-9 px-4 flex items-center justify-center rounded border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50" disabled>Previous</button>
             <button className="h-9 px-4 flex items-center justify-center rounded border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50" disabled>Next</button>
           </div>
        </div>
      </div>
    </div>
  );
};
