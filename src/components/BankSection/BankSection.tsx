import { BankCard } from '../BankCard/BankCard';
import { ReactComponent as AddCardIcon } from '../../assets/images/addCardIcon.svg';
import { Wrapper, BanksWrapper, Div, Button } from './BankSection.styles';

const banksArray = [{ data: 'Signature RBC visa ( ****3234)' }, { data: 'TD Bank Debit ( ****0024)' }];

export const BankSection = () => {
  return (
    <Wrapper>
      <div>
        <h4>Bank Account and Cards</h4>
        <BanksWrapper>
          {banksArray.map(el => (
            <BankCard data={el.data} key={el.data} />
          ))}
        </BanksWrapper>
        <Div>
          <AddCardIcon />
          <p>Link a card or bank</p>
        </Div>
      </div>
      <Button>Add money</Button>
    </Wrapper>
  );
};
