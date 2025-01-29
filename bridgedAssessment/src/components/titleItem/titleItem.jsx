import React from 'react'
import { ExclamationCircleTwoTone, HeartTwoTone, SmileTwoTone } from '@ant-design/icons';

const titleItem = ({ text, isActive }) => (
    <div className='flex'>
        {isActive ? <ExclamationCircleTwoTone twoToneColor={'#52c41a'} /> : <span style={{ color: 'red' }}>Not Active</span>}
        <a href={text} target="_blank" rel="noopener noreferrer">{text}</a>
    </div>
)

export default titleItem