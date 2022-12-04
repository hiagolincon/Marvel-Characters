import styled from 'styled-components';

export const Container = styled.div`
  background: #f7f7f7;   
`;


export const NotFoundContent = styled.div`
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
        width:100%;
        max-width: 600px;
    }
    div {
    text-align: center;
    margin-top: 30px;
    line-height: 40px;
    h1 {
        font-size: 30px;
        color: #000;
    }
    a {
        color: #f0141e;
        font-weight: 700;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
}
    }
    
`