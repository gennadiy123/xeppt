import logo from '../../assets/images/logo.png';
import { HeaderUserInfo } from '../HeaderUserInfo/HeaderUserInfo';
import { HeaderWrapper, StyledLink, Nav, Image, Div, Burger } from './Header.styles';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Burger />
      <Div>
        <Image src={logo} alt="logo" />
        <Nav>
          <StyledLink to="https://google.com">Home</StyledLink>
          <StyledLink to="https://google.com">XEPPT Card</StyledLink>
          <StyledLink to="https://google.com">Statements</StyledLink>
        </Nav>
      </Div>
      <HeaderUserInfo />
    </HeaderWrapper>
  );
};
