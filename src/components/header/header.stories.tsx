import type { Meta, StoryObj } from '@storybook/react'

import { Header } from './header'

const meta = {
  component: Header,
  tags: ['autodocs'],
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div style={{ backgroundColor: 'black', padding: '15px' }}>
      <Header>
        <div style={{ columnGap: '36px', display: 'flex', maxWidth: '1280px', padding: '0 15px' }}>
          <div
            style={{
              flex: '1 1 auto',
            }}
          >
            <a
              href={''}
              style={{
                flex: '1 1 auto',
                fontSize: '26px',
                fontWeight: '600',
                textDecoration: 'none',
              }}
            >
              Inctagram
            </a>
          </div>
          <select id={'language'} name={'language'} style={{ backgroundColor: 'transparent' }}>
            <option value={'english'}>English</option>
            <option value={'russian'}>Russian</option>
          </select>
          <div style={{ columnGap: '24px', display: 'flex' }}>
            <button
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                borderRadius: '2px',
                color: '#397DF6',
                fontSize: '16px',
                fontWeight: '600',
                padding: '6px 24px',
              }}
            >
              Log in
            </button>
            <button
              style={{
                backgroundColor: '#397DF6',
                border: 'none',
                borderRadius: '2px',
                fontSize: '16px',
                fontWeight: '600',
                padding: '6px 24px',
              }}
            >
              Sign up
            </button>
          </div>
        </div>
      </Header>
    </div>
  ),
}
