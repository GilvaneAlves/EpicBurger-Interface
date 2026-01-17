import styled from "styled-components";
import BannerHome from "../../assets/banner-home.png";
import Background from "../../assets/background.png";

export const Banner = styled.div`
  position: relative;
  background: url(${BannerHome});
  background-size: cover;
  background-position: center;
  height: 480px;

  h1 {
    font-family: ${({ theme }) => theme.roadRageFont};
    font-size: 80px;
    color: ${({ theme }) => theme.darkWhite};
    position: absolute;
    right: 20%;
    top: 10%;
  }

  @media (max-width: 1024px) {
    height: 360px;
    h1 {
      font-size: 60px;
      right: 15%;
      top: 8%;
    }
  }

  @media (max-width: 768px) {
    height: 280px;
    h1 {
      font-size: 40px;
      right: 10%;
      top: 6%;
    }
  }

  @media (max-width: 480px) {
    height: 200px;
    h1 {
      font-size: 28px;
      right: 5%;
      top: 4%;
    }
  }
`;

export const Container = styled.section`
  width: 100%;
  background: linear-gradient(
      rgba(114, 106, 106, 0.5),
      rgba(94, 89, 89, 0.3)
    ),
    url(${Background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  aspect-ratio: 16/9;

  @media (max-width: 1024px) {
    aspect-ratio: 4/3;
  }

  @media (max-width: 768px) {
    aspect-ratio: 1/1;
  }

  @media (max-width: 480px) {
    aspect-ratio: auto;
    height: 250px;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
`;
