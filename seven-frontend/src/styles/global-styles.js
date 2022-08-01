import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Anton&family=Fjalla+One&family=Montserrat:ital,wght@0,900;1,900&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Oswald:wght@400;500;600;700&family=Pacifico&family=Permanent+Marker&family=Poppins:wght@200;300;400;500;600&family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,700&family=Secular+One&display=swap');
    * {
        margin:0;
        padding:0;
    }

    html {
        font-size: 62.5%
    }

    body {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.colors.white};
        font-family: ${({theme}) => theme.font.family.secondary}
    }
`

export default GlobalStyles