import React, { useState } from 'react';
import Header from './adminHeader';
import { Outlet } from 'react-router-dom';
import './adminlayout.css';

function Adminlayout() {
  return (
    <div className="layout">

      <div className="main-area">
        <Header />
        <main className="content">
        </main>
      </div>
    </div>
  );
}

export default Adminlayout;
