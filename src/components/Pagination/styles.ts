import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 10px 0;
  background: #fff;
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    max-width: 314px;
    margin: auto;
    justify-content: space-between;
    .active {
      background: #247dd0;
      button {
        color: #fff;
      }
    }
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: transparent;
      font-size: 14px;
      border: 0;
      span {
        font-size: 30px;
      }
      img {
        width: 20px;
      }
    }
  }
`
