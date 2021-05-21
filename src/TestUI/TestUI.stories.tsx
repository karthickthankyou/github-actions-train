import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import TestUI, { ITestUIProps } from './TestUI'

export default {
  title: 'Pages/TestUI',
  component: TestUI,
} as Meta

const Template: Story<ITestUIProps> = (args) => <TestUI {...args} />

export const Primary = Template.bind({})
Primary.args = {}
