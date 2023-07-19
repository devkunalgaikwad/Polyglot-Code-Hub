import Avatar from 'antd/es/avatar/avatar'
import Typography from 'antd/es/typography/Typography'
import React from 'react'
import { Link } from 'react-router-dom'
import icon from '../images/cryptocurrency.png'

const NavBar = () => {
  return (
    <div className='nav-container'>
        <div className="logo_container">
            <Avatar src={icon} size={'large'}/>
            <Typography.Title level ={2} className='logo'>
                <Link to={'/'}>Crytoverse</Link>
            </Typography.Title>
        </div>
    </div>
  )
}

export default NavBar;