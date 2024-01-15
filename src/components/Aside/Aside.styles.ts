import styled from 'styled-components';
import { theme } from '../../helpers/theme';
import globe from '../../assets/images/globe.svg';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 316px;
  width: 100%;
  background-color: ${theme.colors.light_s20};
  background: url(${globe}) bottom right/200px 240px no-repeat;
  padding-top: 32px;

  @media (min-width: 1920px) {
    justify-content: left;
    min-width: 743px;
    background-size: 357px 428px;
  }
`;
