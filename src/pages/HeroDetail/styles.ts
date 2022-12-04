import styled from 'styled-components'

export const Container = styled.div``
export const BannerHero = styled.div`
  background-color: #202020;
  display: flex;

  flex-direction: row;
  clip-path: polygon(0 0, 100% 0%, 100% 90%, 0% 100%);
  img {
    width: 100%;
    max-width: 300px;
  }
  div {
    text-align: center;
    width: 100%;
    max-width: 1070px;
    margin: auto;
    padding: 10px 35px;

    h1 {
      color: #fff;
      font-size: 36px;
      margin-bottom: 16px;
    }
    p {
      color: #fff;
      font-size: 14px;
    }
  }
`

export const CardsContainer = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: auto;
  padding: 26px;
  h2 {
    font-size: 20px;
    color: #000;
    margin: 30px 0 16px;
  }
`
