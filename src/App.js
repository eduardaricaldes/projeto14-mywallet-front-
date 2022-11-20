import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import {AutenticacaoContext} from './contexts/AuthenticationProvider'

import SignUp  from "./pages/Sign-up";
import Login  from "./pages/Sign-in";
import Home  from "./pages/Home";
import CashIn from "./pages/Cash-in";
import CashOut from "./pages/Cash-out";

const RotaPrivada = ({ Componente }) => {
  const [token, setToken, logado] = useContext(AutenticacaoContext)

  return logado ? <Componente /> : <Login />
}

export default function App (){
  return(
    <Routes>
      <Route element={<Login/>} path="/"/>
      <Route element={<SignUp/>} path="signup"/>
      <Route element={<RotaPrivada Componente={Home}/>} path="/home"/>
      <Route element={<RotaPrivada Componente={CashIn}/>} path="/cashin"/>
      <Route element={<RotaPrivada Componente={CashOut}/>} path="/cashout"/>
    </Routes>
  )
}