import React, { useEffect } from 'react';
import "./tableComponent.css"
import { Table } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDomains } from '../../redux/domainSlice';
import StatusItem from '../statusItem/statusItem';
import TitleItem from '../titleItem/titleItem';
const TableComponent = ({ order, searchQuery }) => {
    const dispatch = useDispatch();
    const { data: domains, loading } = useSelector((state) => state.domains);
  
    useEffect(() => {
      dispatch(fetchDomains());
    }, [dispatch]);
  

    const filteredDomains = domains.filter((domain) =>
      domain.domain.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sortedDomains = filteredDomains.sort((a, b) => {
      if (order === 'Ascending') {
        return a.domain.localeCompare(b.domain);
      }
      if (order === 'Descending') {
        return b.domain.localeCompare(a.domain);
      }
      return 0;
    });
  
    const columns = [
      {
        title: 'Domain URL',
        dataIndex: 'domain',
        key: 'domain',
        render: (text, record) => <TitleItem text={text} isActive={record.isActive} />,
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
        render: (status) => <StatusItem status={status} />,
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
        }))}
        loading={loading}
        pagination={true}
        bordered
      />
    );
  };
export default TableComponent  