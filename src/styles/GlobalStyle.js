import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    body{
        
        background: radial-gradient(circle,
            ${props => props.theme.colors.BackgroundGradient1}, 
            ${props => props.theme.colors.BackgroundGradient2});
        color: white;
        text-align: center;
        font-family: ${props => props.theme.fonts.primary};
        font-size: 16px;
    }
`;
