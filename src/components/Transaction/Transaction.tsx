import { Wrapper, Image, Title, Description, Div, Sum } from './Transaction.styles';

interface ITransaction {
  image: string;
  title: string;
  info: string;
  sum: string;
}

export const Transaction = ({ image, title, info, sum }: ITransaction) => {
  const isPositive = sum.charAt(0) === '+';

  return (
    <Wrapper>
      <Div>
        <Image src={image} alt={title} />
        <div>
          <Title>{title}</Title>
          <Description>{info}</Description>
        </div>
      </Div>
      <Sum className={isPositive ? 'positive' : ''}>{sum}</Sum>
    </Wrapper>
  );
};
