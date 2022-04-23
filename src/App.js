import names from './names'
import './App.css'
function App() {
  return (
    <div className="App">
      Home
      <p>{JSON.stringify(names)}</p>
    </div>
  );
}

export default App;
