import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
`
export const Card = styled.div`
  background: #000;

  figure {
    position: relative;

    &:after {
      position: absolute;
      bottom: 2px;
      content: '';
      width: 100%;
      height: 2px;
      background: #ff1e1e;
      left: 0;
      right: 0;
      margin: auto;
    }

    img {
      width: 100%;
      max-width: 268px;
      height: 265px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 171px;
    padding: 16px;
    overflow: auto;
    h3 {
      color: #fff;
      font-size: 16px;
    }
    p {
      color: #fff;
      font-size: 10px;
    }
  }
`
