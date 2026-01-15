import styled from "styled-components";


export const Container = styled.header`
  width: 100vw;
  height: 50px;
  background-color: ${(props) => props.theme.darkPurple};
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: center;
  
p {
  color: ${(props) => props.white};
  font-size: 14px;
  font-weight: lighter;

}
`;
