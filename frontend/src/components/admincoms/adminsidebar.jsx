import { NavLink } from 'react-router-dom';
import './adminlayout.css';

function AdminSidebar() {
  return (
    <div className="sidebar">
        <ul>
          <li>
            <NavLink to="/verify" end activeClassName="active-link">Verify</NavLink>
          </li>
          <li>
            <NavLink to="/reports" activeClassName="active-link">Reports</NavLink>
          </li>
          <li>
            <NavLink to="/transactions" activeClassName="active-link">Transactions</NavLink>
          </li>
          <li>
            <NavLink to="/users" activeClassName="active-link">Users</NavLink>
          </li>
        </ul>
    </div>
  );
}

export default AdminSidebar
