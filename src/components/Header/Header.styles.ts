import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../helpers/theme';
import { ReactComponent as BurgerIcon } from '../../assets/images/burger.svg';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.secondary};
  padding: 16px 27px;

  @media (min-width: 768px) {
    padding: 26px 31px 27px 39px;
  }

  @media (min-width: 1024px) {
    padding: 24px 23px 24px 16px;
  }

  @media (min-width: 1920px) {
    padding: 40px 237px 34px 258px;
  }
`;

export const Div = styled.div`
  display: flex;
  gap: 114px;
`;

export const Nav = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 24px;
    align-items: center;
  }

  @media (min-width: 1024px) {
    gap: 48px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${theme.colors.primary_p50};
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.lg};
  transition: all 0.3s ease-out;

  &:hover {
    background-color: ${theme.colors.secondary_s20};
    border-radius: 30px;
    padding: 8px 24px;

    @media (min-width: 1024px) {
      padding: 8px 24px;
    }

    @media (min-width: 1920px) {
      padding: 13px 32px;
    }
  }

  @media (min-width: 1920px) {
    font-size: ${theme.fontSizes.xl};
  }
`;

export const Image = styled.img`
  width: 100px;
  height: 35px;
  cursor: pointer;

  @media (min-width: 1024px) {
    width: 140px;
    height: 49px;
  }
`;

export const Burger = styled(BurgerIcon)`
  @media (min-width: 768px) {
    display: none;
  }
`;
