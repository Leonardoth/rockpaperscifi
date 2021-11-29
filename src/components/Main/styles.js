import styled from 'styled-components';
import bgTriangle from '../../assets/images/bg-triangle.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 50px;
`;

export const ButtonsContainer = styled.div`
  margin: 50px auto;
  width: fit-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px 50px;
  background: url(${bgTriangle});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 150px;
  z-index: 1;
  @media (min-width: 1300px) {
    width: 300px;
    height: 300px;
    background-size: 200px;
  }
`;

export const Button = styled.button`
  position: relative;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  &:active {
    transform: scale(90%);
  }
  &::before {
    content: '';
    position: absolute;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    z-index: -1;
    background: ${props =>
      props.borderGradient
        ? `linear-gradient(${props.borderGradient})`
        : 'none'};
  }

  @media (min-width: 1300px) {
    width: 120px;
    height: 120px;

    &::before {
      width: 140px;
      height: 140px;
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
    width: 300px;
    height: 300px;
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
  }
`;

export const ModalImage = styled.img`
  width: 200px;
  height: 200px;

  @media (min-width: 1300px) {
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
    & img {
      width: 20px;
    }
  }
`;
