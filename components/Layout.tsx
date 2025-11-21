
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const SidebarLink = ({ to, icon, label, active }: { to: string; icon: string; label: string; active: boolean }) => (
  <Link
    to={to}
    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
      active
        ? 'bg-primary-50 text-primary-600 font-medium'
        : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
    }`}
  >
    <span className={`material-symbols-outlined ${active ? 'fill' : ''}`}>{icon}</span>
    <span className="text-sm">{label}</span>
  </Link>
);

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="flex h-screen w-full bg-slate-50 dark:bg-slate-900">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 border-r border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-800 flex flex-col">
        <div className="p-6 flex items-center gap-3">
           <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white">
             <span className="material-symbols-outlined text-xl">local_library</span>
           </div>
           <h1 className="text-xl font-bold text-slate-800 dark:text-white">LibSys</h1>
        </div>

        <nav className="flex-1 px-4 flex flex-col gap-1 overflow-y-auto">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 mt-2 px-3">Main</div>
          <SidebarLink to="/" icon="dashboard" label="Dashboard" active={path === '/'} />
          <SidebarLink to="/catalog" icon="menu_book" label="Catalog" active={path === '/catalog'} />
          <SidebarLink to="/books" icon="auto_stories" label="Inventory" active={path === '/books' || path === '/add-book'} />
          
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 mt-6 px-3">Circulation Desk</div>
          <SidebarLink to="/circulation" icon="sync_alt" label="Check Out" active={path === '/circulation'} />
          <SidebarLink to="/return" icon="assignment_return" label="Return Book" active={path === '/return'} />
          <SidebarLink to="/renew" icon="autorenew" label="Renew Book" active={path === '/renew'} />
          <SidebarLink to="/borrowing-management" icon="pending_actions" label="Requests & Loans" active={path === '/borrowing-management'} />
          
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 mt-6 px-3">Management</div>
          <SidebarLink to="/authors" icon="person" label="Authors" active={path === '/authors' || path === '/add-author'} />
          <SidebarLink to="/members" icon="groups" label="Members" active={path === '/members' || path === '/add-member' || path.startsWith('/member')} />
          <SidebarLink to="/events" icon="event" label="Events" active={path === '/events'} />
          <SidebarLink to="/branches" icon="domain" label="Branches" active={path === '/branches'} />
          
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 mt-6 px-3">Admin</div>
          <SidebarLink to="/reports" icon="monitoring" label="Reports" active={path === '/reports'} />
          <SidebarLink to="/settings" icon="settings" label="Settings" active={path === '/settings'} />
        </nav>

        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3 mb-4 px-2">
            <img 
              src="https://i.pravatar.cc/150?u=admin" 
              alt="Admin" 
              className="w-9 h-9 rounded-full bg-slate-200"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900 dark:text-white truncate">Alice Johnson</p>
              <p className="text-xs text-slate-500 truncate">Librarian Admin</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 w-full px-3 py-2 text-sm font-medium text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors dark:text-slate-400 dark:hover:bg-slate-800"
          >
            <span className="material-symbols-outlined text-xl">logout</span>
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <main className="flex-1 overflow-y-auto p-4 sm:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};
