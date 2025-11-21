
import React from 'react';
import { Link } from 'react-router-dom';

const membersData = [
  { id: '#M1024', name: 'Olivia Rhye', email: 'olivia@example.com', joinDate: '2023-05-15', borrowed: 2, status: 'Active' },
  { id: '#M1025', name: 'Phoenix Baker', email: 'phoenix@example.com', joinDate: '2023-04-20', borrowed: 5, status: 'Locked' },
  { id: '#M1026', name: 'Lana Steiner', email: 'lana@example.com', joinDate: '2023-03-10', borrowed: 0, status: 'Active' },
  { id: '#M1027', name: 'Demi Wilkinson', email: 'demi@example.com', joinDate: '2023-02-28', borrowed: 1, status: 'Active' },
];

export const Members: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
       <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Manage Members</h1>
        <Link to="/add-member" className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2.5 rounded-lg font-medium transition-colors shadow-sm">
          <span className="material-symbols-outlined text-xl">add</span>
          Add New Member
        </Link>
      </div>

      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            <div className="lg:col-span-2">
               <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Search</label>
               <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                  <input type="text" placeholder="Search by Name or Email..." className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-primary-500 outline-none" />
               </div>
            </div>
            <div>
               <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Status</label>
               <select className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-primary-500 outline-none">
                 <option>Any</option>
                 <option>Active</option>
                 <option>Locked</option>
               </select>
            </div>
            <div>
               <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Books Borrowed</label>
               <select className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-primary-500 outline-none">
                 <option>Any</option>
                 <option>None</option>
                 <option>1 - 3</option>
                 <option>4+</option>
               </select>
            </div>
         </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="px-6 py-4 font-medium text-slate-500 uppercase tracking-wider">Member ID</th>
                <th className="px-6 py-4 font-medium text-slate-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 font-medium text-slate-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-4 font-medium text-slate-500 uppercase tracking-wider">Join Date</th>
                <th className="px-6 py-4 font-medium text-slate-500 uppercase tracking-wider text-center">Books Borrowed</th>
                <th className="px-6 py-4 font-medium text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 font-medium text-slate-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {membersData.map((member) => (
                <tr key={member.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <td className="px-6 py-4 font-mono text-slate-500">{member.id}</td>
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{member.name}</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{member.email}</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{member.joinDate}</td>
                  <td className="px-6 py-4 text-center font-bold text-slate-900 dark:text-white">{member.borrowed}</td>
                  <td className="px-6 py-4">
                     <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${member.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                       <span className={`w-1.5 h-1.5 rounded-full ${member.status === 'Active' ? 'bg-green-600' : 'bg-red-600'}`}></span>
                       {member.status}
                     </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                       <Link to="/member/jane-doe" className="p-1 text-slate-400 hover:text-primary-600 rounded transition-colors"><span className="material-symbols-outlined text-base">visibility</span></Link>
                       <button className="p-1 text-slate-400 hover:text-primary-600 rounded transition-colors"><span className="material-symbols-outlined text-base">edit</span></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
