import React, { useEffect, useState } from 'react'
import searchIcon from 'src/assets/search-icon.svg'
import { useList } from 'src/context/context'

import { useDebounce } from 'src/utils/debounce'
import { Container } from './styles'

const Search = () => {
  const [search, setSearch] = useState('')
  const { setSearchValue } = useList()

  const searchDebounce = useDebounce(search, 1000)

  useEffect(() => {
    setSearchValue(searchDebounce)
  }, [searchDebounce, setSearchValue])

  return (
    <Container>
      <input
        type="text"
        value={search}
        onChange={event => setSearch(event.target.value)}
        placeholder="Buscar"
        name="search-character"
      />
      <img src={searchIcon} alt="Icon" />
    </Container>
  )
}

export default Search
