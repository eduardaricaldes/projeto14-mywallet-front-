import { useState, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

import { AutenticacaoContext } from '../contexts/AuthenticationProvider';
import { UsuarioContext } from '../contexts/UserProvider';

import { urls } from '../configs/urls';

export default function SignIn() {
  const navigate = useNavigate();
  const [token, armazenarToken, logado, setLogado] = useContext(AutenticacaoContext);
  const [usuario, setDadosDoUsuario] = useContext(UsuarioContext);

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function onChangePassword(value) {
    if(value !== "") {
      setPassword(value)
    }
  }

  function onChangeEmail(value) {
    if(value !== "") {
      setEmail(value)
    }
  }

  function submit(event) {
    event.preventDefault();

    axios.post(urls.signin, {
      email,
      password,
    }).then((resp) => {
      const { token, name, email } = resp.data;
      if(token) {
        armazenarToken(token);
        setLogado(true);
        setDadosDoUsuario({name, email})
        navigate("/home");
      }else {
        alert("error ao obter dados da api")
        navigate("/");
      }
    }).catch((err) => {
      alert('Usuario e senha invalidos')
    }); 
  }

  return (
    <EstiloSignUp>
      <h1 className="title">MyWallet</h1>
      <form className="form" onSubmit={submit}>
        <input type="email" placeholder="E-mail" onChange={event => onChangeEmail(event.target.value)}/>
        <input type="password" placeholder="Senha" onChange={event => onChangePassword(event.target.value)}/>
        <button className="create">Entrar</button>
      </form>
      <Link to="/signup" className="link">Primeira vez? Cadastre-se!</Link>
    </EstiloSignUp>
  )
}

const EstiloSignUp=styled.div`
padding: 24px;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
  .title{
    font-family:'Saira Stencil One', cursive;
    font-size: 32px;
    color:#fff;
    margin-bottom: 28px;
    text-align: center;
  }

  .form{
    flex-direction: column;
    display: flex;
    width: 100%;
    input{
      padding: 0 15px;
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;
      color: #000000;
      border-radius: 5px;
      margin-bottom: 14px;
      height: 58px;

      ::placeholder{
        color: #000;
      }
    }
    .create {
      height: 46px;
      background: #A328D6;
      border-radius: 5px;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 23px;
      color: #FFFFFF;
    }
  }
  .link {
    text-decoration: none;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
    margin-top: 44px;
  }
  
`