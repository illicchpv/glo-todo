import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLinkButton = styled(NavLink)`
  text-decoration: none;
  background-color: lightblue;
  color: blue;
  padding: 5px 15px;
  border-radius: 10px;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: blue;
    color: lightblue;
  }
`
