import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CardInfo } from 'src/components/CardInfo/CardInfo'
import { Loading } from 'src/components/Loading/Loading'
import { Nav } from 'src/components/Nav/Nav'
import { useList } from 'src/context/context'
import api from 'src/services/api'
import { Container, BannerHero, CardsContainer } from './styles'

interface heroDetailInfo {
  name: string
  description: string
  thumbnail: {
    path: string
    extension: string
  }
}

interface InfosHeroImp {
  title: string
  description: string
  thumbnail: {
    path: string
    extension: string
  }
}

interface heroDetailImp {
  heroInfo: heroDetailInfo
  events: InfosHeroImp[]
  comics: InfosHeroImp[]
  series: InfosHeroImp[]
}

export const HeroDetail = () => {
  const { isLoading, setIsLoading } = useList()

  const [state, setState] = useState<heroDetailImp>({
    heroInfo: {
      name: '',
      description: '',
      thumbnail: {
        extension: '',
        path: '',
      },
    },
    events: [],
    comics: [],
    series: [],
  })

  const { id } = useParams<{ id: string }>()
  useEffect(() => {
    const handleHeroDetail = async () => {
      setIsLoading(true)

      const heroInfo = await api.get(`characters/${id}`)

      const events = await api.get(`characters/${id}/events`)

      const comics = await api.get(`characters/${id}/comics`)

      const series = await api.get(`characters/${id}/series`)
      const allInfo: heroDetailImp = {
        heroInfo: heroInfo.data.data.results[0],
        events: events.data.data.results,
        comics: comics.data.data.results,
        series: series.data.data.results,
      }

      setState({
        heroInfo: allInfo.heroInfo,
        comics: allInfo.comics,
        events: allInfo.events,
        series: allInfo.series,
      })
      setIsLoading(false)
    }
    handleHeroDetail()
  }, [id])

  if (isLoading) {
    return <Loading />
  }
  return (
    <Container>
      <Nav />
      <BannerHero>
        <img
          src={`${state.heroInfo.thumbnail.path}.${state.heroInfo.thumbnail.extension}`}
          alt={state.heroInfo.name}
        />
        <div>
          <h1>{state.heroInfo.name}</h1>
          <p>
            Wounded, captured and forced to build a weapon by his enemies,
            billionaire industrialist Tony Stark instead created an advanced
            suit of armor to save his life and escape captivity. Now with a new
            outlook on life, Tony uses his money and intelligence to make the
            world a safer, better place as Iron Man.
          </p>
        </div>
      </BannerHero>
      <CardsContainer>
        <h2>Histórias em quadrinhos</h2>
        <CardInfo cards={state.comics} />
        <h2>Eventos</h2>
        <CardInfo cards={state.events} />
      </CardsContainer>
    </Container>
  )
}
