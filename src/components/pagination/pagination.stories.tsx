import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Pagination } from './pagination'
const meta = {
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
} as Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

const Template: Story = {
  render: args => {
    const [page, setPage] = useState<number>(args.currentPage || 1)
    const [perPage, setPerPage] = useState<string>('10')
    const totalPages = args.pageAmount || 55
    const handlePageChange = (page: number) => {
      setPage(page)
    }

    const handlePerPageChange = (perPage: string) => {
      setPerPage(perPage)
      setPage(1)
    }

    return (
      <Pagination
        currentPage={page}
        onChange={handlePageChange}
        onPerPageChange={handlePerPageChange}
        pageAmount={totalPages}
        perPage={perPage}
        perPageOptions={args.perPageOptions}
      />
    )
  },
}

export const Default: Story = {
  args: {
    ...Template.args,
    perPageOptions: ['10', '20', '30', '50', '100'],
  },
  render: Template.render,
}

export const Middle: Story = {
  args: {
    ...Template.args,
    currentPage: 7,
    perPageOptions: ['10', '20', '30', '50', '100'],
  },
  render: Template.render,
}
