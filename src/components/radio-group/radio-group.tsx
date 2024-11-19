import React from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'

import s from './radio-group.module.scss'

export type RadioGroupDemoProps = {
  defaultValue?: string
}

const RadioGroupDemo: React.FC<RadioGroupDemoProps> = ({ defaultValue }) => (
  <form>
    <RadioGroup.Root aria-label={'View density'} className={s.Root} defaultValue={defaultValue}>
      <div style={{ alignItems: 'center', display: 'flex' }}>
        <RadioGroup.Item className={s.Item} id={'r1'} value={'default'}>
          <RadioGroup.Indicator className={s.Indicator} />
        </RadioGroup.Item>
        <label className={s.Label} htmlFor={'r1'}>
          Default
        </label>
      </div>
      <div style={{ alignItems: 'center', display: 'flex' }}>
        <RadioGroup.Item className={s.Item} id={'r2'} value={'comfortable'}>
          <RadioGroup.Indicator className={s.Indicator} />
        </RadioGroup.Item>
        <label className={s.Label} htmlFor={'r2'}>
          Comfortable
        </label>
      </div>
      <div style={{ alignItems: 'center', display: 'flex' }}>
        <RadioGroup.Item className={s.Item} id={'r3'} value={'compact'}>
          <RadioGroup.Indicator className={s.Indicator} />
        </RadioGroup.Item>
        <label className={s.Label} htmlFor={'r3'}>
          Compact
        </label>
      </div>
    </RadioGroup.Root>
  </form>
)

export default RadioGroupDemo
