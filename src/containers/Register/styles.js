import styled from "styled-components";
import BackgroundLogin from "../../assets/background-login.jpg";
import Background from "../../assets/background.png";
import { Link as ReactLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  background: url('${BackgroundLogin}');
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
      width: 70%;
    }
  }
`;

export const RightContainer = styled.div`
  background: url('${Background}');
  background-color: #1e1e1e;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 50%;

  p {
    color: ${(props) => props.white};
    font-size: 18px;
    font-weight: 800;

    a {
      text-decoration: underline; 
    }
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    height: 60vh;
  }

  @media (max-width: 480px) {
    height: auto;
    padding: 20px 0;
  }
`;

export const Title = styled.h2`
  font-family: "Road Rage", sans-serif;
  font-size: 50px;
  color: ${(props) => props.theme.purple};
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 32px;
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
    padding: 10px;
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
  }

  label {
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => props.white};
  }

  p {
    font-size: 14px;
    line-height: 80%;
    color: ${(props) => props.darkRed};
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
    }

    p {
      font-size: 12px;
    }
  }
`;

export const Link = styled(ReactLink)`
  text-decoration: none;
  color: ${(props) => props.white};

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
