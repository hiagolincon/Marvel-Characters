import { useCallback, useEffect, useState } from 'react'
import { useList } from 'src/context/context'
import { fetchPageNumbers } from 'src/utils/paginationHelpers'

import { Container } from './styles'

export const Pagination = () => {
  const {
    pagination: { totalPages },
    setOffset,
  } = useList()

  const [currentPage, setCurrentPage] = useState(1)
  const pageNeighbours = Math.max(1, Math.min(0, 2))
  const [pages, setPages] = useState<(string | number)[]>([])

  useEffect(() => {
    const pagesPagination = fetchPageNumbers({
      currentPage,
      pageNeighbours,
      totalPages,
    })
    const offset = (currentPage - 1) * 10
    setPages(pagesPagination)
    setOffset(offset)
  }, [currentPage, pageNeighbours, totalPages])

  const goToPage = useCallback(
    (page: number): void => {
      const current = Math.max(0, Math.min(page, totalPages))
      const paginationData = fetchPageNumbers({
        currentPage: current,
        totalPages,
        pageNeighbours,
      })
      setPages(paginationData)
      setCurrentPage(current)
    },
    [pageNeighbours, totalPages],
  )

  const handleMoveLeft = useCallback((): void => {
    goToPage(currentPage - 1)
  }, [currentPage, goToPage])

  const handleMoveRight = useCallback(() => {
    goToPage(currentPage + 1)
  }, [currentPage, goToPage])

  const handleClickCurrentPage = useCallback(
    (page: number) => {
      goToPage(page)
    },
    [goToPage],
  )

  return (
    <Container>
      <ul>
        {pages.length &&
          pages.map(page => {
            if (page === 'LEFT')
              return (
                <li key={page} data-testid="paginate">
                  <button
                    type="button"
                    aria-label="Previous"
                    data-testid="Previous"
                    onClick={handleMoveLeft}
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </button>
                </li>
              )

            if (page === 'RIGHT')
              return (
                <li key={page} data-testid="paginate">
                  <button
                    type="button"
                    aria-label="Next"
                    data-testid="Next"
                    onClick={handleMoveRight}
                  >
                    <span aria-hidden="true">&raquo;</span>
                  </button>
                </li>
              )

            return (
              <li
                key={page}
                className={`${currentPage === page ? ' active' : ''}`}
                data-testid="paginate"
              >
                <button
                  type="button"
                  data-testid="current"
                  onClick={() => handleClickCurrentPage(+page)}
                >
                  {page}
                </button>
              </li>
            )
          })}
      </ul>
    </Container>
  )
}

