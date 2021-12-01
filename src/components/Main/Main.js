import React, { useContext, useState, useEffect } from 'react';
import {
  Container,
  ButtonsContainer,
  Button,
  Image,
  RulesButton,
  ModalBackground,
  Modal,
  ModalTitle,
  ModalImage,
  ModalClose,
  GameContainer,
  GameLabel,
  GameResult,
  GameButton,
  Play,
  Player,
  House,
} from './styles';

// Play icons
import Paper from '../../assets/images/icon-paper.svg';
import Rock from '../../assets/images/icon-rock.svg';
import Scissors from '../../assets/images/icon-scissors.svg';
import Spock from '../../assets/images/icon-spock.svg';
import Lizard from '../../assets/images/icon-lizard.svg';

import Rules from '../../assets/images/image-rules-bonus.svg';
import CloseButton from '../../assets/images/icon-close.svg';
import { ThemeContext } from 'styled-components';

function Main({ score, setScore }) {
  const [isOpen, setIsOpen] = useState(false);
  const { colors } = useContext(ThemeContext);
  const [gameResult, setGameResult] = useState(undefined);
  const [gameOptions, setGameOptions] = useState([
    'Rock',
    'Paper',
    'Scissors',
    'Spock',
    'Lizard',
  ]);
  const [playerSelection, setPlayerSelection] = useState(undefined);
  const [houseSelection, setHouseSelection] = useState(undefined);
  const [gameConfig, setGameConfig] = useState({
    isPlaying: false,
    pointsPerWin: 1,
    pointsPerDraw: 0,
    Rock: {
      image: Rock,
      gradient: colors.RockGradient,
      alt: 'Rock',
      losesTo: ['Paper', 'Spock'],
    },
    Paper: {
      image: Paper,
      gradient: colors.PaperGradient,
      alt: 'Paper',
      losesTo: ['Scissors', 'Lizard'],
    },
    Scissors: {
      image: Scissors,
      gradient: colors.ScissorsGradient,
      alt: 'Scissors',
      losesTo: ['Rock', 'Spock'],
    },
    Spock: {
      image: Spock,
      gradient: colors.SpockGradient,
      alt: 'Spock',
      losesTo: ['Paper', 'Lizard'],
    },
    Lizard: {
      image: Lizard,
      gradient: colors.LizardGradient,
      alt: 'Lizard',
      losesTo: ['Rock', 'Scissors'],
    },
  });

  useEffect(() => {
    if (houseSelection) {
      playGame(playerSelection, houseSelection);
    }
  }, [houseSelection]);
  function gameReset() {
    setPlayerSelection(undefined);
    setHouseSelection(undefined);
    setGameConfig({ ...gameConfig, isPlaying: false });
    setGameResult(undefined);
  }

  function gameEnd(condition) {
    let _score = Number.parseInt(score);
    let result = _score;
    switch (condition) {
      case 'win':
        result += gameConfig.pointsPerWin;
        setGameResult('You Win');
        break;
      case 'draw':
        result += gameConfig.pointsPerDraw;
        setGameResult('Draw');
        break;
      default:
        setGameResult('You Lose');
        break;
    }
    setScore(result);
  }

  function getHouseOption() {
    let randomOption =
      gameOptions[Math.floor(Math.random() * gameOptions.length)];
    setHouseSelection(randomOption);
  }

  function selectPlayerOption(option) {
    setPlayerSelection(option);
    setGameConfig({ ...gameConfig, isPlaying: true });
    setTimeout(() => {
      getHouseOption();
    }, 1000);
  }

  function playGame(player, house) {
    if (player === house) {
      gameEnd('draw');
    } else if (!gameConfig[player].losesTo.includes(house)) {
      gameEnd('win');
    } else {
      gameEnd('lose');
    }
  }
  return (
    <Container>
      <ModalBackground isOpen={isOpen} onClick={() => setIsOpen(false)} />
      <Modal isOpen={isOpen}>
        <ModalTitle>Rules</ModalTitle>
        <ModalImage src={Rules} />
        <ModalClose onClick={() => setIsOpen(false)}>
          <img src={CloseButton} alt='Close rules' />
        </ModalClose>
      </Modal>
      {gameConfig.isPlaying ? (
        <GameContainer>
          {playerSelection ? (
            <Player>
              <Play borderGradient={gameConfig[playerSelection].gradient}>
                <Image
                  src={gameConfig[playerSelection].image}
                  alt={gameConfig[playerSelection].alt}
                />
              </Play>
              <GameLabel>You Picked</GameLabel>
            </Player>
          ) : (
            ''
          )}
          {houseSelection ? (
            <House>
              <Play borderGradient={gameConfig[houseSelection].gradient}>
                <Image
                  src={gameConfig[houseSelection].image}
                  alt={gameConfig[houseSelection].alt}
                />
              </Play>
              <GameLabel>The House Picked</GameLabel>
            </House>
          ) : (
            ''
          )}
          {gameResult ? (
            <>
              <GameResult>{gameResult}</GameResult>
              <GameButton onClick={() => gameReset()}>Play Again</GameButton>
            </>
          ) : (
            ''
          )}
        </GameContainer>
      ) : (
        <ButtonsContainer>
          <Button
            borderGradient={colors.ScissorsGradient}
            onClick={() => selectPlayerOption('Scissors')}
          >
            <Image src={Scissors} alt='Scissors' />
          </Button>
          <Button
            borderGradient={colors.SpockGradient}
            onClick={() => selectPlayerOption('Spock')}
          >
            <Image src={Spock} alt='Spock' />
          </Button>
          <Button
            borderGradient={colors.PaperGradient}
            onClick={() => selectPlayerOption('Paper')}
          >
            <Image src={Paper} alt='Paper' />
          </Button>
          <Button
            borderGradient={colors.LizardGradient}
            onClick={() => selectPlayerOption('Lizard')}
          >
            <Image src={Lizard} alt='Lizard' />
          </Button>
          <Button
            borderGradient={colors.RockGradient}
            onClick={() => selectPlayerOption('Rock')}
          >
            <Image src={Rock} alt='Rock' />
          </Button>
        </ButtonsContainer>
      )}
      <RulesButton onClick={() => setIsOpen(true)}>Rules</RulesButton>
    </Container>
  );
}

export default Main;
