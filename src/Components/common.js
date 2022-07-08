import React from 'react'
import Navbar from "../Components/Navbar/Navbar"
import NavLinks from "../Components/NavLinks/NavLinks"

const CommonContainer = ({children}) => {
    return (
        <>
        <Navbar/>
        <NavLinks/>
            {children}
        </>
    )
}

export default CommonContainer