import React, { useEffect } from 'react';
import "./tableComponent.css"
import { Table } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDomains } from '../../api/api';
import StatusItem from '../statusItem/statusItem';
import TitleItem from '../titleItem/titleItem';
const TableComponent = ({ order, searchQuery,setEditing,setDrawer }) => {
    const dispatch = useDispatch();
    const { data: domains, loading } = useSelector((state) => state.domains);

    useEffect(() => {
        dispatch(fetchDomains());
    }, [dispatch]);


    const filteredDomains = domains.filter((domain) =>
        domain.domain.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Sort by createdDate (ascending or descending)
    const sortedDomains = filteredDomains.sort((a, b) => {
        if (order === 'Ascending') {
            return a.createdDate - b.createdDate;
        }
        if (order === 'Descending') {
            return b.createdDate - a.createdDate;
        }
        return 0;
    });

    const columns = [
        {
            title: 'Domain URL',
            dataIndex: 'domain',
            key: 'domain',
            render: (text, record) => <TitleItem text={text} isActive={record.isActive} domain={record.domain} />,
        },
        {
            title: 'Active Status',
            dataIndex: 'isActive',
            key: 'isActive',
            render: (isActive) => (
                <span style={{ color: isActive ? 'green' : 'red' }}>
                    {isActive ? 'Active' : 'Not Active'}
                </span>
            ),
        },
        {
            title: 'Created Date',
            dataIndex: 'createdDate',
            key: 'createdDate',
            render: (text) => new Date(text * 1000).toLocaleDateString(),
        },
        {
            title: 'Verification Status',
            dataIndex: 'status',
            key: 'status',
            render: (status,record) => <StatusItem record={record} setEditing={setEditing} setDrawer={setDrawer} />,
            // responsive: ["sm"]
        },
    ];

    return (
        <Table
            columns={columns}
            dataSource={sortedDomains.map((domain) => ({
                key: domain.id,
                domain: domain.domain,
                isActive: domain.isActive,
                status: domain.status,
                createdDate: domain.createdDate
            }))}
            loading={loading}
            pagination={false}
            bordered
            scroll={{ x: 'max-content' }}
        />

    );
};
export default TableComponent  