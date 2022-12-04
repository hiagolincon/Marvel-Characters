import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  background-color: #202020;

  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    max-width: 400px;

    animation: marvelLogo 0.4s linear infinite alternate;
  }
  @keyframes marvelLogo {
    0% {
      -webkit-box-shadow: 0 0 #91181c, 0 0 #91181c, 0 0 #91181c, 0 0 #91181c,
        0 0 #91181c, 0 0 #91181c, 0 0 #91181c, 0 0 #91181c;
      box-shadow: 0 0 #91181c, 0 0 #91181c, 0 0 #91181c, 0 0 #91181c,
        0 0 #91181c, 0 0 #91181c, 0 0 #91181c, 0 0 #91181c;
      -webkit-transform: translateX(0) translateY(0);
      transform: translateX(0) translateY(0);
    }
    100% {
      -webkit-box-shadow: 1px -1px #91181c, 2px -2px #91181c, 3px -3px #91181c,
        4px -4px #91181c, 5px -5px #91181c, 6px -6px #91181c, 7px -7px #91181c,
        8px -8px #91181c;
      box-shadow: 1px -1px #91181c, 2px -2px #91181c, 3px -3px #91181c,
        4px -4px #91181c, 5px -5px #91181c, 6px -6px #91181c, 7px -7px #91181c,
        8px -8px #91181c;
      -webkit-transform: translateX(-8px) translateY(8px);
      transform: translateX(-8px) translateY(8px);
    }
  }
`
