import { ReactComponent as AddCardIcon } from '../../assets/images/addCardIcon.svg';
import { Wrapper, Text } from './AddCard.styles';

export const AddCard = () => {
  return (
    <Wrapper>
      <AddCardIcon />
      <Text>Order a new card</Text>
    </Wrapper>
  );
};
