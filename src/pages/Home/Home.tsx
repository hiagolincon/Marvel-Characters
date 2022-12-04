import { Nav } from 'src/components/Nav/Nav'
import { HeroesList } from 'src/components/HeroesList/HeroesList'
import Search from 'src/components/Search/Search'
import { Pagination } from 'src/components/Pagination/Pagination'
import { Container, Content, SearchContainer } from './styles'

export const Home = () => { 
  return (
    <Container>
      <Nav />
      <Content>
        <SearchContainer>
          <h1>Busca de personagens</h1>
          <h3>Nome do personagem</h3>
          <Search />
        </SearchContainer>
        <HeroesList />
      </Content>
      <Pagination />
    </Container>
  )
}
