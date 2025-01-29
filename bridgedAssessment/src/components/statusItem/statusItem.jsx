import React from 'react'
import { MoreOutlined } from '@ant-design/icons'
import "./statusItem.css"
import { Dropdown } from 'antd';
const statusItem = ({ status }) => {
    const color = status === 'verified'
        ? 'green'
        : status === 'pending'
            ? '#d4d400'
            : 'red';

    const items = [
        {
            label: (
                <span >
                    View Props
                </span>
            ),
            key: '0',
            disabled: true,
        },
        {
            label: (
                <span style={{fontFamily:'Raleway',fontWeight:'700'}}>
                    Verify
                </span>
            ),
            key: '1',
        },
        {
            label: (
                <span >
                   Install Script
                </span>
            ),
            disabled: true,
            key: '3',
        },
        {
            label: (
                <span className='text-red-600' style={{fontFamily:'Raleway',fontWeight:'700'}}>
                    Delete
                </span>
            ),
            key: '4',
        },
    ];
    return (
        <div className='w-full flex justify-between'>
            <span style={{ textTransform: 'capitalize', color: color }}>{status.toLowerCase()}</span>
            <Dropdown menu={{ items }} trigger={['click']}>
                <MoreOutlined style={{ fontSize: '24px' }} className='cursor-pointer' />
            </Dropdown>
        </div>
    )
}

export default statusItem