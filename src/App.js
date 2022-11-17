import { Routes, Route } from "react-router-dom";

import SignUp  from "./pages/Sign-up";

export default function App (){
  return(
    <Routes>
      <Route element={<SignUp/>} path="sign-in"/>
    </Routes>
  )
}