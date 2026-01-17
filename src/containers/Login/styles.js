import styled from "styled-components";
import BackgroundLogin from "../../assets/background-login.jpg";
import Background from "../../assets/background.png";
import { Link as ReactLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  background: url(${BackgroundLogin});
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  max-width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%; 
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    height: 40vh;
  }

  @media (max-width: 480px) {
    height: 30vh;

    img {
      width: 60%;
    }
  }
`;

export const RightContainer = styled.div`
  background: url(${Background});
  background-color: ${({ theme }) => theme.black};
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 50%;
  padding: 20px;

  p {
    color: ${({ theme }) => theme.white};
    font-size: 18px;
    font-weight: 800;
    text-align: center;

    a {
      text-decoration: underline;
    }
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 480px) {
    p {
      font-size: 16px;
    }
  }
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.roadRageFont};
  font-size: 50px;
  color: ${({ theme }) => theme.white};

  span {
    color: ${({ theme }) => theme.purple};
  }

  @media (max-width: 1024px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;

  @media (max-width: 480px) {
    max-width: 90%;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  input {
    width: 100%;
    border: none;
    height: 52px;
    border-radius: 5px;
    padding: 0 16px;
    background: ${({ theme }) => theme.mainBlack};
    color: ${({ theme }) => theme.white};
    font-size: 14px;

    &:focus,
    &:focus-visible {
      outline: none;
      box-shadow: inset 0 0 0 1px ${({ theme }) => theme.purple};
    }
  }

  label {
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.white};
  }

  p {
    font-size: 14px;
    line-height: 1;
    color: ${({ theme }) => theme.red};
    font-weight: 600;
    height: 10px;
  }

  @media (max-width: 480px) {
    label {
      font-size: 16px;
    }

    input {
      height: 48px;
      padding: 0 12px;
      font-size: 13px;
    }

    p {
      font-size: 12px;
    }
  }
`;

export const Link = styled(ReactLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.white};
`;
