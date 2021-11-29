import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 40px;

  @media (min-width: 1300px) {
    margin-top: 10px;
  }
`;

export const Link = styled.a`
  text-decoration: underline;
  color: white;

  &:hover {
    color: ${props => props.theme.colors.ScissorsColor};
  }
`;
