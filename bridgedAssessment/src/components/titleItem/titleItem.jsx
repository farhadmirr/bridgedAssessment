import React from 'react'
import { ExclamationCircleTwoTone} from '@ant-design/icons';
import dotIcon from "../../assets/icons/dot.png";
import "./titleItem.css"
const titleItem = ({ text, isActive }) => (
    <div className='flex items-center gap-4'>
        {isActive ? <img src={dotIcon} className='w-3 h-3' alt="" /> : <ExclamationCircleTwoTone className='w-3 h-3' twoToneColor={'#ff0000'}/>}
        <span id='domainName' className='text-[16px] text-black font-bold'>{text}</span>
    </div>
)

export default titleItem