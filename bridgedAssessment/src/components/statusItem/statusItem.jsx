import React from 'react'
import { MoreOutlined } from '@ant-design/icons'
import "./statusItem.css"
import { Dropdown, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { deleteDomain } from '../../redux/domainSlice';
import { updateDomain } from '../../redux/domainSlice';
import { cache } from 'react';
const statusItem = ({ status, id }) => {
    const { loading } = useSelector((state) => state.domains)
    const dispatch = useDispatch();
    const handleDelete = async (id) => {
        try {
            await dispatch(deleteDomain(id)); // Dispatch delete action
            message.success('Domain deleted successfully');
        } catch (error) {
            message.error('Failed to delete domain');
        }
    };

    const handleVerify = async (id) => {
        console.log(id)
        try {
            const updatedDomain = {
                status: "verified",
            };
            await dispatch(updateDomain({ id: id, updatedData: updatedDomain }));
            message.success('Domain Verified!')
        } catch (error) {
            message.error(error)
        }
    }
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
                <span style={{ fontFamily: 'Raleway', fontWeight: '700' }}>
                    Verify
                </span>
            ),
            key: '1',
            onClick: () => handleVerify(id)
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
                <span className='text-red-600' style={{ fontFamily: 'Raleway', fontWeight: '700' }}>
                    Delete
                </span>
            ),
            key: '4',
            onClick: () => handleDelete(id)
        },
    ];
    return (
        <div className='w-full flex justify-between'>
            <span style={{ textTransform: 'capitalize', color: color }}>{status.toLowerCase()}</span>
            <Dropdown menu={{ items }} trigger={['click']} disabled={loading}>
                <MoreOutlined style={{ fontSize: '24px' }} className='cursor-pointer' />
            </Dropdown>
        </div>
    )
}

export default statusItem