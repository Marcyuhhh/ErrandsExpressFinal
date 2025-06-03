import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage/landingpage';
import Auth from './pages/loginOrsignup/auth';
import Home from './pages/home/home';
import Homelayout from './components/homecoms/homelayout';
import Inbox from './pages/inbox/inbox';
import Notification from './pages/notification/notification';
import Profile from './pages/profile/profile';
import RunnerHome from './runnermode/runnerHome';
import Runnerlayout from './components/runnercoms/runnerlayout';
import RunnerInbox from './runnermode/runnerInbox';
import RunnerNotification from './runnermode/runnerNotification';
import AdminLayout from './components/admincoms/adminlayout'
import Verify from './adminpage/veriify'
import Users from './adminpage/users'
import Transactions from './adminpage/transactions'
import Reports from './adminpage/reports'


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<Auth />} />
      <Route element={<Homelayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/runner"element={<Runnerlayout />}>
        <Route path="/runner" element={<RunnerHome />} />
        <Route path="/runner/notification" element={<RunnerNotification />} />
        <Route path="/runner/inbox" element={<RunnerInbox />} />
      </Route>
      <Route element={<AdminLayout />}>
       <Route path="/verify" element={<Verify />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/users" element={<Users />} />
      </Route>
    </Routes>
  );
}

export default App;