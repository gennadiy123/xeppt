import { Wrapper, Label, Balance, Text } from './Card.styles';

export const Card = () => {
  return (
    <Wrapper>
      <Label>
        <p>Inactive</p>
      </Label>
      <Balance>$0.00</Balance>
      <Text className="balance-title">Available Balance</Text>
      <Text>4588 •••• •••• 0092</Text>
    </Wrapper>
  );
};
