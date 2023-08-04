import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Pages/auth/Login';
import Homepage from './components/Pages/home/Homepage';
import Addproductpage from './components/Pages/addproduct/Addproductpage.jsx'
import { AuthProvider } from './components/Pages/auth/auth';
import { RequireAuth } from './components/Pages/auth/RequireAuth';



function App() {
  return (
    <AuthProvider>
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/home" element={<RequireAuth><Homepage /></RequireAuth>} />
        <Route path="/addproductpage" element={<RequireAuth><Addproductpage /></RequireAuth>} />
        
        {/* Other routes */}
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
