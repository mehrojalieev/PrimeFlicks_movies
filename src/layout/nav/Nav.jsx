import './Nav.scss'
import { Container } from '../../utils/Utils'
import { Link, NavLink } from 'react-router-dom'
import { ConfigProvider, Input, Popover } from 'antd'
import { HeartOutlined, SearchOutlined } from '@ant-design/icons'
const Nav = () => {
  return (
    <nav>
      <Container>
        <div className="nav-wrapper">
          <Link to={'/'} className="nav-logo">
            <span>Prime</span>
            <span>Flicks</span>
          </Link>
          <ul className='nav-menu'>
            <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'item-link item-link--active' : 'item-link'}>Main</NavLink></li>
            <li><NavLink to={'/movies'} className={({ isActive }) => isActive ? 'item-link item-link--active' : 'item-link'}>Movies</NavLink></li>
            <li><NavLink to={'/people'} className={({ isActive }) => isActive ? 'item-link item-link--active' : 'item-link'}>People</NavLink></li>
            <li><NavLink to={'/series'} className={({ isActive }) => isActive ? 'item-link item-link--active' : 'item-link'}>TV Series</NavLink></li>
            <li><NavLink to={'/about-us'} className={({ isActive }) => isActive ? 'item-link item-link--active' : 'item-link'}>About Us</NavLink></li>
            <li><NavLink to={'/contact-us'} className={({ isActive }) => isActive ? 'item-link item-link--active' : 'item-link'}>Contact Us</NavLink></li>
          </ul>
          <div className="nav-actions">
            <ConfigProvider >

              <Popover  placement='top' title={'Wishlist. You`ve Added movies'} >
                <NavLink  className={({isActive}) => isActive ? 'wishlist-link wishlist-link--active' : 'wishlist-link'} to={'/wishlist'}>
                <i><HeartOutlined/></i>
                  Wishlist
                </NavLink>
              </Popover>
            </ConfigProvider>
            <Link className='register-btn'>Sign In</Link>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Nav
