import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-size: 10px;
        font-family: 'Open Sans', sans-serif;
    }
    html, body, #root {
        height: 100%;
    }
    body{
        background-color: #212121;
        color: #fff;
    }
`;
