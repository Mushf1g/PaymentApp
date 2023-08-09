import React from 'react'
import "./navbar.css"
import IngressImg from "./ingress.jpg"
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <>
        <div className='navbarpage'>
            <header className='header container'>
                <div className='headerStart'>
                    <div className='IngressImg'><img src={IngressImg} alt="" /></div>
                    <nav className='nav'>
                        <Link to="/payments">Ödənişlər</Link>
                        <Link to="/students">Tələbələr</Link>
                        <Link to="/courses">Kurslar</Link>
                        <Link to="/expenses">Xərclər</Link>
                    </nav>
                </div>
                <div className='headerEnd'>
                    <input type="search" placeholder='Axtar...' />
                    <Link to="/">Çıx</Link>
                </div>
            </header>
        </div>
    </>
  )
}

export default Navbar