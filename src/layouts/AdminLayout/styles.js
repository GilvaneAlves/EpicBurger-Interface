import styled from "styled-components";

export const Container = styled.div`
  display: flex;          /* 🔥 ISSO É O MAIS IMPORTANTE */
  width: 100%;
  height: 100vh;
`;

export const Main = styled.main`
  flex: 1;                /* 🔥 ocupa todo o espaço restante */
  background-color: ${({ theme }) => theme.secondWhite};
  overflow-x: hidden;
  overflow-y: auto;
`;

export const Section = styled.section`
  width: 100%;
  max-width: 1400px;      /* mais espaço para tabelas */
  margin: 0 auto;
  padding: 32px;
`;
