import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: #d8c5b4;
  opacity: 0.6;
  width: 300px;
  margin: 10px;
  border-radius: 8px;
  border-bottom: 2px solid #b66b48;
`;

const H1Styled = styled.h1`
  background-color: #412c19;
  color: #c0c5c8;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 10px;
  text-align: center;
  font-size: 22px;
  margin: 0;
`;

const DivWrapper = styled.div`
  opacity: 0.6;
`;

const PStyled = styled.p`
  list-style-type: square;
  font-size: 18px;
`;

export default function CardProducer(props) {
  return (
      <Card>
        <H1Styled>{props.char.name}</H1Styled>
        <DivWrapper>
          <PStyled>Birth Year: {props.char.birth_year}</PStyled>
          <PStyled>Height: {props.char.height}</PStyled>
          <PStyled>Mass: {props.char.mass}</PStyled>
          <PStyled>Gender: {props.char.gender}</PStyled>
          <PStyled>Hair Color: {props.char.hair_color}</PStyled>
          <PStyled>Eye Color: {props.char.eye_color}</PStyled>
        </DivWrapper>
      </Card>
  );
}
