import { Container, Card } from './styles'

interface heroDetailInfo {
  cards: {
    title: string
    description: string
    thumbnail: {
      path: string
      extension: string
    }
  }[]
}

export const CardInfo = ({ cards }: heroDetailInfo) => {
  return (
    <Container>
      {cards.map(card => (
        <Card key={card.title} data-testid="card">
          <figure>
            <img
              src={`${card.thumbnail.path}.${card.thumbnail.extension}`}
              alt={card.title}
            />
          </figure>

          <div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        </Card>
      ))}
    </Container>
  )
}
