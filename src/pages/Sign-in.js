import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function SignIn() {
  return (
    <EstiloSignUp>
      <h1 className="title">MyWallet</h1>
      <form className="form">
        <input type="email" placeholder="E-mail"/>
        <input type="password" placeholder="Senha"/>
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