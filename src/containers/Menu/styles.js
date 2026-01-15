import styled from "styled-components";
import BannerHamburger from '../../assets/banner-hamburger.png';
import Background from "../../assets/background.png";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh; /* corrigido de min-width */
  background-color: ${(props) => props.theme.secondWhite};
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
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
  background-color: ${(props) => props.theme.mainBlack};

  h1 {
    font-family: ${(props) => props.theme.roadRageFont};
    font-size: 80px;
    line-height: 65px;
    color: ${(props) => props.theme.white};
    position: absolute;
    right: 20%;
    top: 30%;
  }

  span {
    display: block;
    color: ${(props) => props.theme.white};
    font-size: 20px;
  }
`;

export const CategoryMenu = styled.section`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 30px;
`;

export const CategoryButton = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  background: none;
  color: ${({ $isActiveCategory, theme }) =>
        $isActiveCategory ? theme.purple : theme.darkGray};
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 5px;
  line-height: 20px;
  border: none;
  border-bottom: ${({ $isActiveCategory, theme }) =>
        $isActiveCategory ? `3px solid ${theme.purple}` : '3px solid transparent'};
  display: inline-block;
`;

export const ProductsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 40px;
  gap: 60px;
  justify-content: center;
  max-width: 1280px;
  margin: 50px auto;
`;

export const ButtonBack = styled.button`
  margin-bottom: 20px;
`;
