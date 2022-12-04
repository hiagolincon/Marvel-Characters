import { Link } from 'react-router-dom';

import notFound from 'src/assets/not_found.svg';
import { Nav } from 'src/components/Nav/Nav'

import { Container, NotFoundContent } from './styles';

export const GenericNotFound = () => {
  return (
    <Container>
      <Nav />
      <NotFoundContent>
        <img src={notFound} alt="notFound" />
        <div>
          <h1>Essa página não existe</h1>
          <Link to="/">Voltar à página principal</Link>
        </div>
      </NotFoundContent>
    </Container>
  );
};

