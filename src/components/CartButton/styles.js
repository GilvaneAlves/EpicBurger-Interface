import styled from 'styled-components';

export const ContainerButton = styled.button`
  background-color: ${({ theme }) => theme.purple}; /* fundo escuro */
  width: 52px;
  height: 52px;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.secondDarkPurple};
  }

  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
`;
