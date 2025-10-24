import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)<{done: string}>`
  text-decoration: none;
  padding: 10px;
  color: ${({done}) => done === 'true' ? 'green' : 'red'};
  text-decoration: ${({done}) => done === 'true' ? 'line-through' : 'none'};
`