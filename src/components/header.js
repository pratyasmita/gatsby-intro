import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const NavLink = styled(Link)`
  color: blue;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-weight: 1;
  margin: 0.5rem;
  padding: 0.25rem;
  text-decoration: none;

  &.current-page{
    border-bottom:2px solid #222;
  }
`;
const Header = () => (
  <header
    css={css`
      background: cyan;
      border-bottom: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
      padding:0.5 rem cal((100vw-550px)/2);
    `}
  >
    <NavLink to="/" fontWeight= "bold">Choco-soup</NavLink>
    <nav css={css`margin-top=0;`}>
      <NavLink to="/" activeClassName= "current-page">Home</NavLink>
      <NavLink to="/about/" activeClassName= "current-page">About</NavLink>
    </nav>
  </header>
);
export default Header;
