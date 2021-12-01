import styled from 'styled-components';

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
  width: 60px;
  padding: 15px 10px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-items: space-around;
  align-items: center;
  font-weight: 700;
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
