import { Link } from 'react-router-dom'
import logo from 'src/assets/logo.png'
import { Container, InfoProfile, ProfileLogo } from './styles'

export const Nav = () => {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      <InfoProfile>
        <div>
          <h4>Hiago Lincon</h4>
          <p>Teste de front end</p>
        </div>
        <ProfileLogo>
          <h2>HL</h2>
        </ProfileLogo>
      </InfoProfile>
    </Container>
  )
}
