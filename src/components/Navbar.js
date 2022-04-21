import '../App.css'
import logo from '../images/airbnb-logo.png'

export default function Navbar() {
  return (
    <nav>
      <img src={ logo } alt='airbnb logo' className='nav--logo' />
    </nav>
  )
}
