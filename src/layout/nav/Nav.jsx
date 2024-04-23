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
                <div className="nav-logo">
                    <h1>Prime  Flicks</h1>
                </div>
                    <ul className='nav-menu'>
                        <li><NavLink to={'/'} className={({isActive}) => isActive ? 'item-link item-link--active':'item-link'}>Main</NavLink></li>
                        <li><NavLink to={'/movies'} className={({isActive}) => isActive ? 'item-link item-link--active':'item-link'}>Movies</NavLink></li>
                        <li><NavLink to={'/series'} className={({isActive}) => isActive ? 'item-link item-link--active':'item-link'}>Series</NavLink></li>
                        <li><NavLink to={'/cartoons'} className={({isActive}) => isActive ? 'item-link item-link--active':'item-link'}>Cartoons</NavLink></li>
                        <li><NavLink to={'/collection'} className={({isActive}) => isActive ? 'item-link item-link--active':'item-link'}>Collection</NavLink></li>
                    </ul>
                    <form className='nav__search-form'>
                        <button className='search-icon'><SearchOutlined /></button>
                    <input  className='search-input' size='large' placeholder='Search' prefix={<SearchOutlined />}/>
                    </form>
                    <Link className='register-btn'>Sign In</Link>
            </div>
      </Container>
    </nav>
  )
}

export default Nav
