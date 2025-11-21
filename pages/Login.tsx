import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 p-4">
       <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-primary-700 rounded-full flex items-center justify-center mb-4 shadow-lg">
             <span className="material-symbols-outlined text-white text-4xl">local_library</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">City Library</h2>
       </div>

       <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 w-full max-w-md">
          <div className="text-center mb-8">
             <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Welcome Back</h1>
             <p className="text-slate-500">Sign in to your account to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
             <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email or Username</label>
                <input type="text" placeholder="Enter email or username" className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 h-12 px-4 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" />
             </div>
             <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Password</label>
                <div className="relative">
                   <input type="password" placeholder="Enter your password" className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 h-12 px-4 pr-12 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" />
                   <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                      <span className="material-symbols-outlined text-xl">visibility_off</span>
                   </button>
                </div>
             </div>
             
             <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                   <input type="checkbox" className="rounded border-slate-300 text-primary-600 focus:ring-primary-500" />
                   <span className="text-sm text-slate-700 dark:text-slate-300">Remember me</span>
                </label>
                <a href="#" className="text-sm font-medium text-primary-600 hover:underline">Forgot password?</a>
             </div>

             <button type="submit" className="w-full h-12 bg-primary-700 hover:bg-primary-800 text-white font-semibold rounded-lg transition-colors shadow-md">
                Sign In
             </button>
          </form>
       </div>

       <div className="mt-8 text-center text-sm text-slate-500">
          <p>Support: 1900 XXXX | support@citylibrary.com</p>
       </div>
    </div>
  );
};