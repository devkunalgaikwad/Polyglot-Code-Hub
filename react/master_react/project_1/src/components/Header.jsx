import React from 'react'
import { HashLink } from 'react-router-hash-link';

function Header() {
  return (
    <nav>
        <h1>Tech Center.</h1>
        <main>
            <HashLink to="/#Home">Home</HashLink>
            <HashLink to="/contact">Contact</HashLink>
            <HashLink to="/#About">About</HashLink>
            <HashLink to="/#Brands">Brands</HashLink>
        </main>
    </nav> 
  )
}

export default Header