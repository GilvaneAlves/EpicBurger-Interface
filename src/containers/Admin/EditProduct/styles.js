// src/containers/Admin/NewProduct/styles.js
import styled from "styled-components";

const get = (theme, token, fallback) => theme[token] ?? fallback;

export const Container = styled.div`
  width: 100%;
  padding: 24px;
  background: ${({ theme }) => get(theme, "backgroundMain", "#121212")};
  color: ${({ theme }) => get(theme, "textPrimary", "#FFFFFF")};
  font-family: ${({ theme }) => get(theme, "bodyFont", "system-ui, sans-serif")};

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  background: ${({ theme }) => get(theme, "backgroundSecondary", "#1E1E1E")};
  border: 1px solid ${({ theme }) => get(theme, "textSecondary", "#BBBBBB")};
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.25);
  padding: 20px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  font-family: ${({ theme }) => get(theme, "headingFont", "Poppins, sans-serif")};
  color: ${({ theme }) => get(theme, "textSecondary", "#BBBBBB")};
`;

export const Input = styled.input`
  height: 44px;
  padding: 0 12px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => get(theme, "textSecondary", "#BBBBBB")};
  background: ${({ theme }) => get(theme, "backgroundSecondary", "#1E1E1E")};
  color: ${({ theme }) => get(theme, "textPrimary", "#FFFFFF")};
  transition: all 0.2s ease;

  &::placeholder {
    color: ${({ theme }) => get(theme, "textPlaceholder", "#777777")};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => get(theme, "primaryRed", "#FF4C29")};
    box-shadow: 0 0 0 3px rgba(255,76,41,0.25);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const SubmitButton = styled.button`
  height: 44px;
  border: 0;
  border-radius: 10px;
  background: ${({ theme }) => get(theme, "primaryRed", "#FF4C29")};
  color: ${({ theme }) => get(theme, "textPrimary", "#FFFFFF")};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  z-index: 1;

  &:hover {
    background: rgba(255,76,41,0.85);
  }

  &:active {
    transform: translateY(1px);
    background: rgba(255,76,41,0.7);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255,76,41,0.25);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.span`
  color: #EF4444;
  font-size: 12px;
  margin-top: 4px;
`;

export const LabelUpload = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border: 1px dashed ${({ theme }) => get(theme, "textSecondary", "#BBBBBB")};
  border-radius: 10px;
  background: ${({ theme }) => get(theme, "backgroundSecondary", "#1E1E1E")};
  color: ${({ theme }) => get(theme, "textPrimary", "#FFFFFF")};
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  z-index: 1;

  &:hover {
    border-color: ${({ theme }) => get(theme, "primaryRed", "#FF4C29")};
    box-shadow: 0 1px 2px rgba(0,0,0,0.2);
  }

  &:focus-within {
    box-shadow: 0 0 0 3px rgba(255,76,41,0.25);
    border-color: ${({ theme }) => get(theme, "primaryRed", "#FF4C29")};
  }

  input[type="file"] {
    display: none;
  }
`;

export const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    accent-color: ${({ theme }) => get(theme, "primaryRed", "#FF4C29")};
    cursor: pointer;
  }

  label {
    font-size: 14px;
    color: ${({ theme }) => get(theme, "textSecondary", "#BBBBBB")};
    cursor: pointer;
  }
`;
