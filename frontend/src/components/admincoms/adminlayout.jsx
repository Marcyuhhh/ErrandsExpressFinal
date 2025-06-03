import React from 'react';
import Header from './adminHeader';
import Sidebar from './adminsidebar'; // Assume this is your static sidebar
import { Outlet } from 'react-router-dom';
import './adminlayout.css';

function AdminLayout() {
  return (
    <div className="admin-layout">
      <Header />
      <div className="admin-body">
        <Sidebar />
        <div className="admin-main">
          <Outlet /> {/* Renders middle + right, handled by child route */}
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
