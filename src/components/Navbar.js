import logo from '../images/airbnb-logo.png'
import '../App.css'

export default function Navbar() {
  return (
    <nav>
      <img src={ logo } alt='airbnb logo' className='nav--logo' />
    </nav>
  )
}