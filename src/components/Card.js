import star from '../images/Star.png'
import '../App.css'

export default function Card(props) {
  console.log(props)
  let badgeText
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
    badgeText = "ONLINE"
  }
  return (
    <div className='card'>
      { badgeText && <div className='card--badge'>{ badgeText }</div> }
      <img src={ props.coverImg } alt='card' className='card--image' />
      <div className='card--stats'>
        { props.star && <img src={ star } alt='star' className='card--star' /> }
        { props.stats.rating && <span>{ props.stats.rating }</span> }
        { props.stats.reviewCount && <span className='grey'>({ props.stats.reviewCount }) •</span> }
        <span className='grey'>{ props.location }</span>
      </div>
      { props.title && <p>{ props.title }</p> }
      { props.price && <p><span className='bold'>From ${ props.price } </span>/person</p> }
    </div>
  )
}
