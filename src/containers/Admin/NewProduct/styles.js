import styled from "styled-components";

const get = (theme, token, fallback) => theme[token] ?? fallback;

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background: ${({ theme }) => get(theme, "backgroundSecondary", "#1E1E1E")};
  padding: 24px;
  border-radius: 12px;
  font-family: ${({ theme }) => get(theme, "bodyFont", "system-ui, sans-serif")};
  color: ${({ theme }) => get(theme, "textPrimary", "#FFFFFF")};

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
  gap: 16px;

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  input {
    height: 44px;
    padding: 0 12px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => get(theme, "textSecondary", "#BBBBBB")};
    background: ${({ theme }) => get(theme, "backgroundSecondary", "#1E1E1E")};
    color: ${({ theme }) => get(theme, "textPrimary", "#FFFFFF")};
    font-size: 14px;
    transition: all 0.2s ease;
  }

  input::placeholder {
    color: ${({ theme }) => get(theme, "textPlaceholder", "#777777")};
  }

  input:focus {
    outline: none;
    border-color: ${({ theme }) => get(theme, "primaryRed", "#FF4C29")};
    box-shadow: 0 0 0 3px rgba(255,76,41,0.25);
  }

  @media (max-width: 480px) {
    gap: 4px;

    input {
      height: 40px;
      font-size: 13px;
    }
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => get(theme, "textSecondary", "#BBBBBB")};

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  input {
    width: 18px;
    height: 18px;
    accent-color: ${({ theme }) => get(theme, "primaryRed", "#FF4C29")};
    cursor: pointer;
  }

  @media (max-width: 480px) {
    gap: 6px;

    input {
      width: 16px;
      height: 16px;
    }
  }
`;

export const LabelUpload = styled.label`
  height: 140px;
  border: 2px dashed ${({ theme }) => get(theme, "textSecondary", "#BBBBBB")};
  border-radius: 12px;
  background: ${({ theme }) => get(theme, "backgroundSecondary", "#1E1E1E")};
  color: ${({ theme }) => get(theme, "textSecondary", "#BBBBBB")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  text-align: center;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    border-color: ${({ theme }) => get(theme, "primaryRed", "#FF4C29")};
    color: ${({ theme }) => get(theme, "primaryRed", "#FF4C29")};
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
  background: ${({ theme }) => get(theme, "primaryRed", "#FF4C29")};
  color: ${({ theme }) => get(theme, "textPrimary", "#FFFFFF")};
  font-size: 16px;
  font-weight: 600;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-family: ${({ theme }) => get(theme, "headingFont", "Poppins, sans-serif")};
  transition: all 0.2s ease;

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
  color: #EF4444;
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;
