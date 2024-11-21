import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'

import { RadioGroup, RadioGroupIndicator, RadioGroupItem } from './'
import { CheckedIcon } from './assets/icons/CheckedIcon'
import { UncheckedIcon } from './assets/icons/UncheckedIcon'

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  title: 'Components/RadioGroup',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <RadioGroup aria-label={'View density'} defaultValue={'default'}>
      <div style={{ alignItems: 'center', display: 'flex' }}>
        <RadioGroupItem id={'r1'} value={'default'}>
          <UncheckedIcon />
          <RadioGroupIndicator>
            <CheckedIcon />
          </RadioGroupIndicator>
        </RadioGroupItem>
        <label htmlFor={'r1'}>Default</label>
      </div>
      <div style={{ alignItems: 'center', display: 'flex' }}>
        <RadioGroupItem id={'r2'} value={'comfortable'}>
          <UncheckedIcon />
          <RadioGroupIndicator>
            <CheckedIcon />
          </RadioGroupIndicator>
        </RadioGroupItem>
        <label>Comfortable</label>
      </div>
      <div style={{ alignItems: 'center', display: 'flex' }}>
        <RadioGroupItem id={'r3'} value={'compact'}>
          <UncheckedIcon />
          <RadioGroupIndicator>
            <CheckedIcon />
          </RadioGroupIndicator>
        </RadioGroupItem>
        <label htmlFor={'r3'}>Compact</label>
      </div>
    </RadioGroup>
  ),
}
