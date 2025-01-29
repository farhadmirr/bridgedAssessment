import React from 'react'
import "./drawerComponent.css"
import { Drawer } from 'antd'
const drawerComponent = ({ open, setOpen }) => {
  const onClose = () => {
    setOpen(false)
  }
  return (
    <Drawer title="Basic Drawer" onClose={onClose} open={open}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  )
}

export default drawerComponent