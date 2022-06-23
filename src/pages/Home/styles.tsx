
import styled from "styled-components";

export const CardsWrapper = styled.div`
  display: grid;
  gap: 50px;
  /* dois parametros, primeiro a quantidade de colunas e o segundo o tamanho de cada item */
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  box-sizing: border-box;
  padding: 30px;
  
`;

