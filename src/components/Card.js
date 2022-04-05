import star from '../images/Star.png'
import '../App.css'

export default function Card(props) {
  return (
    <div className='card'>
      <img src={ props.img } alt='{props.name}' className='card--image'/>
      <div className='card--stats'>
        <img src={ star } alt='star' className='card--star'/>
        <span>{ props.rating }</span>
        <span className='grey'>({props.people}) •</span>
        <span className='grey'>USA</span>
      </div>
      <p>{ props.text }</p>
      <p><span className='bold'>From ${ props.price }</span>/person</p>
    </div>
  )
}