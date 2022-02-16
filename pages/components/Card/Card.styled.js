import styled from "styled-components";

export const CardStyled = styled.div`
  margin: 10px;
  padding: 1%;
  width: 20%;
  height: 230px;
`;

export const ImgStyled = styled.div`
  background-image: url(${(props) => props.image});
  width: 100%;
  height: 150px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 5px;
  border-radius: 5px;
  box-shadow: 1px 1px 7px #cacaca;
`;
