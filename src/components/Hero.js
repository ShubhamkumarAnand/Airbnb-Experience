import photoGrid from '../images/photo-grid.png'

export default function Hero() {
  return (
    <main>
      <img src={ photoGrid } alt='grid-images' className='hero--grid' />
    </main>
  )
}