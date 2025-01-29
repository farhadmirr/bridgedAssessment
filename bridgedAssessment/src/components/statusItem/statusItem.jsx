import React from 'react'
import { MoreOutlined } from '@ant-design/icons'
const statusItem = ({ status }) => {
    const color = status === 'verified'
        ? 'green'
        : status === 'pending'
            ? '#d4d400'
            : 'red';
    return (
        <div className='w-full flex justify-between'>
            <span style={{ textTransform: 'capitalize', color: color }}>{status.toLowerCase()}</span>
            <MoreOutlined />
        </div>
    )
}

export default statusItem