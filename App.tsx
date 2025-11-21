
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Reports } from './pages/Reports';
import { Books } from './pages/Books';
import { AddBook } from './pages/AddBook';
import { Authors } from './pages/Authors';
import { AddAuthor } from './pages/AddAuthor';
import { Members } from './pages/Members';
import { AddMember } from './pages/AddMember';
import { MemberProfile } from './pages/MemberProfile';
import { Circulation } from './pages/Circulation';
import { BookReturn } from './pages/BookReturn';
import { RenewBook } from './pages/RenewBook';
import { BorrowingManagement } from './pages/BorrowingManagement';
import { Events } from './pages/Events';
import { Branches } from './pages/Branches';
import { Settings } from './pages/Settings';
import { Catalog } from './pages/Catalog';
import { Login } from './pages/Login';

const AppContent = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  if (isLoginPage) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    );
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/books" element={<Books />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/add-author" element={<AddAuthor />} />
        <Route path="/members" element={<Members />} />
        <Route path="/add-member" element={<AddMember />} />
        <Route path="/member/:id" element={<MemberProfile />} />
        <Route path="/circulation" element={<Circulation />} />
        <Route path="/return" element={<BookReturn />} />
        <Route path="/renew" element={<RenewBook />} />
        <Route path="/borrowing-management" element={<BorrowingManagement />} />
        <Route path="/events" element={<Events />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </Layout>
  );
};

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
