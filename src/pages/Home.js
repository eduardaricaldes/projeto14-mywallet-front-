import { useState, useEffect, useContext } from 'react';
import { AutenticacaoContext } from '../contexts/AuthenticationProvider';
import { UsuarioContext } from '../contexts/UserProvider';

import axios from 'axios';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

import { urls } from '../configs/urls';
import WalletItems from '../components/Wallet-Items';

export default function Home() {
  const navigate = useNavigate();
  const [wallet, setWallet] = useState([]);
  const [token] = useContext(AutenticacaoContext);
  const [usuario] = useContext(UsuarioContext);

  useEffect(() => {
    axios.get(urls.wallet, {
      headers: {
        Authorization: token,
      }
    }).then((resp) => {
      const { data } = resp;
      setWallet(data);
    }).catch((err) => {
      console.error(err);
      alert("erro ao recuperar dados de sua wallet");
      if(err.response.status === 401) {
        navigate("/")
      }
    })
  }, []);


  return (
    <EstiloHome>
      <EstiloHeader>
        <h1>Olá, {usuario?.name}</h1>
        <ion-icon name="exit-outline"></ion-icon>
      </EstiloHeader>
      <EstiloRegistros>
        {
          wallet.length > 0 ?
          (
            <WalletItems items={wallet}/>
          ):
          (
            <EstiloSemDados>
              <p>Nao ha registros de entrada ou saida</p>
            </EstiloSemDados>
          )
        }        
      </EstiloRegistros>
      <EstiloAcoes>
         <Link to="/cashin" className="next-page">
          <div className="cash-in">
            <ion-icon name="add-circle-outline"></ion-icon>
            <div className="text">
              <p>Nova Entrada</p>
            </div>
          </div>
         </Link>
         <Link to="/cashout" className="next-page">
          <div className="cash-out">
            <ion-icon name="remove-circle-outline"></ion-icon>
            <div className="text">
              <p>Nova Saida</p>
            </div>
          </div>
         </Link>
      </EstiloAcoes>
    </EstiloHome>
  )
}

const EstiloHome = styled.div`
font-family:'Raleway', sans-serif;
padding:24px;
`

const EstiloHeader = styled.header`
display: flex;
justify-content: space-between;
margin-bottom: 22px;
align-items: center;
ion-icon{
  color: #ffff;
}

h1{
  font-size: 26px;
  color: #ffff;
}
`

const EstiloRegistros = styled.section`
background-color: #ffff;
border-radius: 5px;
text-align: center;
margin-bottom: 13px;
height: 446px;
p{
  color: #868686;
}
`

const EstiloSemDados = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const EstiloAcoes = styled.footer`
display: flex;
justify-content:space-between;

.next-page {
  text-decoration: none;
  color: #ffff;
  flex-grow: 1;
  margin-right: 15px;
}
.next-page:last-child {
  margin-right: 0;
}

ion-icon{
  color: #ffff;
}

.cash-in,
.cash-out{
  border-radius: 5px;
  height: 114px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #A328D6;
  padding: 10px 9px;

  .text {
    width: 64px;
    color: #fff;
  }
}

`