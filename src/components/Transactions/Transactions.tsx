import { Transaction } from '../Transaction/Transaction';
import { transactionsArray } from '../../helpers/mockData';
import { ButtonTab, ButtonsWrapper, TransactionsWrapper, ShowMore, Div } from './Transactions.styles';

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
