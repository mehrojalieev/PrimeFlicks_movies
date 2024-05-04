import './Nav.scss'
import { Container } from '../../utils/Utils'
import { Link, NavLink } from 'react-router-dom'
import { ConfigProvider, Input, Popover } from 'antd'
import { CloseCircleOutlined, HeartOutlined, MailOutlined, MenuOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons'
import { useState } from 'react'




const Nav = () => {


  const [openMenu, setOpenMenu] = useState(false)

  return (
    <nav>
      <Container>
        <div className="nav-wrapper">
          <button onClick={() => setOpenMenu(!openMenu)} className='hamburger-btn'><MenuOutlined /></button>
          <Link to={'/'} className="nav-logo">
            <span>Prime</span>
            <span>Flicks</span>
          </Link>
          <ul style={openMenu ? { display: 'flex' } : {}} className='nav-menu'>
            <span onClick={() => setOpenMenu(false)} className='close-menu'><CloseCircleOutlined /></span>
            <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'item-link item-link--active' : 'item-link'}>Main</NavLink></li>
            <li><NavLink to={'/movies'} className={({ isActive }) => isActive ? 'item-link item-link--active' : 'item-link'}>Movies</NavLink></li>
            <li><NavLink to={'/people'} className={({ isActive }) => isActive ? 'item-link item-link--active' : 'item-link'}>People</NavLink></li>
            <li><NavLink to={'/tv-shows'} className={({ isActive }) => isActive ? 'item-link item-link--active' : 'item-link'}>TV Shows</NavLink></li>
            <li><NavLink to={'/about-us'} className={({ isActive }) => isActive ? 'item-link item-link--active' : 'item-link'}>About Us</NavLink></li>
            <li><NavLink to={'/contact-us'} className={({ isActive }) => isActive ? 'item-link item-link--active' : 'item-link'}>Contact Us</NavLink></li>
          </ul>
          <div className="nav-actions">
            <ConfigProvider >
              <Popover placement='top' title={'Wishlist. You`ve Added movies'} >
                <NavLink className={({ isActive }) => isActive ? 'wishlist-link wishlist-link--active' : 'wishlist-link'} to={'/wishlist'}>
                  <i><HeartOutlined /></i>
                  Wishlist
                </NavLink>
              </Popover>
            </ConfigProvider>
            <NavLink to={'/wishlist'} className={({ isActive }) => isActive ? 'wishlist-heart wishlist-heart--active' : 'wishlist-heart'}><HeartOutlined /></NavLink>
            <Link className='register-btn'>Sign In</Link>
            <Link className='register__link-icon'><UserOutlined /></Link>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Nav
