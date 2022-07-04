import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/starwars">Star Wars</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/users">Random Users</StyledNavLink>
        </li>
      </ul>
    </nav>
  );
};

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  &.active {
    color: red;
  }
`;
