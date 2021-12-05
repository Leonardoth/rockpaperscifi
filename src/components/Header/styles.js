import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  padding: 10px;
  padding-left: 15px;
  font-family: inherit;
  border: 3px solid ${props => props.theme.colors.HeaderOutline};

  @media (min-width: 1300px) {
    margin: auto;
    width: 500px;
  }
`;

export const TextDiv = styled.div`
  text-align: left;
  text-transform: uppercase;
`;

export const Span = styled.span`
  display: block;
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;

  @media (min-width: 1300px) {
    font-size: 20px;
    line-height: 16px;
  }
`;

export const ScoreContainer = styled.div`
  background: ${({ background }) => (background ? background : 'none')};
  position: relative;
  width: 60px;
  padding: 15px 10px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-items: space-around;
  align-items: center;
  font-weight: 700;

  &:hover button {
    display: block;
  }
`;
export const ScoreLabel = styled.label`
  color: ${props => props.theme.colors.ScoreText};
  text-transform: uppercase;
  font-size: 8px;
  @media (min-width: 1300px) {
    font-size: 14px;
    line-height: 16px;
  }
`;
export const ScoreValue = styled.label`
  font-size: 32px;
  line-height: 30px;
  color: ${props => props.theme.colors.DarkText};
  @media (min-width: 1300px) {
    font-size: 40px;
    line-height: 40px;
  }
`;

const slideDown = keyframes`
  from{
    transform: scaleY(0%);
  }
  to{
    transform: scaleY(100%) translateZ(0);
  }
`;

export const ScoreReset = styled.button`
  position: absolute;
  padding: 10px 5px;
  width: 100%;
  border: none;
  bottom: -25px;
  display: none;
  animation: ${slideDown} 0.3s linear forwards;
  transform-origin: top;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background: ${props => props.theme.colors.DarkText};
    color: white;
  }
`;
