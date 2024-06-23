import React, { useState } from "react";
import {BrowserRouter, Navigate, Route,Routes} from 'react-router-dom';

import './styles/index.css';
import Tasks from "./pages/Tasks";
import Auth from "./pages/Auth";
import Reg from './pages/Reg';
import { AuthContext } from "./components/context";


function App() {
  const [auth, setAuth] = useState({id:0,name:'ffff'})

  return (
    <AuthContext.Provider value={{auth,setAuth}}>
      <BrowserRouter>
        <Routes>
            <Route path="Auth" element={<Auth/>} />
            <Route path="Reg" element={<Reg/>}/>
            <Route path="Tasks" element={<Tasks/>} />
            <Route path="*" element={<Navigate to="/Auth" replace/>}/>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
};

export default App;

