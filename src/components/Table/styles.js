// src/components/Table/styles.js
import styled from "styled-components";

export const TableContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
  margin-bottom: 20px;
`;

export const Root = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${(props) => props.white}fff;
`;

export const Header = styled.thead``;

export const Body = styled.tbody``;

export const Tr = styled.tr`
  &:hover td {
    background-color: ${(props) => props.secondWhite};
  }
`;

export const Th = styled.th`
  padding: 16px;
  text-align: left;
  font-weight: bold;
  color: ${(props) => props.white};
  background-color: ${(props) => props.secondBlack};
  border-bottom: 1px solid ${(props) => props.lightGray};

  &:first-child {
    border-top-left-radius: 20px;
  }
  &:last-child {
    border-top-right-radius: 20px;
  }
`;

export const Td = styled.td`
  padding: 16px;
  vertical-align: middle;
  color: #333;
  border-bottom: 1px solid #eee;
  
  ${Tr}:last-child & {
    border-bottom: none;
  }
`;
export const TrashImage = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(0.8); /* Escurece a lixeira*/
  }
`;
