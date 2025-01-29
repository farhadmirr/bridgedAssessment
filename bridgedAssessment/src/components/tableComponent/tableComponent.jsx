import React from 'react';
import { Space, Table, Tag } from 'antd';
import "./tableComponent.css"
const columns = [
    {
        title: 'Domain URL',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Active Status',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: 'Verification Status',
        dataIndex: 'verified',
        key: 'verified',
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

const TableComponent = () => {
    return (
        <Table columns={columns} dataSource={data} loading={false} pagination={false} bordered />
  )
}
export default  TableComponent
// const App = () => <Table columns={columns} dataSource={data} />;