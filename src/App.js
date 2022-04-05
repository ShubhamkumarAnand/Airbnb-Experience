import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Card from './components/Card'
import katie from './images/katie-zafers.png'
import wedding from './images/wedding-photography.png'
import mountain from './images/mountain-bike.png'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='card--layout'>
        <Card
          img={ katie }
          name="katie Zaferes"
          rating='5.0'
          people='6'
          text='life lesson from katie Zaferes'
          price='136'
        />
        <Card
          img={wedding}
          name='wedding-photography'
          rating='5.0'
          people='30'
          text='Learn wedding photography'
          price='125'
        />
        <Card
          img={ mountain }
          name='mountain-bike'
          rating='4.8'
          people='2'
          text='Group mountain biking'
          price='50'
        />
      </div>

    </div>

  )
}

export default App;
