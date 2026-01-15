import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  width: 100%;
  height: 70px;
  background: ${({ theme }) => theme.mainBlack};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  height: 70px;

  div {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  hr {
    height: 24px;
    border: 1px solid ${({ theme }) => theme.darkGray};
  }
`;

export const HeaderLink = styled(Link)`
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.purple : theme.white};

  border-bottom: ${({ $isActive, theme }) =>
    $isActive ? `1px solid ${theme.purple}` : "none"};

  text-decoration: none;
  font-size: 18px;
  font-family: ${({ theme }) => theme.poppinsFont};

  &:hover {
    color: ${({ theme }) => theme.purple};
    opacity: 0.7;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const Profile = styled.div`
  color: ${({ theme }) => theme.white};
  font-family: ${({ theme }) => theme.poppinsFont};

  div {
    display: flex;
    align-items: center;
    gap: 8px;
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
    font-family: ${({ theme }) => theme.poppinsFont};

    &:hover {
      color: ${({ theme }) => theme.purple};
      opacity: 0.7;
    }
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: ${({ theme }) => theme.white};
  font-family: ${({ theme }) => theme.poppinsFont};

  &:hover {
    color: ${({ theme }) => theme.purple};
    opacity: 0.7;
  }
`;
