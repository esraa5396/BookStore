import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderTop({setToggle, toggle}) {
    return (
        <div className="header-top">
            <div onClick={() => setToggle(prev => !prev)} className="header-top-menu">
                {toggle ? <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i>}
            </div>
            <div className="header-top-phone">
                <i className="bi bi-telephone-fill"></i>
                123-456-796
            </div>
            <div className="header-top-text">
                Welcome To Online Book Store
            </div>
            <Link to='/login' className="header-top-link">
                <i className="bi bi-person-fill"></i>
                Login
            </Link>
    </div>
    )
}
