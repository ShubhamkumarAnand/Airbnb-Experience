import star from '../images/Star.png'
import '../App.css'

export default function Card(props) {
  console.log(props)
  let badgeText
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE"
  }
  return (
    <div className='card'>
      { badgeText && <div className='card--badge'>{badgeText}</div>}
      <img src={`../images/${props.item.coverImg}`} alt='card' className='card--image'/>
      <div className='card--stats'>
        {props.item.star && <img src={ star } alt='star' className='card--star'/>}
        {props.item.stats.rating && <span>{ props.item.stats.rating }</span>}
        {props.item.stats.reviewCount && <span className='grey'>({props.item.stats.reviewCount}) •</span>}
        <span className='grey'>{ props.item.location}</span>
      </div>
      {props.item.title && <p>{ props.item.title }</p>}
      {props.item.price && <p><span className='bold'>From ${ props.item.price } </span>/person</p>}
    </div>
  )
}
