import { Routes, Route } from "react-router-dom";

import SignUp  from "./pages/Sign-up";
import Login  from "./pages/Sign-in";
import Home  from "./pages/Home";
import CashIn from "./pages/Cash-in";
import CashOut from "./pages/Cash-out";

export default function App (){
  return(
    <Routes>
      <Route element={<Login/>} path="/"/>
      <Route element={<SignUp/>} path="signup"/>
      <Route element={<Home/>} path="/home"/>
      <Route element={<CashIn/>} path="/cashin"/>
      <Route element={<CashOut/>} path="/cashout"/>
    </Routes>
  )
}