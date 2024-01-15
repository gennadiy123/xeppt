import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

export const Div = styled.div`
  width: 100%;
  padding: 32px 24px 20px 24px;

  @media (min-width: 768px) {
    padding: 32px;
  }

  @media (min-width: 1024px) {
    padding: 32px 18px 54px 16px;
  }

  @media (min-width: 1920px) {
    padding: 72px 24px 32px 258px;
  }
`;
