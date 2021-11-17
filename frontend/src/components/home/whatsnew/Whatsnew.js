import React from 'react'
import './Whatsnew.scss'
import Blogpost from './HomeBlogpost'
import Tellorprice from './Tellorprice'
import Tellorfeeds from './Tellorfeeds'

export default function Whatsnew() {
    return (
        <div className="Whatsnew">
            <Blogpost />
            <div  className="Whatsnew__secondline">
                <Tellorprice />
                <Tellorfeeds />
            </div>
        </div>
    )
}
