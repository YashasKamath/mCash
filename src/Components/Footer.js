import React from 'react'

export default function Header(){
    return(
        <div className='footer'>
            <img src={process.env.PUBLIC_URL+"/Images/videogame.jpeg"} className='nav--videogame' alt = "videogame"/>
            <img src={process.env.PUBLIC_URL+"/Images/faq.png"} className='nav--faq' alt = "faq"/>
            <img src={process.env.PUBLIC_URL+"/Images/people.png"} className='nav--people' alt = "people"/>
            <img src={process.env.PUBLIC_URL+"/Images/quiz.png"} className='nav--quiz' alt = "quiz"/>
            <img src={process.env.PUBLIC_URL+"/Images/wallet.png"} className='nav--wallet' alt = "wallet"/>
        </div>
    )
}