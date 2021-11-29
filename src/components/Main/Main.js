import React, { useContext, useState } from 'react';
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
} from './styles';
import Paper from '../../assets/images/icon-paper.svg';
import Rock from '../../assets/images/icon-rock.svg';
import Scissors from '../../assets/images/icon-scissors.svg';
import Rules from '../../assets/images/image-rules.svg';
import CloseButton from '../../assets/images/icon-close.svg';
import { ThemeContext } from 'styled-components';

function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const { colors } = useContext(ThemeContext);
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
      <ButtonsContainer>
        <Button borderGradient={colors.PaperGradient}>
          <Image src={Paper} alt='Paper' />
        </Button>
        <Button borderGradient={colors.ScissorsGradient}>
          <Image src={Scissors} alt='Scissors' />
        </Button>
        <Button borderGradient={colors.RockGradient}>
          <Image src={Rock} alt='Rock' />
        </Button>
      </ButtonsContainer>
      <RulesButton onClick={() => setIsOpen(true)}>Rules</RulesButton>
    </Container>
  );
}

export default Main;
