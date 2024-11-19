import type {Meta, StoryObj} from '@storybook/react'

import * as Tabs from './'

const meta: Meta<typeof Tabs.Trigger> = {

    argTypes: {
        asChild: {
            control: {
                type: 'boolean'
            }
            ,
            defaultValue: false,
            description:
                'If true, the content will be rendered directly without a container.',
        },
        className: {
             control: {type: 'radio'},
             options: ['primary', 'secondary'],
        },
        disabled: {
            control: {
                type: 'boolean'
            }
            ,
            defaultValue: false,
            description: 'Tab disabled.',
        },
    },
    parameters: {
        layout: 'centered',
    },
    component: Tabs.Trigger,
    tags: ['autodocs'],
    title: 'Components/Tabs',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        asChild: false,
        className: 'primary',
        disabled: false
    },
    render: (args) => (
        <Tabs.Root defaultValue="tab1">
            <Tabs.List aria-label="tabs example">
                <Tabs.Trigger {...args} value="tab1">One</Tabs.Trigger>
                <Tabs.Trigger {...args} value="tab2">Two</Tabs.Trigger>
                <Tabs.Trigger {...args} value="tab3">Three</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content  value="tab1">Tab one content</Tabs.Content>
            <Tabs.Content  value="tab2">Tab two content</Tabs.Content>
            <Tabs.Content  value="tab3">Tab three content</Tabs.Content>
        </Tabs.Root>
    ),
}