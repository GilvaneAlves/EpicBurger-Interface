import styled from "styled-components";

/* Container principal (card escuro, tipografia e contraste) */
export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background: ${({ theme }) => theme.black};
  padding: 24px;
  border-radius: 8px;
  box-shadow: none; /* visual mais flat, como no print */
  font-family: ${({ theme }) => theme.poppinsFont};
  color: ${({ theme }) => theme.white};
`;

/* Formulário */
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

/* Grupo de input */
export const ImputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

/* Alias opcional (sem quebrar o existente) — pode usar InputGroup nos próximos componentes */
export const InputGroup = ImputGroup;

/* Label padrão com contraste */
export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.white};
`;

/* Novo Input reutilizável (para "Nome", "Preço", etc.) */
export const Input = styled.input`
  height: 44px;
  padding: 0 12px;
  border-radius: 6px;
  border: 1px solid transparent;
  background: ${({ theme }) => theme.mainBlack};
  color: ${({ theme }) => theme.white};
  font-size: 14px;

  &::placeholder {
    color: ${({ theme }) => theme.darkGray};
  }

  &:focus {
    outline: none;
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.purple};
  }

  &:focus-visible {
    outline: none;
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.purple};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

/* Label para upload (área de drop/click) */
export const LabelUpload = styled.label`
  height: 140px;
  border: 2px dashed ${({ theme }) => theme.lightGray};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.lightGray};
  background: ${({ theme }) => theme.mainBlack};
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.purple};
    color: ${({ theme }) => theme.purple};
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.purple};
  }

  input {
    display: none;
  }
`;

/* Select (fundo escuro, seta via SVG com currentColor, foco roxo sem "pular" layout) */
export const Select = styled.select`
  height: 44px;
  padding: 0 36px 0 12px; /* espaço para a seta à direita */
  border-radius: 6px;
  border: 1px solid transparent;
  font-size: 14px;
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.mainBlack};

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  /* Seta usa currentColor: adapta automaticamente ao tema (claro/escuro) */
  background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;

  &:focus {
    outline: none;
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.purple};
  }

  &:focus-visible {
    outline: none;
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.purple};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

/* Botão de submit — largura total como no mock */
export const SubmitButton = styled.button`
  width: 100%;
  height: 48px;
  background: ${({ theme }) => theme.purple};
  color: ${({ theme }) => theme.white};
  font-size: 16px;
  font-weight: 600;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s;
  font-family: ${({ theme }) => theme.poppinsFont};

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

/* Mensagem de erro (leve reforço de peso no dark) */
export const ErrorMessage = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.red};
  font-weight: 500;
`;

