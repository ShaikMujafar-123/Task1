import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/loginpage/Login.jsx";
import Homepage from "./Pages/home/Homepage.jsx";
import Addproductpage from "./Pages/addproduct/Addproductpage.jsx";
import { AuthProvider } from "./Pages/loginpage/auth";
import { RequireAuth } from "./Pages/loginpage/RequireAuth";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <RequireAuth>
                <Homepage />
              </RequireAuth>
            }
          />
          <Route
            path="/addproductpage"
            element={
              <RequireAuth>
                <Addproductpage />
              </RequireAuth>
            }
          />

          {/* Other routes */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
