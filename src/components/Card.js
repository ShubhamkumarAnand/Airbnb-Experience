import swimmer from '../images/katie-zafers.png'
import star from '../images/Star.png'
import '../App.css'

export default function Card() {
  return (
    <div className='card'>
      <img src={ swimmer } alt='Katie-Zaferes' className='card--image'/>
      <div className='card--stats'>
        <img src={ star } alt='star' className='card--star'/>
        <span>5.0</span>
        <span className='grey'>(6) •</span>
        <span className='grey'>USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p><span className='bold'>From $136</span>/person</p>
    </div>
  )
}