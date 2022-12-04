import styled from 'styled-components'

export const Container = styled.table`
  width: 100%;
  margin-top: 30px;
  border-spacing: 0 16px;
  border-collapse: separate;

  th {
    font-size: 20px;
    text-align: left;
    font-weight: 400;
    color: #404040;
  }
  tbody {
    tr {
      cursor: pointer;
      background: #fff;
      border: 1px solid #c9c9c9;
      box-shadow: 0px 4px 3px 2px #00000033;
      border-radius: 5px;
      transition: all 0.2s;
      height: 83px;
      &:hover {
        opacity: 0.8;
      }
    }
  }
  th,
  td {
    padding: 0 24px;
  }
  td {
    div {
      display: flex;
      align-items: center;
      gap: 24px;
    }
  }
  td {
    li {
      font-size: 16px;
      color: #565656;
    }
  }
  img {
    width: 44px;
    height: 44px;
    border-radius: 5px;
  }
  h3 {
    font-size: 16px;
    color: #404040;
  }
`
