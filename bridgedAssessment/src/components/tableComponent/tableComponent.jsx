import React, { useEffect } from 'react';
import { Table } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDomains } from '../../redux/domainSlice'; // Adjust the path as needed
import { MenuOutlined, MoreOutlined } from '@ant-design/icons';
import StatusItem from '../statusItem/statusItem';
import TitleItem from '../titleItem/titleItem';
const columns = [
    {
        title: 'Domain URL',
        dataIndex: 'domain',
        key: 'domain',
        render: (text,record) => <TitleItem text={text} isActive={record.isActive} />,
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
        title: 'Verification Status',
        dataIndex: 'status',
        key: 'status',
        render(status) {
          return (
            <StatusItem status={status} />
          )
        }
    },
];

const TableComponent = () => {
    const dispatch = useDispatch();
    const { data: domains, loading } = useSelector((state) => state.domains);

    useEffect(() => {
        // Fetch domain data on component mount
        dispatch(fetchDomains());
    }, [dispatch]);

    return (
        <Table
            columns={columns}
            dataSource={domains.map((domain) => ({
                key: domain.id,
                domain: domain.domain,
                isActive: domain.isActive,
                status: domain.status,
            }))}
            loading={loading}
            pagination={true}
            bordered
        />
    );
};

export default TableComponent;
