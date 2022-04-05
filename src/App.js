import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Card from './components/Card'
import katie from './images/katie-zafers.png'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card
        img={katie}
        name="katie zafers"
        rating='5.0'
        people='6'
        text='life lesson from katie zafers'
        price='136'
      />
    </div>

  )
}

export default App;
