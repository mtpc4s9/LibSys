import React from 'react';

const events = [
  { title: 'Summer Reading Club Kick-off', type: 'Reading', date: 'Aug 15, 2024, 10:00 AM', location: 'Main Hall', reg: '28 / 50', status: 'Upcoming' },
  { title: 'Digital Skills Workshop', type: 'Workshop', date: 'Aug 12, 2024, 2:00 PM', location: 'Computer Lab', reg: '15 / 15', status: 'Ongoing' },
  { title: 'Poetry Night', type: 'Reading', date: 'Aug 5, 2024, 7:00 PM', location: 'Community Room', reg: '22 / 25', status: 'Finished' },
  { title: 'Introduction to Coding', type: 'Workshop', date: 'Jul 30, 2024, 4:00 PM', location: 'Online', reg: '30 / 30', status: 'Finished' },
];

export const Events: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
       <div className="flex flex-wrap items-center justify-between gap-4">
         <div>
           <h1 className="text-3xl font-black text-slate-900 dark:text-white">Events & Workshops</h1>
           <p className="text-slate-500 mt-1">Create workshops, reading events, and manage participant registrations.</p>
         </div>
         <button className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2.5 rounded-lg font-bold transition-colors shadow-sm">
           <span className="material-symbols-outlined">add_circle</span>
           Create New Event
         </button>
       </div>

       <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-grow w-full">
             <div className="relative">
                <div className="flex items-center justify-center absolute left-0 top-0 bottom-0 w-10 pl-2 text-slate-400">
                   <span className="material-symbols-outlined">search</span>
                </div>
                <input type="text" placeholder="Search by event name..." className="w-full pl-10 pr-4 h-12 rounded-lg bg-white dark:bg-slate-800 border-none ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-primary-500 outline-none" />
             </div>
          </div>
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-1">
             <button className="flex items-center gap-2 px-3 h-9 bg-white dark:bg-slate-800 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm whitespace-nowrap">Status: All <span className="material-symbols-outlined text-lg">expand_more</span></button>
             <button className="flex items-center gap-2 px-3 h-9 bg-white dark:bg-slate-800 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm whitespace-nowrap">Type: Workshop <span className="material-symbols-outlined text-lg">close</span></button>
             <button className="flex items-center gap-2 px-3 h-9 bg-white dark:bg-slate-800 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm whitespace-nowrap">Type: Reading <span className="material-symbols-outlined text-lg">close</span></button>
          </div>
       </div>

       <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="overflow-x-auto">
             <table className="w-full text-left text-sm">
                <thead className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                   <tr>
                      <th className="px-5 py-4 font-medium text-slate-500 uppercase tracking-wider">Event Name & Type</th>
                      <th className="px-5 py-4 font-medium text-slate-500 uppercase tracking-wider">Date & Time</th>
                      <th className="px-5 py-4 font-medium text-slate-500 uppercase tracking-wider">Location</th>
                      <th className="px-5 py-4 font-medium text-slate-500 uppercase tracking-wider">Registrations</th>
                      <th className="px-5 py-4 font-medium text-slate-500 uppercase tracking-wider">Status</th>
                      <th className="px-5 py-4 font-medium text-slate-500 uppercase tracking-wider">Actions</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                   {events.map((evt, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-700/30">
                         <td className="px-5 py-4">
                            <p className="font-medium text-slate-900 dark:text-white">{evt.title}</p>
                            <p className="text-slate-500 text-xs mt-0.5">{evt.type}</p>
                         </td>
                         <td className="px-5 py-4 text-slate-700 dark:text-slate-300 whitespace-nowrap">{evt.date}</td>
                         <td className="px-5 py-4 text-slate-700 dark:text-slate-300">{evt.location}</td>
                         <td className="px-5 py-4 text-slate-700 dark:text-slate-300">{evt.reg}</td>
                         <td className="px-5 py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                               evt.status === 'Upcoming' ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300' :
                               evt.status === 'Ongoing' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300' :
                               'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300'
                            }`}>
                               {evt.status}
                            </span>
                         </td>
                         <td className="px-5 py-4">
                            <div className="flex gap-4">
                               <button className="text-slate-400 hover:text-primary-600"><span className="material-symbols-outlined text-xl">edit</span></button>
                               <button className="text-slate-400 hover:text-primary-600"><span className="material-symbols-outlined text-xl">groups</span></button>
                               <button className="text-slate-400 hover:text-red-600"><span className="material-symbols-outlined text-xl">delete</span></button>
                            </div>
                         </td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </div>
          
          <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 dark:border-slate-700">
              <p className="text-sm text-slate-700 dark:text-slate-400">Showing <span className="font-medium">1</span> to <span className="font-medium">4</span> of <span className="font-medium">4</span> results</p>
              <div className="flex gap-2">
                  <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-300 hover:bg-slate-50"><span className="material-symbols-outlined text-lg">chevron_left</span></button>
                  <button className="w-8 h-8 bg-primary-50 text-primary-600 font-bold rounded flex items-center justify-center text-sm">1</button>
                  <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-300 hover:bg-slate-50"><span className="material-symbols-outlined text-lg">chevron_right</span></button>
              </div>
          </div>
       </div>
    </div>
  );
};