import styled from 'styled-components';

import WalletItem from './Wallet-Item';

export default function WalletItems({ items }) {
  const sumItems = items.reduce((acc, item) => {
    if(item.type === 'wallet-in') {
      acc += item.value
    }else {
      acc -= item.value;
    }
    return acc;
  }, 0);
  const classBalance = sumItems > 0 ? 'positive' : 'negative';
  return (
    <MainWalletStyle>
      <WalletItemsStyle>
        {
          items.map((item, index) => {
            return (
              <WalletItem key={index} item={item}/>
            )
          })
        }
      </WalletItemsStyle>
      <WalletBalanceStyle>
        <span className="label">Saldo</span>
        <span className={`sum ${classBalance}`}>{sumItems}</span>
      </WalletBalanceStyle>
    </MainWalletStyle>
  )
}


const MainWalletStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 23px 12px;
  height: 100%;
  justify-content: space-between;
`

const WalletItemsStyle = styled.ul`
  overflow-y: scroll;
`

const WalletBalanceStyle = styled.div`
  position: relative;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  .label {
    font-weight: bold;
    color: #000;
  }
  .sum {
    &.negative {
      color: #C70000;
    }
    &.positve {
      color: #03AC00;
    }
  }
`