import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/ErrandsLogo.png';
import './adminHeader.css';

function Header() {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="content-area">
      <header className="main-header">
        <div
          className="header-left"
          onClick={() => navigate('/home')}
          style={{ cursor: 'pointer' }}
        >
          <img src={logo} alt="Errands Logo" className="sidebar-logo" />
          <h1 className="logo-title">Errands Express</h1>
        </div>

        <div className="header-right">
          <a className="admin" >
            ADMINISTRATOR MODE
          </a>

          <button className="hamburger-menu-btn" onClick={toggleDropdown}>
            ☰
          </button>

          {dropdownOpen && (
            <div className="dropdown-menu">
              <ul>
                <li>Settings</li>
                <li onClick={handleLogout}>Log Out</li>
              </ul>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default Header;
