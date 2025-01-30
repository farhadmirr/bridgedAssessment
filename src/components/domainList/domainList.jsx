import React, { useEffect, useState } from 'react'
import { Button, Input } from 'antd'
import { PlusOutlined, ClockCircleOutlined, SearchOutlined } from '@ant-design/icons'
import SelectComponent from '../selectComponent/selectComponent'
import TableComponent from '../tableComponent/tableComponent'
import DrawerComponent from '../drawer/drawerComponent'
import DomainForm from '../domainForm/domainForm'
import { clearEditingItem } from '../../redux/features/domainSlice/domainSlice'
import EditForm from '../editForm/editForm'
import './domainList.css'
import { useDispatch } from 'react-redux'
const domainList = () => {
  const [orderState, setOrderState] = useState('Asscending')
  const [searchQuery, setSearchQuery] = useState('');
  const [editing, setEditing] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    if (drawerOpen&&editing) {
      // setEditing(false)
    }
    if (!editing) {
      dispatch(clearEditingItem())
    }
  }, [drawerOpen])

  return (
    <div className='w-full h-[100vh] p-4 lg:p-10 2xl:p-8 3xl:p-14 flex'>
      <div className='w-full flex flex-col gap-3'>
        <h2>Domains</h2>
        <div className='flex flex-col md:flex-row w-full justify-between'>
          <Button type="primary" icon={<PlusOutlined />} size='large' className='w-full mb-3 md:mb-0 md:w-56 3xl:w-64' onClick={() => { setEditing(false); setDrawerOpen(true) }}>Add Domain</Button>
          <div className='w-full md:w-[60%] flex flex-col gap-3 md:flex-row justify-end'>
            <SelectComponent id={'orderSelect'} setState={setOrderState} state={orderState} />
            <Input prefix={<SearchOutlined />} placeholder="Search" onChange={(e) => setSearchQuery(e.target.value)} />
          </div>
        </div>
        <div>
          <TableComponent order={orderState} searchQuery={searchQuery} setEditing={setEditing} setDrawer={setDrawerOpen} />
        </div>
      </div>
      <DrawerComponent open={drawerOpen} setOpen={setDrawerOpen} FormComponent={editing ? EditForm : DomainForm} />
    </div>
  )
}

export default domainList