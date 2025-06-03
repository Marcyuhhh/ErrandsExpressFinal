import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/ErrandsLogo.png';
import './adminlayout.css';

function AdminNavbar() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [username, setUsername] = useState('Admin');

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData?.name) {
      setUsername(userData.name);
    }
  }, []);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const firstLetter = username.charAt(0).toUpperCase();

  return (
    <div className="admin-navbar-container">
      <header className="admin-navbar-header">
        <div
          className="admin-navbar-left"
          onClick={() => navigate('/verify')}
          style={{ cursor: 'pointer' }}
        >
          <img src={logo} alt="Errands Logo" className="admin-navbar-logo" />
          <h1 className="admin-navbar-title">Errands Express</h1>
        </div>

        <div className="admin-navbar-right">
          <div className="admin-navbar-label">ADMINISTRATOR MODE</div>

          <button className="admin-navbar-hamburger-btn" onClick={toggleDropdown}>
            ☰
          </button>

          {dropdownOpen && (
            <div className="admin-navbar-dropdown-menu">
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

export default AdminNavbar;
