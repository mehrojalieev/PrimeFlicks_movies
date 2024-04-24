import './Nav.scss'
import { Container } from '../../utils/Utils'
import { Link, NavLink } from 'react-router-dom'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
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
                        <li><NavLink to={'/'} className={({isActive}) => isActive ? 'item-link item-link--active':'item-link'}>Main</NavLink></li>
                        <li><NavLink to={'/movies'} className={({isActive}) => isActive ? 'item-link item-link--active':'item-link'}>Movies</NavLink></li>
                        <li><NavLink to={'/series'} className={({isActive}) => isActive ? 'item-link item-link--active':'item-link'}>TV Series</NavLink></li>
                        <li><NavLink to={'/cartoons'} className={({isActive}) => isActive ? 'item-link item-link--active':'item-link'}>Genre</NavLink></li>
                        <li><NavLink to={'/cartoons'} className={({isActive}) => isActive ? 'item-link item-link--active':'item-link'}>About Us</NavLink></li>
                        <li><NavLink to={'/cartoons'} className={({isActive}) => isActive ? 'item-link item-link--active':'item-link'}>Contact Us</NavLink></li>
                    </ul>
                   
                    <Link className='register-btn'>Sign In</Link>
            </div>
      </Container>
    </nav>
  )
}

export default Nav
