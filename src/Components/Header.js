import React from 'react'

export default function Header(){
    return(
        <nav className='nav'>
            <img src={process.env.PUBLIC_URL+"/Images/logo.png"} className='nav--logo' alt = "mCash logo"/>
            <h1 className='nav--title'>Home</h1>
            <img src={process.env.PUBLIC_URL+"/Images/bell.png"} className='nav--bell' alt = "Notifications"/>
        </nav>
    )
}