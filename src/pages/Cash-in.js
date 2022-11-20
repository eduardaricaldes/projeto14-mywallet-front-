import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AutenticacaoContext } from '../contexts/AuthenticationProvider';
import axios from 'axios';
import styled from 'styled-components';

import { urls } from '../configs/urls';

export default function CashIn (){
  const navigate = useNavigate();
  const [token] = useContext(AutenticacaoContext);
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  function onChangeDescription(value) {
    if(value !== "") {
      setDescription(value)
    }
  }

  function onChangeValue(value) {
    if(value !== "") {
      setValue(value)
    }
  }

  function submit(e) {
    e.preventDefault();

    if(value !== "" && description !== "") {
      axios.post(urls.wallet, {
        value: parseFloat(value),
        description,
        type: "wallet-in",
      }, {
        headers: {
          Authorization: token,
        }
      }).then((resp) => {
        alert("Nova entrada cadastrada com sucesso")
        navigate("/home")
      }).catch((err) => {
        console.error(err)
        alert("Erro ao enviar essa entrada")
      })
    }
  }

  return(
    <StyledCashIn>
    <StyledHeader>
      <h1 className="title">Nova Entrada</h1>
    </StyledHeader>
      <div className="container">
        <form className="form" onSubmit={submit}>
          <input type="text" placeholder="Valor" onChange={e => onChangeValue(e.target.value)}/>
          <input type="text" placeholder="Descrição" onChange={e => onChangeDescription(e.target.value)}/>
          <button className="create">Salvar Entrada</button>
        </form>
      </div>
  </StyledCashIn>
  )
  
}

const StyledCashIn= styled.div`
padding: 24px;
height: 100vh;
flex-direction: column;
display: flex;
width: 100%;
font-family:'Raleway', sans-serif;

.title{
    font-size: 26px;
    color:#fff;
    margin-bottom: 28px;
    font-weight: 700;
  }

.container{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form{
  flex-direction: column;
  display: flex;
  width: 100%;
  font-size: 20px;
  font-weight: 400px;
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
  

  
`
const StyledHeader= styled.div`
`
