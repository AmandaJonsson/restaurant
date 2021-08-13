import {FaBars} from 'react-icons/fa';
import {NavLink as Link} from 'react-router-dom';
import styled from 'styled-components';
import img from './header-image.jpg';


export const Nav = styled.nav`
background-image: url(${img});
height: 600px;
display: flex;
justify-content: space-between;
align-items:right;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
resizeMode: 'contain',
`;

export const NavLink = styled(Link)`
  color: #FFFFFF;
  font-family: 'Dancing Script', cursive;
  font-size: 24px;
  margin-top:30px;
  float: right;
  display: flex;
  align-items: right;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #FFFFFF;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 10x;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  

  
export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background-color: Transparent;
  padding: 10px 22px;
  color: #FFFFFF;
  outline: 2px;
  border: 1px solid #FFFFFF;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;