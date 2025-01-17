import React, { useState } from 'react';
import './header.css'
import HeaderTop from './HeaderTop';
import HeaderMiddle from './HeaderMiddle';
import Navbar from './Navbar';

export default function Header() {
    const [toggle, setToggle] = useState(false);

    return (
        <header className='header'>
            <HeaderTop setToggle={setToggle} toggle={toggle}/>
            <HeaderMiddle />
            <Navbar toggle={toggle} setToggle={setToggle}/>
        </header>
    )
}
