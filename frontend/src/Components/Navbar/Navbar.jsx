import React, { useContext, useRef } from 'react'
import { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/dropdown_icon.png'

const Navbar = () => {

    const [menu, setMenu] = useState("shop");

    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOP2ORDER</p>
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none' }} to='/'>HOME</Link>{menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("grocery") }}><Link style={{ textDecoration: 'none' }} to='/grocery'>GROCERY</Link>{menu === "grocery" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("chilled") }}><Link style={{ textDecoration: 'none' }} to='/chilled'>CHILLED</Link>{menu === "chilled" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("drinks") }}><Link style={{ textDecoration: 'none' }} to='/drinks'>DRINKS</Link>{menu === "drinks" ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token')
                    ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>Logout</button> :
                    <Link to='/login'><button>Login</button></Link>}
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar;