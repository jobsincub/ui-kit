import type { Meta, StoryObj } from '@storybook/react'

import { TabsContent, TabsList, TabsRoot, TabsTrigger } from './'

const meta: Meta<typeof TabsTrigger> = {
  argTypes: {
    asChild: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
      description: 'If true, the content will be rendered directly without a container.',
    },
    className: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
      description: 'Tab disabled.',
    },
  },
  component: TabsTrigger,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Tabs',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    asChild: false,
    className: 'primary',
    disabled: false,
  },
  render: args => (
    <TabsRoot defaultValue={'tab1'}>
      <TabsList aria-label={'tabs example'}>
        <TabsTrigger {...args} value={'tab1'}>
          One
        </TabsTrigger>
        <TabsTrigger {...args} value={'tab2'}>
          Two
        </TabsTrigger>
        <TabsTrigger {...args} value={'tab3'}>
          Three
        </TabsTrigger>
      </TabsList>
      <TabsContent value={'tab1'}>Tab one content</TabsContent>
      <TabsContent value={'tab2'}>Tab two content</TabsContent>
      <TabsContent value={'tab3'}>Tab three content</TabsContent>
    </TabsRoot>
  ),
}
