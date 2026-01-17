import styled from "styled-components";
import Texture from '../../assets/texture.png';
import Background from "../../assets/background.png";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.secondWhite};
  background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)),
    url(${Background});
  background-size: cover;
  background-position: center;
`;

export const Banner = styled.div`
  background-image: url(${Texture});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 180px;

  img {
    height: 150px;
    max-width: 90%;
  }

  @media (max-width: 768px) {
    height: 120px;

    img {
      height: 100px;
    }
  }
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 800;
  padding-bottom: 12px;
  color: ${({ theme }) => theme.green};
  text-align: center;
  position: relative;

  &::after {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    content: '';
    width: 56px;
    height: 4px;
    background-color: ${({ theme }) => theme.green};
  }

  @media (max-width: 768px) {
    font-size: 24px;
    padding-bottom: 8px;

    &::after {
      width: 40px;
      height: 3px;
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 28%;
  gap: 40px;
  width: 100%;
  max-width: 1280px;
  padding: 40px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 35%;
    gap: 30px;
    padding: 30px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 20px;
  }
`;
