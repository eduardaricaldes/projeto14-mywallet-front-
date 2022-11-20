import styled from 'styled-components';

import WalletItem from './Wallet-Item';

export default function WalletItems({ items }) {
  return (
    <WalletItemsStyle>
      {
        items.map((item, index) => {
          return (
            <WalletItem key={index} item={item}/>
          )
        })
      }
    </WalletItemsStyle>
  )
}

const WalletItemsStyle = styled.ul`
display: flex;
flex-direction: column;
padding: 23px 12px;
overflow-y: scroll;
`