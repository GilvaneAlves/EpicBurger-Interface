import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 220px;
  background-color: ${({ theme }) => theme.mainBlack};
  color: ${({ theme }) => theme.white};
  padding: 20px 0;
  height: 100vh;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.2); /* leve sombra à esquerda */

  img {
    margin: 0 auto 40px;
    width: 140px;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    width: 60px;
    padding: 10px 0;

    img {
      display: none;
    }
  }
`;

export const NaviLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px; /* espaçamento entre os links */
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  color: ${({ theme, $isActive }) => ($isActive ? theme.black : theme.white)};
  font-weight: 500;
  text-decoration: none;
  border-radius: 8px;
  background-color: ${({ theme, $isActive }) => ($isActive ? theme.purple : 'transparent')};
  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.darkGray};
    transform: translateX(4px);
  }

  span {
    font-family: ${({ theme }) => theme.poppinsFont};
    font-size: 14px;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;


export const Footer = styled.div`
  padding: 20px;
  button {
    display: flex;
    align-items: center;
    gap: 12px;
    color: ${({ theme }) => theme.white};
    background: none;
    border: none;
    cursor: pointer;
    font-family: ${({ theme }) => theme.poppinsFont};
    font-weight: 500;
    width: 100%;
    justify-content: flex-start;
    padding: 10px 20px;
    border-radius: 8px;
    transition: color 0.2s, background-color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.red};
      background-color: rgba(255, 0, 0, 0.1);
    }

    svg {
      min-width: 20px;
      min-height: 20px;
    }
  }
`;
