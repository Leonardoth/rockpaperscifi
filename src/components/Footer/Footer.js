import React from 'react';
import { Container, Link } from './styles';

export default function Footer() {
  return (
    <Container>
      Challenge by{' '}
      <Link
        href='https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH/'
        target='_blank'
      >
        Frontend Mentor
      </Link>
      . Coded by{' '}
      <Link href='https://github.com/Leonardoth' target='_blank'>
        Leonardo Matheus
      </Link>
      .
    </Container>
  );
}
