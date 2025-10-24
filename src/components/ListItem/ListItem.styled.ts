import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled.a<{isDone: boolean}>`
  text-decoration: none;
  padding: 10px;
  color: ${({isDone}) => isDone ? 'green' : 'red'};
  text-decoration: ${({isDone}) => isDone ? 'line-through' : 'none'};
`

export const StyledNavLink = styled(NavLink)<{isDone: boolean}>`
  text-decoration: none;
  padding: 10px;
  color: ${({isDone}) => isDone ? 'green' : 'red'};
  text-decoration: ${({isDone}) => isDone ? 'line-through' : 'none'};
`