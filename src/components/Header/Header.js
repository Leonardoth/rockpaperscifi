import React from 'react';
import {
  Container,
  ScoreContainer,
  Span,
  TextDiv,
  ScoreLabel,
  ScoreValue,
  ScoreReset,
} from './styles';

export default function Header({ score, setScore }) {
  function resetScore() {
    setScore(0);
  }

  return (
    <Container>
      <TextDiv>
        <Span>Rock</Span>
        <Span>Paper</Span>
        <Span>Scissors</Span>
        <Span>Lizard</Span>
        <Span>Spock</Span>
      </TextDiv>
      <ScoreContainer background='white'>
        <ScoreLabel>Score</ScoreLabel>
        <ScoreValue>{score}</ScoreValue>
        <ScoreReset onClick={() => resetScore()}>Reset</ScoreReset>
      </ScoreContainer>
    </Container>
  );
}
