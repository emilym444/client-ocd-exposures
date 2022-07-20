import {FaBars} from "react-icons/fa";
import {NavLink as Link} from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  height: 50px;
  width: 90px;
  margin-left: 160px;
  /* padding: 0.2rem calc((100vw - 1000px) / 2); */
  z-index: 12;
`;

export const NavLink = styled(Link)`
  color: #cecec3;
  display: flex;
  font-size: 20px;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #92d293;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #cecec3;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
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
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
