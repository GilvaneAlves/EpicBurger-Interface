import styled from "styled-components";
import Select from 'react-select';
import { standardTheme } from '../../../styles/themes/standard';

export const ProductImage = styled.img`
  width: 100px;
  padding: 12px;
  border-radius: 16px;

  @media (max-width: 768px) {
    width: 80px;
    padding: 8px;
  }

  @media (max-width: 480px) {
    width: 60px;
    padding: 6px;
  }
`;

export const SelectStatus = styled(Select)`
  width: 240px;

  .react-select__control {
    background-color: ${standardTheme.mainBlack};
    border-radius: 6px;
    border: 1px solid #ccc;
    min-height: 36px;
    font-size: 14px;
    color: ${standardTheme.white};
  }

  @media (max-width: 768px) { width: 180px; }
  @media (max-width: 480px) { width: 140px; }
`;

export const Filter = styled.div`
  display: flex;
  justify-content: center;
  margin: 28px;
  gap: 50px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 30px;
    margin: 20px;
  }

  @media (max-width: 480px) {
    gap: 20px;
    margin: 16px;
  }
`;

export const FilterOptions = styled.button`
  background: none;
  border: none;
  color: ${({ $isactiveStatus }) => $isactiveStatus ? standardTheme.purple : '#5a5656'};
  font-size: 16px;
  line-height: 19px;
  padding-bottom: 4px;
  cursor: pointer;
  border-bottom: ${({ $isactiveStatus }) => $isactiveStatus ? `2px solid ${standardTheme.purple}` : '2px solid transparent'};
  transition: color 0.2s, border-bottom 0.2s;

  &:hover { color: ${standardTheme.purple}; }

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 16px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 14px;
  }
`;
