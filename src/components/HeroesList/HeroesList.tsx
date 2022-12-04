import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useList } from 'src/context/context';
import api from 'src/services/api';
import { Loading } from 'src/components/Loading/Loading';
import { Container } from './styles';

interface HeroImp {
  name: string;
  id: number;
  thumbnail: {
    path: string;
    extension: string;
  };
  series: {
    items: {
      name: string;
    }[];
  };
  events: {
    items: {
      name: string;
    }[];
  };
}

export const HeroesList = () => {
  const [heroes, setHeroes] = useState<HeroImp[]>([]);
  const { searchValue, setPagination, offset, isLoading, setIsLoading } = useList();
  const navigate = useNavigate();

  useEffect(() => {
    const getHeroes = async () => {
      const response = await api.get('characters');

      const { count, total, results } = response.data.data;
      const calculationTotalPages = total / count;
      const totalPages = Math.ceil(calculationTotalPages);
      setHeroes(results);
      setPagination({ count, totalItems: total, totalPages });
      setIsLoading(false);
    };
    getHeroes();
  }, []);

  useEffect(() => {
    const handleListSearch = async () => {
      setIsLoading(true);

      if (searchValue) {
        const response = await api.get(`/characters?limit=100&offset=${offset}&nameStartsWith=${searchValue}`);

        const { results } = response.data.data;
        setHeroes(results);
      } else {
        const response = await api.get(`/characters?limit=10&offset=${offset}`);

        const { results } = response.data.data;
        setHeroes(results);
      }
      setIsLoading(false);
    };
    handleListSearch();
  }, [navigate, offset, searchValue]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Container>
      <thead>
        <tr>
          <th>Personagem</th>
          <th>Séries</th>
          <th>Eventos</th>
        </tr>
      </thead>
      <tbody>
        {heroes?.map((hero) => (
          <tr data-testid='hero' key={hero.id} onClick={() => navigate(`/detail/${hero.id}`)}>
            <td>
              <div>
                <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt={hero.name} />
                <h3>{hero.name}</h3>
              </div>
            </td>
            <td>
              <ul>
                {hero.series.items.length ? (
                  hero.series.items.slice(0, 3).map((serie) => <li key={serie.name}>{serie.name}</li>)
                ) : (
                  <li>Séries não encontradas</li>
                )}
              </ul>
            </td>
            <td>
              <ul>
                {hero.events.items.length ? (
                  hero.events.items.slice(0, 3).map((event) => <li key={event.name}>{event.name}</li>)
                ) : (
                  <li>Eventos não encontrados</li>
                )}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </Container>
  );
};
