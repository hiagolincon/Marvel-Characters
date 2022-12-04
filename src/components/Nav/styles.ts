import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 24px;
  background: #fff;
  align-items: center;
  img {
    width: 100%;
    max-width: 142px;
  }
`
export const InfoProfile = styled.div`
  display: flex;
  align-items: center;
  div:first-child {
    margin-right: 15px;
    line-height: 100%;
    text-align: right;
    h4,
    p {
      font-size: 14px;
      color: var(--black);
    }
    p {
      font-size: 10px;
    }
  }
`
export const ProfileLogo = styled.div`
  background: #6DC6F8;
  padding: 8px;
  border-radius: 50%;
  h2 {
    font-size: 20px;
    color: #fff;
  }
`
