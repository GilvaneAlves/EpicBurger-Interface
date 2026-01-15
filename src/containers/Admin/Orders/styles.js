import styled from "styled-components";
import Select from 'react-select';



export const ProductImage = styled.img`
    width: 100px;
    padding: 12px;
    border-radius: 16px;
    `;

export const SelectStatus = styled(Select)`
    width: 240px;
    `;
export const Filter = styled.div`
display: flex;
justify-content: center;
margin: 28px;
gap: 50px;

`;
export const FilterOptions = styled.button`
  background: none;
  border: none;
  color: ${props => props.$isactiveStatus ? props.theme.purple : '#5a5656'}; /* inativo = cinza escuro */
  font-size: 16px;
  line-height: 19px;
  padding-bottom: 4px;
  cursor: pointer;
  border-bottom: ${props => props.$isactiveStatus ? `2px solid ${props.theme.purple}` : '2px solid transparent'};
  transition: color 0.2s, border-bottom 0.2s;

  &:hover {
    color: ${props => props.theme.purple}; /* CORRETO: props dentro de função */
  }
`;
