import styled from 'styled-components';
import dayjs from 'dayjs'

let realLocale = Intl.NumberFormat("pt-BR")

export default function WalletItem({ item }) {
  const typeItem = item.type === 'wallet-in'? 'in': 'out';
  return (
    <WalletItemStyle>
      <span className="date">{dayjs(item.date).format("DD/MM")}</span>
      <span className="description">{item.description}</span>
      <span className={`value ${typeItem}`}>{realLocale.format(item.value)}</span>
    </WalletItemStyle>
  )
}

const WalletItemStyle = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  .date{
    color: #C6C6C6;
  }
  .description{
    color: #000000;
    flex-grow: 2;
    text-align: left;
    margin-left: 10px;
  }
  .value {
    &.out {
      color: #C70000;
    }
    &.in {
      color: #03AC00;
    }
  }
`