import React from 'react'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
const domainList = () => {
  return (
    <div className='w-full h-[100vh] p-1 lg:p-10 2xl:p-8 3xl:p-14 flex'>
      <div className='w-full'>
        <p>Domains</p>
        <div className='flex w-full justify-between'>
          <Button type="primary" icon={<PlusOutlined />} size='large' className='w-50 '>Add Domain</Button>
          <div className='w-[700px] bg-red-100'>

          </div>
        </div>

      </div>
    </div>
  )
}

export default domainList