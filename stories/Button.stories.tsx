import { Meta } from '@storybook/react'
import { Button } from '@/main'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta

export const Default = (args: any) => <Button {...args}>Click me</Button>

export const Outline = (args: any) => (
  <Button {...args} variant='outline'>
    Click me
  </Button>
)

export const Secondary = (args: any) => (
  <Button {...args} variant='secondary'>
    Click me
  </Button>
)

export const Disabled = (args: any) => (
  <Button {...args} disabled>
    Click me
  </Button>
)

export const Ghost = (args: any) => (
  <Button {...args} variant='ghost'>
    Click me
  </Button>
)

export const Manga = (args: any) => (
  <Button {...args} variant='manga'>
    Click me
  </Button>
)

export const Halloween = (args: any) => (
  <Button {...args} variant='halloween'>
    Click me
  </Button>
)
