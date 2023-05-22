import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavbarContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px;
`;

const LinkContainer = styled.ul`
  display: flex;
  padding: 0px 550px;
  gap: 20px;
`;

const NavLinkStyled = styled(NavLink)`
  color: white;
  &.active {
    color: #4747ff;
    font-weight: 600;}

  
`

const Navbar = () => {
  return (
    <NavbarContainer>

        <LinkContainer>
        
            <NavLinkStyled to="/">Home</NavLinkStyled>
            <NavLinkStyled to="/PokeApi">PokeApi</NavLinkStyled>
            <NavLinkStyled to="/ToDo">ToDo</NavLinkStyled>

        </LinkContainer>

    </NavbarContainer>
  )
}

export default Navbar