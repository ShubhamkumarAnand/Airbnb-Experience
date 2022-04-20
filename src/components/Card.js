import star from '../images/Star.png'
import '../App.css'

export default function Card(props) {
  return (
    <div className='card'>
      {props.img && <img src={ props.img } alt='card' className='card--image'/>}
      <div className='card--stats'>
        {props.star && <img src={ star } alt='star' className='card--star'/>}
        {props.rating && <span>{ props.rating }</span>}
        {props.reviewCount && <span className='grey'>({props.reviewCount}) •</span>}
        <span className='grey'>{ props.location}</span>
      </div>
      {props.title && <p>{ props.title }</p>}
      {props.price && <p><span className='bold'>From ${ props.price }</span>/person</p>}
    </div>
  )
}