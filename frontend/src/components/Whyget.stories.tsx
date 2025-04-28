// components/Whyget.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Whyget from './Whyget';

// Configuração do Meta para o Storybook
const meta: Meta<typeof Whyget> = {
  title: 'Components/Whyget',
  component: Whyget,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered', // Centraliza para visualização clara
  },
};

export default meta;

type Story = StoryObj<typeof Whyget>;

export const Default: Story = {
    args: {},
    parameters: {
      docs: {
        description: {
          story: 'Exibição padrão da seção Por que contratar.',
        },
      },
      viewport: {
        defaultViewport: 'desktop',
      },
    },
  };