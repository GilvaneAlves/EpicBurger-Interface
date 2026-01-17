import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
.carousel-item {
    padding: 40px;
}
.react-multiple-carousel__arrow--left {
    left: 40px;
    top: 40px;
}
.react-multiple-carousel__arrow--right {
    top: 40px;
}
`;

export const Title = styled.h2`
font-size: 32px;
color: ${(props) => props.theme.purple};
padding-bottom:12px;
position: relative;
text-align: center;
margin-top: 40px;
margin-bottom: 25px;

&::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color: ${(props) => props.theme.purple};
    left: calc(50% - 28px);
}
`;

export const ContainerItems = styled.div`
  position: relative;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px;

  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 20px;
  height: 250px;

  pointer-events: auto;
`;

export const CategoryButton = styled(Link)`
  color: ${(props) => props.white || "#fff"};
  background-color: rgba(0,0,0,0.5);
  padding: 10px 30px;
  border-radius: 30px;
  font-size: 22.5px;
  font-weight: 500;
  text-decoration: none;

  z-index: 2;            
  pointer-events: auto;
  margin-bottom: 20px;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`;
