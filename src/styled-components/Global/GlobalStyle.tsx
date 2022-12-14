import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    body {
        font-family : 'Montserrat', sans-serif;
        margin : 0;
        padding : 0;
        box-sizing: border-box;
    }
`;

export default Global;
