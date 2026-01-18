import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  width: 100%;
  height: 70px;
  background: ${({ theme }) => theme.mainBlack};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 100;
`;

/* Logo + nome */
export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;

  img {
    height: 50px;
    width: auto;
  }

  h1 {
    font-family: ${({ theme }) => theme.headingFont};
    color: ${({ theme }) => theme.white};
    font-size: 1.5rem;
  }
`;

/* Menu central */
export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  height: 70px;

  div {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  hr {
    height: 24px;
    border: 1px solid ${({ theme }) => theme.darkGray};
  }
`;

export const HeaderLink = styled(Link)`
  font-family: ${({ theme }) => theme.headingFont};
  font-size: 1rem;
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.accentOrange : theme.white};
  text-decoration: none;
  border-bottom: ${({ $isActive, theme }) =>
    $isActive ? `2px solid ${theme.accentOrange}` : "none"};
  padding-bottom: 2px;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primaryRed};
  }
`;

/* Opções direita */
export const Options = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

/* Perfil do usuário */
export const Profile = styled.div`
  color: ${({ theme }) => theme.white};
  font-family: ${({ theme }) => theme.bodyFont};

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    margin: 0;
    font-size: 14px;
  }

  span {
    font-weight: 600;
  }

  button {
    background: transparent;
    color: ${({ theme }) => theme.white};
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-family: ${({ theme }) => theme.bodyFont};

    &:hover {
      color: ${({ theme }) => theme.primaryRed};
    }
  }
`;

/* Container para links e carrinho */
export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.white};
  font-family: ${({ theme }) => theme.bodyFont};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.primaryRed};
  }
`;
