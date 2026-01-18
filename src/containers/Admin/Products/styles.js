import styled from "styled-components";

// Container do formulário / tabela
export const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.placeholderGray};
  padding: 24px;
  border-radius: 8px;
  font-family: ${({ theme }) => theme.poppinsFont};
  color: ${({ theme }) => theme.white};

  @media (max-width: 768px) { padding: 20px; }
  @media (max-width: 480px) { padding: 16px; }
`;

// Botão de editar (mantendo fundo roxo e ícone branco)
export const EditButton = styled.button`
  background: ${({ theme }) => theme.purple};
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.white};
  transition: opacity 0.2s;

  &:hover { opacity: 0.8; }
  &:disabled { opacity: 0.6; cursor: not-allowed; }

  @media (max-width: 480px) { padding: 5px 10px; font-size: 13px; }
`;
