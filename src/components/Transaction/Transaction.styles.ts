import styled from 'styled-components';
import { theme } from '../../helpers/theme';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  border: 1px solid ${theme.colors.secondary_s80};
  border-radius: 8px;
  padding: 16px;
  background-color: ${theme.colors.light_s20};
`;

export const Image = styled.img`
  width: 40px;

  @media (min-width: 768px) {
    width: 50px;
  }
`;

export const Title = styled.p`
  font-size: ${theme.fontSizes.md};
  font-weight: ${theme.fontWeights.semiBold};

  @media (min-width: 768px) {
    font-size: ${theme.fontSizes.xl};
    line-height: 30px;
  }
`;

export const Description = styled.p`
  font-size: ${theme.fontSizes.xs};

  @media (min-width: 768px) {
    font-size: ${theme.fontSizes.md};
    line-height: 24px;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (min-width: 768px) {
    gap: 24px;
  }
`;

export const Sum = styled.p`
  font-size: ${theme.fontSizes.md};
  font-weight: ${theme.fontWeights.bold};

  &.positive {
    color: ${theme.colors.success_su40};
  }

  @media (min-width: 768px) {
    font-size: ${theme.fontSizes.xl};
  }
`;
