import styled from 'styled-components';

export const Pagiination = styled.div`
  width: 100%;
  margin: 20px 0;
  justify-content: center;
  display: flex;
  ul {
    border: dashed 1px var(--purple-lighter);
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    background-color: var(--purple-white);
  }
  li {
    display: flex;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    a {
      color: var(--blue);
      text-decoration: none;
    }
    &.selected {
      background-color: var(--purple-lighter);
    }
  }
`;
