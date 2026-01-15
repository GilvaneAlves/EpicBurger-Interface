import styled from 'styled-components';

export const ButtonBack = styled.button`
    background: ${(props) => props.theme.purple};
    color: ${(props) => props.white};
    border: none;
    padding: 10px 25px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    transition: 0.2s;
   
    

    &:hover {
        background: ${(props) => props.theme.secondDarkPurple};
    }
`;
