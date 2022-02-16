import TopBar from "./components/topbar/TopBar";
import Home from "./components/pages/home/Home";
import Register from "./components/pages/register/Register";
import Login from "./components/pages/login/Login";
import Write from "./components/pages/write/Write";
import Settings from "./components/pages/settings/Settings";
import Single from "./components/pages/single/Single"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useContext } from "react";
import { Context } from "./context/Context";
import Contactus from "./components/contactus/Contactus";

function App() {
  const {user}=useContext(Context);
  return (
    <Router>
      <TopBar/>
      <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route path="/register" element={user ? <Home/>:<Register />}>
          </Route>
          <Route path="/login" element={user ? <Home/>:<Login />}>
          </Route>
          <Route path="/write" element={user ?<Write />:<Register/>}>
          </Route>
          <Route path="/settings" element={user ?<Settings />:<Register/>}>
          </Route>
          <Route path="/post/:postId" element={<Single />}>
          </Route>
          <Route exact path="/contact" element={<Contactus />}>
          </Route>
          
      </Routes>
    </Router>
  );
}

export default App;
