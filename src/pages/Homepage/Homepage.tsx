import { AccountBalance } from '../../components/AccountBalance/AccountBalance';
import { CardsSection } from '../../components/CardsSection/CardsSection';
import { Transactions } from '../../components/Transactions/Transactions';
import { BankSection } from '../../components/BankSection/BankSection';
import { Aside } from '../../components/Aside/Aside';
import { useMediaQuery } from '../../helpers/hooks';
import { Wrapper, Div } from './Homepage.styles';

export const Homepage = () => {
  const isWideScreen = useMediaQuery('(min-width: 1024px)');

  return (
    <Wrapper>
      <Div>
        <AccountBalance />
        <CardsSection />
        <Transactions />
        {!isWideScreen && <BankSection />}
      </Div>
      {isWideScreen && <Aside />}
    </Wrapper>
  );
};
