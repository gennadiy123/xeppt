import styled from 'styled-components';
import { theme } from '../../helpers/theme';

export const Wrapper = styled.div`
  border: 1px solid ${theme.colors.secondary_s80};
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 8px;
`;

export const Text = styled.p`
line-height: 24px;
`;
