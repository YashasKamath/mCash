// eslint-disable-next-line

import React from 'react'

export default function Header(props){
    return(
        <div className='features'>
            <div>
                <h3 className='features--heading'>{props.heading}</h3>
                <h5 className='features--desc'>{props.desc}</h5>
            </div>
            <img src={process.env.PUBLIC_URL + "/Images/" + `${props.image}`} className='feature' alt = "mCash features"/>
        </div>
    )
}