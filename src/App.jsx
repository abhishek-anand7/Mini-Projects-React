import { Card } from './components/Card'
import './App.css'
import { Counter } from './components/Counter'

function App() {
  return(
    <>
      <Card
        name="Abhishek Anand" 
        role="FullStack Developer"
        email="xyz@gmail.com "
      />

      <Counter />
    </>
    
  )
}

export default App
