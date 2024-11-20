// code source: https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/

import { useMemo } from 'react'

const range = (start: number, end: number) => {
  const length = end - start + 1
  /*
        Create an array of certain length and set the elements within it from
      start value to end value.
    */

  return Array.from({ length }, (_, idx) => idx + start)
}

const DOTS = '...'

type PaginationParamsType = {
  currentPage: number
  onChange: (pageNumber: number) => void
  pageAmount: number
  siblings?: number
}

export const usePagination = ({
  currentPage,
  onChange,
  pageAmount,
  siblings = 1,
}: PaginationParamsType) => {
  const paginationRange = useMemo(() => {
    // Pages count is  as siblings + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblings + 5

    /*
      Case 1:
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */
    if (totalPageNumbers >= pageAmount) {
      return range(1, pageAmount)
    }

    /*
        Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
    */
    const leftSiblingIndex = Math.max(currentPage - siblings, 1)
    const rightSiblingIndex = Math.min(currentPage + siblings, pageAmount)

    /*
      We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
    */
    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < pageAmount - 2

    const firstPageIndex = 1
    const lastPageIndex = pageAmount

    /*
        Case 2: No left dots to show, but rights dots to be shown
    */
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblings
      const leftRange = range(1, leftItemCount)

      return [...leftRange, DOTS, pageAmount]
    }

    /*
              Case 3: No right dots to show, but left dots to be shown
          */
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblings
      const rightRange = range(pageAmount - rightItemCount + 1, pageAmount)

      return [firstPageIndex, DOTS, ...rightRange]
    }

    /*
              Case 4: Both left and right dots to be shown
          */
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex)

      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
    }
  }, [pageAmount, currentPage, siblings])

  const lastPage = paginationRange?.at(-1)

  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === lastPage

  const nextPageHandler = () => {
    onChange(currentPage + 1)
  }

  const previousPageHandler = () => {
    onChange(currentPage - 1)
  }

  function mainPageClickedHandler(pageNumber: number) {
    onChange(pageNumber)
  }

  return {
    isFirstPage,
    isLastPage,
    mainPageClickedHandler,
    nextPageHandler,
    paginationRange,
    previousPageHandler,
  }
}
