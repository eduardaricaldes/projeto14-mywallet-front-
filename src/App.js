import { Routes, Route } from "react-router-dom";

import SignUp  from "./pages/Sign-up";
import Login  from "./pages/Sign-in";

export default function App (){
  return(
    <Routes>
      <Route element={<Login/>} path="/"/>
      <Route element={<SignUp/>} path="signup"/>
    </Routes>
  )
}