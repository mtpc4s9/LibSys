
export interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  cover: string;
  category: string;
  status: 'Available' | 'Out of stock' | 'Repairing';
  available: number;
  borrowed: number;
}

export interface Member {
  id: string;
  name: string;
  email: string;
  joinDate: string;
  borrowedCount: number;
  status: 'Active' | 'Locked';
  avatar: string;
}

export interface Event {
  id: string;
  name: string;
  type: 'Workshop' | 'Reading';
  date: string;
  location: string;
  registrations: string;
  status: 'Upcoming' | 'Ongoing' | 'Finished';
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  bookCount: number;
  leadStaff: string;
  status: 'Open' | 'Closed' | 'Maintenance';
}

export interface Author {
  id: string;
  name: string;
  dob: string;
  dod?: string; // Date of death optional
  biography: string;
  bookCount: number;
}
