import styled from 'styled-components';
import { theme } from '../../helpers/theme';

export const Wrapper = styled.div`
  position: absolute;
  width: 256px;
  height: 160px;
  box-sizing: border-box;
  background-color: ${theme.colors.secondary_s90};
  border: 1px solid ${theme.colors.secondary_s80};
  padding: 27px 21px;
  border-radius: 10px;
  margin-bottom: 22px;
  margin-left: 270px;

  @media (min-width: 768px) {
    width: 280px;
    height: 176px;
    margin-left: 304px;
  }

  @media (min-width: 1920px) {
    width: 312px;
    height: 196px;
    margin-left: 336px;
  }
`;

export const Text = styled.p`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.bold};
  line-height: 30px;
`;
