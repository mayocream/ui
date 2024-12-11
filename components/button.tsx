import React from 'react'
import { Button as AriaButton } from 'react-aria-components'
import { motion } from 'framer-motion'

const ForwardButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof AriaButton>
>((props, ref) => {
  return <AriaButton ref={ref} {...props} />
})

const MotionButton = motion.create(ForwardButton)

export const Button = ({ children, ...props }) => {
  return <MotionButton {...props}>{children}</MotionButton>
}
