import styled from 'styled-components';
import { theme } from '../../helpers/theme';

export const Card = styled.div`
  box-sizing: border-box;
  width: 200px;
  height: 130px;
  background-color: ${theme.colors.primary_p90};
  border: 1px solid ${theme.colors.primary_p50};
  border-radius: 10px;
  padding: 20px 17px;
  margin-bottom: 34px;

  @media (min-width: 768px) {
    padding: 16px;
  }

  @media (min-width: 1920px) {
    margin-bottom: 64px;
  }
`;

export const Flag = styled.img`
  width: 50px;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    margin-bottom: 8px;
  }
`;

export const Price = styled.p`
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.semiBold};

  @media (min-width: 768px) {
    font-size: ${theme.fontSizes.xl};
    font-weight: ${theme.fontWeights.bold};
  }
`;
