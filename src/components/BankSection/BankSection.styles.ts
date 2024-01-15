import styled from 'styled-components';
import { theme } from '../../helpers/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 72px;

  @media (min-width: 768px) {
    gap: 11px;
  }

  @media (min-width: 1024px) {
    flex-direction: column-reverse;
    gap: 32px;
    margin-top: 0;
    margin-bottom: auto;
  }
`;

export const BanksWrapper = styled.div`
  max-width: 311px;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 332px;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
  text-decoration: underline;
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.bold};
`;

export const Button = styled.button`
  display: block;
  max-width: 320px;
  width: 100%;
  font-size: ${theme.fontSizes.md};
  font-weight: ${theme.fontWeights.medium};
  color: ${theme.colors.primary_p50};
  background-color: ${theme.colors.neutral_n30};
  border-radius: 100px;
  margin: auto;
  padding: 15px 0;

  @media (min-width: 1024px) {
    margin: 0;
  }
`;
