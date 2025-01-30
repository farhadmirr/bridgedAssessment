import React from 'react';
import { Cascader, Select } from 'antd';
import './selectComponent.css'


const options = [
    {
        value: 'Ascending',
        label: 'Order By Ascending',
    },
    {
        value: 'Descending',
        label: 'Order By Descending',
    },
];
const selectComponent = ({state,setState,id}) => {
    const onChange = (value) => {
        setState(value);
    };
    return (
        <Select id={id} options={options} onChange={onChange} defaultValue={'Ascending'} placeholder="Please select" />
    )
}

export default selectComponent