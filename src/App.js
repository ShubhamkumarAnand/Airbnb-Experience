import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
    />
  )})
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='card--layout'>
        {cards}        
      </div>
    </div>
  )
}

export default App;
