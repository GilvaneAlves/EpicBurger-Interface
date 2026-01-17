import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  padding: 15px 20px;
  background-color: ${(props) => props.theme.darkPurple};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: ${(props) => props.theme.white}; /* garantir cor do texto */
    font-size: 14px;
    font-weight: 400;
    margin: 0;
    text-align: center;
  }

  /* Redes sociais ou links pequenos embaixo (opcional) */
  .footer-links {
    display: flex;
    gap: 15px;
    margin-top: 5px;

    a {
      color: ${(props) => props.theme.white};
      font-size: 14px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${(props) => props.theme.orange}; /* destaque ao passar o mouse */
      }
    }
  }

  @media (max-width: 480px) {
    padding: 10px 15px;

    p {
      font-size: 12px;
    }

    .footer-links a {
      font-size: 12px;
    }
  }
`;
