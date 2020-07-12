import { createSignal } from "solid-js"
import logo from './logo.svg';
import './App.css';

const Button = () => {
  console.log("ButtonButtonButtonButton")
  const [count, setCount] = createSignal(0);
  const onClick = () => {
    setCount(count() + 1);
  }
  return <button onClick={onClick}>{count()}</button>
}
function App() {
  return (
    <div class="App">
      <header class="App-header">
        <img src={logo} class="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class="App-link"
          href="https://github.com/ryansolid/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
        <Button></Button>
      </header>
    </div>
  );
}

export default App;
