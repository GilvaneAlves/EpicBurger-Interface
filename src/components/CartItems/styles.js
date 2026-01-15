// src/components/CartItems/styles.js
import styled, { css } from "styled-components";

// Imagem do produto
export const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
`;

// Controles de quantidade
export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-weight: bold;
  font-size: 1rem;
  color: #333;
`;

// Botões de quantidade
export const QuantityButton = styled.button`
  background-color: #995DCE;
  color: ${(props) => props.white};
  border: none;
  border-radius: 4px;
  width: 30px;
  height: 30px;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #7a4bb7;
  }
  &:active {
    transform: translateY(1px);
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

// Mensagem de carrinho vazio
export const EmptyCartMessageContainer = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 1.2rem;
  color: #888;
  font-style: italic;
`;

// Footer do carrinho
export const CartFooter = styled.tfoot`
  background-color: #f7f7f7;
  border-top: 2px solid #eee;
  font-weight: bold;
`;

// Total do pedido
export const OrderTotalCell = styled.th`
  padding: 16px;
  text-align: right;
  font-size: 1.2rem;
  color: #333;
`;

export const OrderTotalPrice = styled.th`
  padding: 16px;
  text-align: right;
  font-size: 1.3rem;
  color: #995DCE;
`;

// Th personalizado (para centralizar largura e alinhamento)
export const TableTh = styled.th`
  padding: 16px;
  font-weight: bold;
  color: ${(props) => props.white};
  background-color: ${(props) => props.secondBlack};
  border-bottom: 1px solid ${(props) => props.lightGray};

  ${({ small }) => small && css`width: 10%;`}
  ${({ large }) => large && css`width: 40%;`}
  ${({ right }) => right && css`text-align: right;`}
  ${({ center }) => center && css`text-align: center;`}
  ${({ left }) => left && css`text-align: left;`}

  &:first-child { border-top-left-radius: 8px; }
  &:last-child { border-top-right-radius: 8px; }
`;

// Td personalizado (para alinhamento e bold)
export const TableTd = styled.td`
  padding: 16px;
  vertical-align: middle;
  color: #333;

  ${({ right }) => right && `text-align: right;`}
  ${({ center }) => center && `text-align: center;`}
  ${({ left }) => left && `text-align: left;`}
  ${({ bold }) => bold && `font-weight: bold;`}
`;
