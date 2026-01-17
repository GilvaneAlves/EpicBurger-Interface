import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background: ${({ theme }) => theme.black};
  padding: 24px;
  border-radius: 8px;
  box-shadow: none;
  font-family: ${({ theme }) => theme.poppinsFont};
  color: ${({ theme }) => theme.white};

  @media (max-width: 768px) {
    padding: 20px;
  }
  @media (max-width: 480px) {
    padding: 16px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 480px) {
    gap: 16px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media (max-width: 480px) {
    gap: 4px;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.white};

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

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

  &:focus,
  &:focus-visible {
    outline: none;
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.purple};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    height: 40px;
    font-size: 13px;
  }
`;

export const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  label {
    font-size: 14px;
    color: ${({ theme }) => theme.white};
    cursor: pointer;
  }

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    accent-color: ${({ theme }) => theme.purple};
    cursor: pointer;
  }

  @media (max-width: 480px) {
    gap: 6px;

    label {
      font-size: 13px;
    }

    input[type="checkbox"] {
      width: 16px;
      height: 16px;
    }
  }
`;

export const LabelUpload = styled.label`
  height: 140px;
  border: 2px dashed ${({ theme }) => theme.lightGray};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.lightGray};
  background: ${({ theme }) => theme.mainBlack};
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s;
  text-align: center;

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

  @media (max-width: 480px) {
    height: 120px;
  }
`;

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

  @media (max-width: 480px) {
    height: 44px;
    font-size: 15px;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.red};
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

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

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    padding: 5px 10px;
    font-size: 13px;
  }
`;
