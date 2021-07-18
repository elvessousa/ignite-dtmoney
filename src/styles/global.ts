import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --blue-light: #6933ff;
    --blue: #5429cc;
    --red: #e52e4d;
    --green: #33cc95;
    --shape: #fff;
    --text-title: #363f5f;
    --text-body: #969cb3;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media(max-width: 1000px) {
      font-size: 93.75%;
    }

    @media(max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    --webkit-font-smoothing: antialiased;
    background: var(--background);
  }

  body, 
  input,
  textarea,
  button {
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
    font-weight: 400;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    align-items: center;
    background: rgba(0,0,0,0.5);
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);
    border-radius: 0.25rem;
    padding: 3rem;
    position: relative;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5em;
    border: 0;
    background: transparent;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
