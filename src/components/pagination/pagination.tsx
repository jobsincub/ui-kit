import { ChangeEvent } from 'react'

import { clsx } from 'clsx'

import s from './pagination.module.scss'

import { usePagination } from './usePagination'

export type PaginationProps = {
  currentPage: number
  onChange: (pageNumber: number) => void
  onPerPageChange: (itemPerPage: number) => void
  pageAmount: number
  perPage: number
  perPageOptions: number[]
  siblings?: number
}

const classNames = {
  button_next: s.button_next,
  button_previous: s.button_previous,
  container: s.container,
  dots: s.dots,
  icon: s.icon,
  item: s.item,
  pageButton(selected?: boolean) {
    return clsx(this.item, selected && s.selected)
  },
  select: s.select,
  selectBox: s.selectBox,
  wrapper: s.wrapper,
}

export const Pagination = ({
  currentPage,
  onChange,
  onPerPageChange,
  pageAmount,
  perPage,
  perPageOptions,
  siblings,
}: PaginationProps) => {
  const {
    isFirstPage,
    isLastPage,
    mainPageClickedHandler,
    nextPageHandler,
    paginationRange,
    previousPageHandler,
  } = usePagination({ currentPage, onChange, pageAmount, siblings })

  return (
    <div className={classNames.wrapper}>
      <div className={classNames.container}>
        <PrevButton disabled={isFirstPage} onClick={previousPageHandler} />
        <MainPaginationButton
          currentPage={currentPage}
          onClick={mainPageClickedHandler}
          paginationRange={paginationRange ?? []} //??
        />
        <NextButton disabled={isLastPage} onClick={nextPageHandler} />
      </div>
      <PerPageSelect
        onPerPageChange={onPerPageChange}
        perPage={perPage}
        perPageOptions={perPageOptions}
      />
    </div>
  )
}

type NavigationButtonProps = {
  disabled?: boolean
  onClick: () => void
}
type PageButtonProps = {
  currentPage: number
  selected: boolean
} & NavigationButtonProps

type MainPaginationButtonProps = {
  currentPage: number
  onClick: (pageNumber: number) => void
  paginationRange: (number | string)[]
}

const Dots = () => {
  return <span className={classNames.dots}>&#8230;</span>
}

const PageButton = ({ currentPage, disabled, onClick, selected }: PageButtonProps) => {
  return (
    <button
      className={classNames.pageButton(selected)}
      disabled={disabled || selected}
      onClick={onClick}
      type={'button'}
    >
      {currentPage}
    </button>
  )
}
const PrevButton = ({ disabled, onClick }: NavigationButtonProps) => {
  return (
    <button
      className={classNames.button_previous}
      disabled={disabled}
      onClick={onClick}
      type={'button'}
    />
  )
}

const NextButton = ({ disabled, onClick }: NavigationButtonProps) => {
  return (
    <button
      className={classNames.button_next}
      disabled={disabled}
      onClick={onClick}
      type={'button'}
    />
  )
}

const MainPaginationButton = ({
  currentPage,
  onClick,
  paginationRange,
}: MainPaginationButtonProps) => {
  return (
    <>
      {paginationRange.map((page: number | string, index) => {
        const isSelected = page === currentPage

        if (typeof page !== 'number') {
          return <Dots key={index} />
        }

        return (
          <PageButton
            currentPage={page}
            key={index}
            onClick={() => onClick(page)}
            selected={isSelected}
          />
        )
      })}
    </>
  )
}

export type PerPageSelectProps = {
  onPerPageChange: (itemPerPage: number) => void
  perPage: number
  perPageOptions: number[]
}

export const PerPageSelect = ({ onPerPageChange, perPage, perPageOptions }: PerPageSelectProps) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = parseInt(event.target.value, 10)

    onPerPageChange(selectedValue)
  }

  return (
    <div className={classNames.selectBox}>
      <span>Show</span>
      <select className={classNames.select} onChange={handleChange} value={perPage}>
        {perPageOptions.map(value => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
      <span>on page</span>
    </div>
  )
}
