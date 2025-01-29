import React from 'react'
import { Button,Input } from 'antd'
import { PlusOutlined,ClockCircleOutlined, SearchOutlined } from '@ant-design/icons'
import SelectComponent from '../selectComponent/selectComponent'
import TableComponent from '../tableComponent/tableComponent'
import './domainList.css'
const domainList = () => {
  const [test,setTest] = React.useState('test')
  return (
    <div className='w-full h-[100vh] p-1 md:p-4 lg:p-10 2xl:p-8 3xl:p-14 flex'>
      <div className='w-full flex flex-col gap-3'>
        <p>Domains</p>
        <div className='flex w-full justify-between'>
          <Button type="primary" icon={<PlusOutlined />} size='large' className='w-50 '>Add Domain</Button>
          <div className='w-[700px] flex justify-between'>
            <SelectComponent id={'orderSelect'} setState={setTest} state={test} />
            <Input prefix={<SearchOutlined />} placeholder="Search" />
          </div>
        </div>
        <div>
          <TableComponent />
        </div>

      </div>
    </div>
  )
}

export default domainList