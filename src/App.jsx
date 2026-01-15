import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div>
      <Welcome name="Athira" />
      <Welcome name="John" />

      <Counter />   
    </div>
  );
}

function Welcome(props) {
  return <h2>Hello {props.name}</h2>;
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default App;
