import styled from 'styled-components';
import { theme } from '../../helpers/theme';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (min-width: 1024px) {
    gap: 18px;
  }
`;

export const Div = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  @media (min-width: 1024px) {
    gap: 18px;
  }
`;

export const Text = styled.p`
  color: ${theme.colors.primary_p50};
  font-size: ${theme.fontSizes.sm};
  cursor: pointer;
  margin: 0;

  &.username {
    display: none;
  }

  @media (min-width: 768px) {
    font-size: ${theme.fontSizes.lg};
  }

  @media (min-width: 1024px) {
    &.username {
      display: inline;
    }
  }
`;
