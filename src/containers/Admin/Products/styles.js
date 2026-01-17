import styled from "styled-components";

// Container do formulário
export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background: ${({ theme }) => theme.black};
  padding: 24px;
  border-radius: 8px;
  font-family: ${({ theme }) => theme.poppinsFont};
  color: ${({ theme }) => theme.white};

  @media (max-width: 768px) { padding: 20px; }
  @media (max-width: 480px) { padding: 16px; }
`;

// Formulário
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 480px) { gap: 16px; }
`;

// Grupo de inputs
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media (max-width: 480px) { gap: 4px; }
`;

// Label
export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.white};

  @media (max-width: 480px) { font-size: 13px; }
`;

// Input
export const Input = styled.input`
  height: 44px;
  padding: 0 12px;
  border-radius: 6px;
  border: 1px solid transparent;
  background: ${({ theme }) => theme.mainBlack};
  color: ${({ theme }) => theme.white};
  font-size: 14px;

  &::placeholder { color: ${({ theme }) => theme.darkGray}; }
  &:focus, &:focus-visible { outline: none; box-shadow: inset 0 0 0 1px ${({ theme }) => theme.purple}; }
  &:disabled { opacity: 0.6; cursor: not-allowed; }

  @media (max-width: 480px) { height: 40px; font-size: 13px; }
`;

// Checkbox
export const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  input[type="checkbox"] { width: 18px; height: 18px; cursor: pointer; accent-color: ${({ theme }) => theme.purple}; }
  label { cursor: pointer; color: ${({ theme }) => theme.white}; }

  @media (max-width: 480px) {
    gap: 6px;
    input[type="checkbox"] { width: 16px; height: 16px; }
    label { font-size: 13px; }
  }
`;

// Upload
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
  text-align: center;

  &:hover { border-color: ${({ theme }) => theme.purple}; color: ${({ theme }) => theme.purple}; }
  input { display: none; }

  @media (max-width: 480px) { height: 120px; }
`;

// Botão de submit
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
  font-family: ${({ theme }) => theme.poppinsFont};
  transition: opacity 0.2s;

  &:hover { opacity: 0.9; }
  &:disabled { opacity: 0.6; cursor: not-allowed; }

  @media (max-width: 480px) { height: 44px; font-size: 15px; }
`;

// Mensagem de erro
export const ErrorMessage = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.red};
  font-weight: 500;

  @media (max-width: 480px) { font-size: 11px; }
`;

// Botão de editar (usado na tabela)
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
