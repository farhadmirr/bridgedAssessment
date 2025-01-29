import React from 'react';
import { Cascader, Select } from 'antd';
import './selectComponent.css'


const options = [
    {
        value: '1',
        label: 'Order By Ascending',
    },
    {
        value: '2',
        label: 'Order By Descending',
    },
];
const selectComponent = ({state,setState,id}) => {
    const onChange = (value) => {
        console.log(value)
        setState(value);
    };
    return (
        <Select id={id} options={options} onChange={onChange} defaultValue={'1'} placeholder="Please select" />
    )
}

export default selectComponent