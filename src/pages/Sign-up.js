import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

import { AutenticacaoContext } from '../contexts/AuthenticationProvider';
import { urls } from '../configs/urls';

export default function SignUp(){
  const navigate = useNavigate();
  const [token, armazenarToken, logado, setLogado] = useContext(AutenticacaoContext);
  
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [enabledSubmit, setEnableSubmit] = useState(false);

  function onChangeName(value) {
    if(value !== "") {
      setName(value)
    }
  }

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

  function onChangeConfirmPassword(value) {
    if(value !== "") {
      setConfirmPassword(value)
    }
  }

  useEffect(() => {
    if(password === confirmPassword) {
      setEnableSubmit(true)
    }
  }, [password, confirmPassword])


  function submit(e) {
    e.preventDefault();

    if(
      name !== "" &&
      email !== "" &&
      password !== "" && 
      confirmPassword !== "" &&
      enabledSubmit !== false
    ) {
      axios.post(urls.signup, {
        name,
        email,
        password
      }).then((resp) => {
        navigate("/");
      }).catch((err) => {
        console.log(err)
        alert("Erro ao cadastrar")
      })
    }
  }


  return(
    <EstiloSignUp>
      <div className="container">
        <h1 className="title">MyWallet</h1>
        <form className="form" onSubmit={submit}>
          <input type= "text" placeholder="Nome" onChange={event => onChangeName(event.target.value)}/>
          <input type="email" placeholder="E-mail" onChange={event => onChangeEmail(event.target.value)}/>
          <input type="password" placeholder="Senha" onChange={event => onChangePassword(event.target.value)}/>
          <input type="password" placeholder="Confirme a senha" onChange={event => onChangeConfirmPassword(event.target.value)}/>
          <button className="create" disabled={!enabledSubmit}>Cadastrar</button>
        </form>
        <Link to="/" className="link">Já tem uma conta? Entre agora!</Link>
      </div>
    </EstiloSignUp>
  )
}

const EstiloSignUp=styled.div`
padding: 24px;
height: 100vh;

.container{
  margin-top: 95px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
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