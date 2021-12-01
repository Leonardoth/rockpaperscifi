import styled from 'styled-components';
import bgTriangle from '../../assets/images/bg-triangle.svg';
import bgPentagon from '../../assets/images/bg-pentagon.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 20px;
`;

export const ButtonsContainer = styled.div`
  margin: 50px auto;
  width: fit-content;
  display: grid;
  grid-template-columns: 1fr 5rem 1fr;
  grid-template-rows: 20px 150px;
  align-items: center;
  justify-items: center;
  background: url(${bgPentagon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 200px;

  z-index: 1;

  & > :first-child {
    grid-area: 1/2;
  }
  & > :nth-child(2) {
    grid-area: 2 / 1;
  }
  & > :nth-child(3) {
    grid-area: 2 / 3;
  }
  & > :nth-child(4) {
    grid-area: 3 / 1;
  }
  & > :nth-child(5) {
    grid-area: 3 / 3;
  }
  @media (min-width: 1300px) {
    width: 300px;
    height: 300px;
    grid-template-rows: 50px 200px;
    grid-template-columns: 1fr 8rem 1fr;
    background-size: 300px;
    background-position-y: 20px;
  }
`;

export const Button = styled.button`
  position: relative;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: grab;
  &:active {
    transform: scale(90%);
  }
  &::before {
    content: '';
    position: absolute;
    width: 120%;
    height: 120%;
    border-radius: 50%;
    z-index: -1;
    background: ${props =>
      props.borderGradient
        ? `linear-gradient(${props.borderGradient})`
        : 'none'};
  }

  @media (min-width: 1300px) {
    width: 90px;
    height: 90px;

    &::before {
      width: 120%;
      height: 120%;
    }
  }
`;

export const Image = styled.img`
  width: 40px;
  user-select: none;
`;

export const RulesButton = styled.button`
  background: none;
  color: white;
  padding: 5px 30px;
  border-radius: 3px;
  border: 1px solid ${props => props.theme.colors.HeaderOutline};
  font-weight: 700;
  text-transform: uppercase;
  &:active {
    background: white;
    color: ${props => props.theme.colors.DarkText};
  }

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 1300px) {
    margin: 0px 20px;
    align-self: flex-end;
  }
`;

export const ModalBackground = styled.div`
  @media (min-width: 1300px) {
    display: ${props => (props.isOpen ? 'block' : 'none')};
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100vw;
    height: 100vh;
    opacity: 0.3;
  }
`;

export const Modal = styled.div`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  opacity: 1;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 8px;
  z-index: 2;
  @media (min-width: 1300px) {
    display: ${props => (props.isOpen ? 'grid' : 'hidden')};
    grid-template-areas:
      'title  closeButton'
      'rules rules ';
    justify-content: space-between;
    align-items: center;
    width: 340px;
    height: 340px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const ModalTitle = styled.h1`
  color: ${props => props.theme.colors.DarkText};
  text-transform: uppercase;
  @media (min-width: 1300px) {
    font-size: 20px;
    grid-area: title;
    justify-self: flex-start;
    padding-left: 20px;
  }
`;

export const ModalImage = styled.img`
  width: 250px;
  height: 200px;

  @media (min-width: 1300px) {
    width: 250px;
    height: 250px;
    grid-area: rules;
    margin: auto;
  }
`;

export const ModalClose = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  & img {
    width: 30px;
  }

  &:active {
    transform: scale(90%);
  }

  @media (min-width: 1300px) {
    grid-area: closeButton;
    justify-self: flex-end;
    padding-right: 20px;
    & img {
      width: 20px;
    }
  }
`;

export const GameContainer = styled.div`
  display: grid;
  grid-template-areas:
    'FirstPlayer FirstPlayer . SecondPlayer SecondPlayer'
    '. Result Result Result .'
    '. Button  Button Button .';
  gap: 10px 0px;
  @media (min-width: 1300px) {
    margin-top: 50px;
    gap: 0px 30px;
    grid-template-areas:
      'FirstPlayer Result  SecondPlayer'
      'FirstPlayer Button  SecondPlayer'
      'FirstPlayer .  SecondPlayer';
  }
`;

export const GameLabel = styled.label`
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
export const GameResult = styled.h1`
  margin: auto;
  margin-top: 30px;
  grid-area: Result;
  text-transform: uppercase;
  text-align: center;
`;
export const GameButton = styled(RulesButton)`
  grid-area: Button;
  background-color: white;
  color: ${props => props.theme.colors.DarkText};
  font-weight: bold;
  letter-spacing: 2px;
  height: 40px;
  border-radius: 8px;
  width: 200px;
`;
export const Play = styled(Button)`
  cursor: default;
  &:active {
    transform: none;
  }
`;

export const Player = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-area: FirstPlayer;
  justify-self: flex-start;
  gap: 30px;

  @media (min-width: 1300px) {
    flex-direction: column-reverse;
  }
`;

export const House = styled(Player)`
  grid-area: SecondPlayer;
  justify-self: flex-end;
`;
