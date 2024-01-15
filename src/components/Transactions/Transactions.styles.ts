import styled from 'styled-components';
import { theme } from '../../helpers/theme';

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const ButtonTab = styled.button`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.secondary_s100};
  background-color: ${theme.colors.primary_p30};
  padding: 10px 24px;
  border-radius: 100px;

  @media (min-width: 768px) {
    font-size: ${theme.fontSizes.md}
  }
`;

export const TransactionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const ShowMore = styled.button`
  display: block;
  font-size: ${theme.fontSizes.md};
  font-weight: ${theme.fontWeights.medium};
  color: ${theme.colors.primary_p50};
  background-color: ${theme.colors.neutral_n30};
  padding: 10px 24px;
  border-radius: 100px;
  margin: auto;
  margin-bottom: 32px;

  &.upper-button {
    display: none;
    margin: 0;
  }

  @media (min-width: 768px) {
    display: none;

    &.upper-button {
      display: block;
    }
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;
