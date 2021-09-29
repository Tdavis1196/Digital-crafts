import pokeData from './cardData';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <div>
        <h1>Pokemon Card</h1>
        <pokeData />
        <p>Name</p>
        <p>HP</p>
        <img src="" alt=""></img>
      </div>      
     
    </div>
  );
  
}

export default App;
