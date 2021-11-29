import React from 'react';
import {
  Container,
  ScoreContainer,
  Span,
  TextDiv,
  ScoreLabel,
  ScoreValue,
} from './styles';

export default function Header({ score }) {
  return (
    <Container>
      <TextDiv>
        <Span>Rock</Span>
        <Span>Paper</Span>
        <Span>Scissors</Span>
      </TextDiv>
      <ScoreContainer background='white'>
        <ScoreLabel>Score</ScoreLabel>
        <ScoreValue>{score}</ScoreValue>
      </ScoreContainer>
    </Container>
  );
}
