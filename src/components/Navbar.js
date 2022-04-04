import logo from '../images/airbnb-logo.png'
import '../App.css'

export default function Navbar() {
  return (
    <main>
      <img src={ logo } alt='airbnb logo' className='nav--logo' />
      <h1>Online Experience</h1>
      <p>Join unique interactive activities led by one-of-a-kind hosts — all without leaving home.
      </p>
    </main>
  )
}