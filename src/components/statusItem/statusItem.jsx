import React from 'react';
import { MoreOutlined } from '@ant-design/icons';
import { Dropdown, message } from 'antd';
import { setEditingItem } from '../../redux/features/domainSlice/domainSlice';
import { useDispatch, useSelector } from 'react-redux';
import { deleteDomain, updateDomain } from '../../api/api';

const StatusItem = ({ record, setEditing, setDrawer }) => {
    const { loading } = useSelector((state) => state.domains);
    const dispatch = useDispatch();

    const handleDelete = async () => {
        try {
            await dispatch(deleteDomain(record.key));
            message.success('Domain deleted successfully');
        } catch (error) {
            message.error('Failed to delete domain');
        }
    };

    const handleVerify = async () => {
        try {
            const updatedDomain = { status: "verified" };
            await dispatch(updateDomain({ id: record.key, updatedData: updatedDomain }));
            message.success('Domain Verified!');
        } catch (error) {
            message.error('Failed to verify domain');
        }
    };

    const color = record.status === 'verified'
        ? 'green'
        : record.status === 'pending'
            ? '#d4d400'
            : 'red';

    const items = [
        { label: <span>View Props</span>, key: '0', disabled: true },
        { label: <span style={{ fontWeight: '700' }}>Verify</span>, key: '1', onClick: handleVerify },
        { label: <span>Install Script</span>, key: '3', disabled: true },
        { label: <span className='text-red-600' style={{ fontWeight: '700' }}>Delete</span>, key: '4', onClick: handleDelete },
        { label: <span style={{ fontWeight: '700' }}>Edit</span>, key: '5', onClick: () => {
            dispatch(setEditingItem(record)); // Pass full record instead of just id
            setEditing(true);
            setDrawer(true);
        }},
    ];

    return (
        <div className='w-full flex justify-between'>
            <span style={{ textTransform: 'capitalize', color }}>{record.status.toLowerCase()}</span>
            <Dropdown menu={{ items }} trigger={['click']} disabled={loading}>
                <MoreOutlined style={{ fontSize: '24px' }} className='cursor-pointer' />
            </Dropdown>
        </div>
    );
};

export default StatusItem;
    