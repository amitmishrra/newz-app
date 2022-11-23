import React from 'react'
import Navbar from "../Components/Navbar/Navbar"
import NavLinks from "../Components/NavLinks/NavLinks"

const CommonContainer = ({children}) => {
    return (
        <>
       <div className='topSection'>
       <Navbar/>
        <NavLinks/>
       </div>

            {children}
        </>
    )
}

export default CommonContainer