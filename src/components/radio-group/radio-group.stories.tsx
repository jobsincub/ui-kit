import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'

import { RadioGroup, RadioGroupIndicator, RadioGroupItem } from './'
import radioButtonChecked from './assets/icons/radio_button_checked.svg'
import radioButtonUnchecked from './assets/icons/radio_button_unchecked.svg'

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  title: 'Components/RadioGroup',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue={'option1'}>
      <div>
        <label>
          <RadioGroupItem value={'option1'}>
            <img alt={'test'} src={radioButtonUnchecked} />
            <RadioGroupIndicator>
              <img alt={'test'} src={radioButtonChecked} />
            </RadioGroupIndicator>
          </RadioGroupItem>
          Option 1
        </label>
        <label>
          <RadioGroupItem value={'option2'}>
            <img alt={'test'} src={radioButtonUnchecked} />
            <RadioGroupIndicator>
              <img alt={'test'} src={radioButtonChecked} />
            </RadioGroupIndicator>
          </RadioGroupItem>
          Option 2
        </label>
        <label>
          <RadioGroupItem value={'option3'}>
            <img alt={'test'} src={radioButtonUnchecked} />
            <RadioGroupIndicator>
              <img alt={'test'} src={radioButtonChecked} />
            </RadioGroupIndicator>
          </RadioGroupItem>
          Option 3
        </label>
      </div>
    </RadioGroup>
  ),
}
