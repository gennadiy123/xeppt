import { Transaction } from '../Transaction/Transaction';
import card from '../../assets/images/card.svg';
import wallet from '../../assets/images/wallet.svg';
import { ButtonTab, ButtonsWrapper, TransactionsWrapper, ShowMore, Div } from './Transactions.styles';

const transactionsArray = [
  {
    image: card,
    title: 'Cineplex Inc.',
    info: 'Sept 24, Payment',
    sum: '-$42.50',
  },
  {
    image: wallet,
    title: 'RBC Royal Bank',
    info: 'Aug 1, Transfer from bank',
    sum: '+$500.00',
  },
  {
    image: card,
    title: 'Cineplex Inc',
    info: 'Sept 24, Payment',
    sum: '-$42.50',
  },
];

export const Transactions = () => {
  return (
    <div>
      <h4>Transactions</h4>
      <Div>
        <ButtonsWrapper>
          <ButtonTab>All</ButtonTab>
          <ButtonTab>XEPPT Card</ButtonTab>
        </ButtonsWrapper>
        <ShowMore className="upper-button">Show more</ShowMore>
      </Div>
      <TransactionsWrapper>
        {transactionsArray.map(el => (
          <Transaction image={el.image} title={el.title} info={el.info} sum={el.sum} key={el.title} />
        ))}
      </TransactionsWrapper>
      <ShowMore>Show more</ShowMore>
    </div>
  );
};
