import React from 'react'
import useTitle from '../hooks/useTitle'
import DomainList from '../components/domainList/domainList'
const mainPage = () => {
    useTitle("Bridged Assessment")
    return (
        <DomainList />
    )
}

export default mainPage