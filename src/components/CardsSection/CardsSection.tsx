import { Card } from '../Card/Card';
import { AddCard } from '../AddCard/AddCard';
import { Div } from './CardSection.styles';

export const CardsSection = () => {
  return (
    <div>
      <h4>XEPPT Prepaid Card</h4>
      <Div>
        <Card />
        <AddCard />
      </Div>
    </div>
  );
};
