import React, { createContext, useContext, useState } from 'react'

interface PaginationImp {
  count: number
  totalItems: number
  totalPages: number
}
interface ListContextData {
  searchValue: string
  pagination: PaginationImp
  offset: number
  isLoading: boolean
  setSearchValue: (value: string) => void
  setPagination: (value: PaginationImp) => void
  setOffset: (value: number) => void
  setIsLoading: (value: boolean) => void
}

const ListContext = createContext<ListContextData>({} as ListContextData)

const ListProvider: React.FC = ({ children }) => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [pagination, setPagination] = useState<PaginationImp>(
    {} as PaginationImp,
  )
  const [offset, setOffset] = useState<number>(0)
  const [isLoading, setIsLoading] = useState(true)

  return (
    <ListContext.Provider
      value={{
        searchValue,
        pagination,
        offset,
        isLoading,
        setSearchValue: value => setSearchValue(value),
        setPagination: value => setPagination(value),
        setOffset: value => setOffset(value),
        setIsLoading: value => setIsLoading(value),
      }}
    >
      {children}
    </ListContext.Provider>
  )
}

export const useList = (): ListContextData => {
  const context = useContext(ListContext)
  if (!context) {
    throw new Error('useList must be user within an ListProvider')
  }
  return context
}

export default ListProvider
