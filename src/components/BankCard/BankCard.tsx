import { Wrapper, Text } from './BankCard.styles';

export const BankCard = ({ data }: { data: string }) => {
  return (
    <Wrapper>
      <Text>{data}</Text>
    </Wrapper>
  );
};
