import { NavLink } from 'react-router-dom'
import Mode from './Mode'

function Navbar() {
  return (
    <nav>
        <NavLink id='link' to="/" className={({isActive})=>isActive? "active":""}>Home</NavLink>
        <NavLink id='link' to="/about" className={({isActive})=>isActive? "active":""}>About</NavLink>
        <NavLink id='link' to="/weather" className={({isActive})=>isActive? "active":""}>Weather</NavLink>
        <Mode/>
    </nav>
  )
}

export default Navbar