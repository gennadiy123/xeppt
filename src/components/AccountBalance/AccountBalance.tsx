import { Card, Flag, Price } from './AccountBalance.styles';
import flagCanada from '../../assets/images/flagCanada.png';

export const AccountBalance = () => {
  return (
    <div>
      <h4>XEPPT Account Balance</h4>
      <Card>
        <Flag src={flagCanada} alt="flag Canada" />
        <Price>$ 191.00</Price>
      </Card>
    </div>
  );
};
