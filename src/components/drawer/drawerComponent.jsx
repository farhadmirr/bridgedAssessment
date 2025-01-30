import React from 'react'
import "./drawerComponent.css"
import { Drawer ,Button,Typography} from 'antd'
import DomainForm from '../domainForm/domainForm'
import { CloseOutlined } from '@ant-design/icons'
const drawerComponent = ({ open, setOpen }) => {
  const onClose = () => {
    setOpen(false)
  }
  return (
    <Drawer
      open={open}
      onClose={onClose}
      placement="right"
      width={'45%'}
      closeIcon={null}
      title={
        <div className="flex justify-between items-center absolute top-[50px]" style={{right: `calc(100% + 50px)`, transform: "rotateY(10deg)"}}>
          <Button
            type="text"
            icon={<CloseOutlined style={{ fontSize: "25px",color:'white' }} />}
            onClick={onClose}
          />
        </div>
      }
    >
      <DomainForm onCancel={onClose} />
    </Drawer>
  )
}

export default drawerComponent