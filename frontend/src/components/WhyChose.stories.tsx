import type { Meta, StoryObj } from '@storybook/react'
import Contact from './whyChose'

const meta: Meta<typeof Contact> = {
  title: 'Components/WhyChose',
  component: Contact,
  parameters: {
    layout: 'fullscreen', // Faz o componente ocupar toda a tela no Storybook
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Contact>

export const Default: Story = {
  args: {},
}