import styled from "styled-components";
import BannerHamburger from '../../assets/banner-hamburger.png';
import Background from "../../assets/background.png";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
      rgba(88, 79, 79, 0.3),
      rgba(94, 89, 89, 0.3)
    ),
    url(${Background});
  background-size: cover;
  background-position: center;
`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 480px;
  width: 100%;
  position: relative;
  background: url(${BannerHamburger}) no-repeat center/cover;
  background-color: ${({ theme }) => theme.mainBlack};

  h1 {
    font-family: ${({ theme }) => theme.roadRageFont};
    font-size: 80px;
    line-height: 70px;
    color: ${({ theme }) => theme.white};
    position: absolute;
    right: 20%;
    top: 30%;
  }

  span {
    display: block;
    color: ${({ theme }) => theme.orange};
    font-size: 20px;
    margin-top: 8px;
  }

  @media (max-width: 1024px) {
    height: 360px;

    h1 {
      font-size: 60px;
      line-height: 55px;
      right: 15%;
      top: 25%;
    }

    span {
      font-size: 18px;
    }
  }

  @media (max-width: 768px) {
    height: 280px;

    h1 {
      font-size: 40px;
      line-height: 38px;
      right: 10%;
      top: 20%;
    }

    span {
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    height: 200px;

    h1 {
      font-size: 28px;
      line-height: 26px;
      right: 5%;
      top: 15%;
    }

    span {
      font-size: 14px;
    }
  }
`;

export const CategoryMenu = styled.section`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 30px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 30px;
    margin-top: 20px;
  }

  @media (max-width: 480px) {
    gap: 20px;
    margin-top: 16px;
  }
`;

export const CategoryButton = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  background: none;
  
  /* 🔹 cor do texto: branco se ativo, preto se não */
  color: ${({ $isActiveCategory }) => ($isActiveCategory ? '#fff' : '#000')};

  font-size: 24px;
  font-weight: 500;
  padding-bottom: 5px;
  line-height: 20px;

  /* 🔹 borda inferior opcional (pode manter ou remover) */
  border-bottom: ${({ $isActiveCategory }) =>
    $isActiveCategory ? '3px solid #fff' : '3px solid transparent'};
  
  transition: color 0.2s, border-bottom 0.2s;

  &:hover {
    color: #fff; /* cor ao passar o mouse */
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;


export const ProductsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 40px;
  gap: 60px;
  justify-content: center;
  max-width: 1280px;
  margin: 50px auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    padding: 30px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 20px;
  }
`;

export const ButtonBack = styled.button`
  margin-bottom: 20px;
  height: 44px;
  padding: 0 16px;
  border-radius: 6px;
  background: ${({ theme }) => theme.purple};
  color: ${({ theme }) => theme.white};
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 480px) {
    height: 40px;
    font-size: 14px;
  }
`;
