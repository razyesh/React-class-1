import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';
import { Layout, Menu } from 'antd';
import NavBar from './components/Navbar';

// import 'antd/dist/antd.css';

const { Header, Content } = Layout;

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/users" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
