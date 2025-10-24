import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 50px;
    background-color: #4682b4;
    display: flex;
    align-items: center;
`

export const StyledContainer = styled.div`
    max-width: 97%;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    padding: 10px;
    color: #fff;

    &.active {
        color: #ffffff33;
    }
`

export const StyledToggleBlock = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`

export const StyledToggleControl = styled.button`
  border: 1px solid #afd7f8ff;
  border-radius: 10px;
  padding: 5px 10px;
  padding-right: 40px;
  background-color: #4682b4;
  color: #fff;
  cursor: pointer;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fff;
    background-color: ${({theme}) => theme.colors.backgroundSecondary};
  }
`