import React from 'react'
import { ExclamationCircleTwoTone } from '@ant-design/icons';
import dotIcon from "../../assets/icons/dot.png";
import shareIcon from "../../assets/icons/newTab.png"
import "./titleItem.css"
const titleItem = ({ text, isActive }) => (
    <div className='flex items-center gap-4'>
        <div className='flex'>
            {isActive ? <img src={dotIcon} className='w-3 h-3' alt="dotIcon" /> : <ExclamationCircleTwoTone className='w-3 h-3' twoToneColor={'#ff0000'} />}
        </div>
        <span id='domainName' className='text-[16px] text-black font-bold'>{text}</span>
        <img src={shareIcon} className='' alt='newTabIcon' />

    </div>
)

export default titleItem