import styled from "styled-components";

export const PaginationStyled = styled.div`
  border: 1px lightgrey solid;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background-color: lightgrey;
  }
`;

export const PaginationBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  justify-content: center;
  margin-top: 15px;
`;
