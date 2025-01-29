import React, { useState } from 'react'
import { Button, Input } from 'antd'
import { PlusOutlined, ClockCircleOutlined, SearchOutlined } from '@ant-design/icons'
import SelectComponent from '../selectComponent/selectComponent'
import TableComponent from '../tableComponent/tableComponent'
import DrawerComponent from '../drawer/drawerComponent'
import './domainList.css'
const domainList = () => {
  const [orderState, setOrderState] = useState('Asscending')
  const [searchQuery, setSearchQuery] = useState('');
  const [drawer, setDrawer] = useState(false)
  return (
    <div className='w-full h-[100vh] p-1 md:p-4 lg:p-10 2xl:p-8 3xl:p-14 flex'>
      <div className='w-full flex flex-col gap-3'>
        <h2>Domains</h2>
        <div className='flex w-full justify-between'>
          <Button type="primary" icon={<PlusOutlined />} size='large' className='w-56 3xl:w-64' onClick={() => { setDrawer(true) }}>Add Domain</Button>
          <div className='w-[700px] flex justify-between'>
            <SelectComponent id={'orderSelect'} setState={setOrderState} state={orderState} />
            <Input prefix={<SearchOutlined />} placeholder="Search" onChange={(e) => setSearchQuery(e.target.value)} />
          </div>
        </div>
        <div>
          <TableComponent order={orderState} searchQuery={searchQuery} />
        </div>
      </div>
      <DrawerComponent open={drawer} setOpen={setDrawer} />
    </div>
  )
}

export default domainList