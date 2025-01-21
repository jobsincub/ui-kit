import { Meta, StoryObj } from '@storybook/react'

import { SwiperComponent } from './swiper'

const meta: Meta<typeof SwiperComponent> = {
  component: SwiperComponent,
  decorators: [
    Story => (
      <div
        style={{
          margin: '0 auto',
          maxWidth: '600px',
          objectFit: 'cover',
          width: '100%',
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],

  title: 'Components/SwiperComponent',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    images: [
      {
        id: '1',
        imageUrl:
          'https://opis-cdn.tinkoffjournal.ru/mercury/thailand-best-beach-1.ta1luj..png?preset=image_570w_2x',
      },
      {
        id: '2',
        imageUrl:
          'https://opis-cdn.tinkoffjournal.ru/mercury/thailand-best-beach-2.pq3rer..png?preset=image_570w_2x',
      },
      {
        id: '3',
        imageUrl:
          'https://opis-cdn.tinkoffjournal.ru/mercury/thailand-best-beach-1.ta1luj..png?preset=image_570w_2x',
      },
      {
        id: '4',
        imageUrl:
          'https://opis-cdn.tinkoffjournal.ru/mercury/thailand-best-beach-2.pq3rer..png?preset=image_570w_2x',
      },
    ],
  },
}
