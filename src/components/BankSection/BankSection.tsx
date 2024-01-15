import { BankCard } from '../BankCard/BankCard';
import { ReactComponent as AddCardIcon } from '../../assets/images/addCardIcon.svg';
import { banksArray } from '../../helpers/mockData';
import { Wrapper, BanksWrapper, Div, Button } from './BankSection.styles';

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
