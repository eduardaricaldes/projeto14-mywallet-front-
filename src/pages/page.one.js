import styled from 'styled-components';

export  function PageOne(){
  return(
    <EstiloPageOne>
      <h1>MyWallet</h1>
      <div className="inputs">
        <input type= "text"></input>
        <input type="passaword"></input>
        <input type="botton">Entrar</input>
      </div>
    </EstiloPageOne>
  )
}

const EstiloPageOne=styled.div`
.inputs{
        display: flex;
        flex-direction: column;
        input{
          font-weight: 400;
          display: block;
          margin-bottom: 5px;
          height: 45px;
          border: 1px solid #D5D5D5;
          border-radius:4px ;
          font-size: 18px;
          padding: 6px;
          color: #666666;
          ::placeholder {
            color: #DBDBDB;
          }
        }
    }

`