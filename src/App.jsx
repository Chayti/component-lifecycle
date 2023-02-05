import Counter from "./components/Counter"
import Counter2 from "./components/Counter2"
import './App.css'

function App() {

  const styles = {
    color: "green"
  }

  return (
    <div style={styles}>
      <Counter></Counter>
      <Counter2></Counter2>
    </div>
  )
}

export default App
