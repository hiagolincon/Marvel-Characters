import marvelLogo from 'src/assets/marvel_logo.svg';
import { Container } from './styles';

export const Loading = () => {
  return (
    <Container>
      <img src={marvelLogo} alt='Loading' />
    </Container>
  );
};
