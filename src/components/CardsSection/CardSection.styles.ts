import styled from 'styled-components';

export const Div = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 32px;

  @media (min-width: 1024px) {
    margin-bottom: 52px;
  }

  @media (min-width: 1920px) {
    margin-bottom: 64px;
  }
`;
