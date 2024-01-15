import styled from 'styled-components';
import card from '../../assets/images/card.png';
import { theme } from '../../helpers/theme';

export const Wrapper = styled.div`
  width: 256px;
  height: 160px;
  box-sizing: border-box;
  background: url(${card}) center/cover;
  padding: 15px 16px 18px;
  color: ${theme.colors.light_s20};
  border-radius: 15px;

  @media (min-width: 768px) {
    width: 280px;
    height: 176px;
    padding: 16px;
  }

  @media (min-width: 1920px) {
    width: 312px;
    height: 196px;
    padding: 19px 22px 21px;
  }
`;

export const Label = styled.div`
  background-color: ${theme.colors.primary_p80};
  color: ${theme.colors.primary_p20};
  display: inline-block;
  padding: 4px 16px;
  border-radius: 20px;
  font-size: ${theme.fontSizes.xxs};
  font-weight: ${theme.fontWeights.medium};
  line-height: 15px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    margin-bottom: 26px;
  }

  @media (min-width: 1920px) {
    font-size: ${theme.fontSizes.xs};
    line-height: 18px;
    padding: 4px 20px;
  }
`;

export const Balance = styled.p`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.bold};
  line-height: 30px;
`;

export const Text = styled.p`
  font-size: ${theme.fontSizes.sm};
  line-height: 21px;

  @media (min-width: 1920px) {
    line-height: 24px;
  }

  &.balance-title {
    margin-bottom: 16px;

    @media (min-width: 768px) {
      margin-bottom: 20px;
    }

    @media (min-width: 1920px) {
      margin-bottom: 23px;
    }
  }
`;
