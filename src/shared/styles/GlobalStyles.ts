import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Nunito', sans-serif;

        html, body {
            background-color: ${({ theme }) => theme.colors.backgroundGray};
            max-width: 100%;
            overflow-x: hidden;
        }
    }
`;
