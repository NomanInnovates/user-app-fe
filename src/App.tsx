import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Users from "./pages/Users";
import NoPage from "./pages/NoPage";
import CreateUser from "./pages/CreateUser";
import { UserContext } from "./context";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";

function App() {
  const [currentUser, setCurrentUser] = useState({UID:"test"});
  return (
    <>
    
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/users" element={<Users />} />
            <Route path="/create-user" element={<CreateUser />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
