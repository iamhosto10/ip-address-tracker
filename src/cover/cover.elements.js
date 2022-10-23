import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  padding-top: 2rem;
  h1 {
    font-size: 1.5rem;
    text-align: center;
    color: white;
    font-weight: 700;
  }
  h2 {
    color: hsl(0, 0%, 59%);
    text-transform: uppercase;
    font-size: 0.875rem /* 14px */;
    line-height: 1.25rem /* 20px */;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-align: center;
  }
  p {
    color: hsl(0, 0%, 17%);
    font-weight: 600;
    font-size: 1.125rem /* 18px */;
    line-height: 1.75rem /* 28px */;
    text-align: center;
  }
  form {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    max-width: 28rem;
    margin: 0 auto;
  }
  input {
    padding: 1.5rem 1.25rem 1.25rem;
    border-top-left-radius: 0.5rem /* 8px */;
    border-bottom-left-radius: 0.5rem /* 8px */;
    width: 100%;
  }
  button {
    padding: 1.75rem 1.25rem;
    border-top-right-radius: 0.5rem /* 8px */;
    border-bottom-right-radius: 0.5rem /* 8px */;
    background-color: black;
    &.hover\:opacity-80:hover {
      opacity: 0.8;
    }
    img {
      height: 80%;
    }
  }
  .informacion {
    position: relative;
    z-index: 100000;
    background-color: white;
    border-radius: 0.5rem /* 8px */;
    --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color),
      0 1px 2px -1px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    padding: 2rem /* 32px */;
    margin-top: 2rem /* 32px */;
    margin-left: 2rem /* 32px */;
    margin-right: 2rem /* 32px */;
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 2rem /* 32px */;
    max-width: 72rem /*1152px*/;
    margin-bottom: -15rem /* -240px */;
  }

  @media (min-width: 768px) {
    h2 {
      margin-bottom: 0.5rem /* 8px */;
      text-align: left;
    }
    p {
      font-size: 1.25rem /* 20px */;
      line-height: 1.75rem /* 28px */;
      text-align: left;
      word-wrap: break-word;
      /* hyphens: auto; */
    }
    .informacion {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      margin-bottom: -6rem /* -96px */;
    }
  }
  @media (min-width: 1024px) {
    p {
      font-size: 1.5rem /* 24px */;
      line-height: 2rem /* 32px */;
    }
    .informacion {
      grid-template-columns: repeat(4, minmax(0, 1fr));
      margin: 2rem auto -15rem;
      margin-bottom: -4rem /* -64px */;
    }
    .bord {
      border-right-width: 1px;
      --tw-border-opacity: 1;
      border-color: rgb(148 163 184 / var(--tw-border-opacity));
    }
  }
`;
