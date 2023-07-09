
import './App.css';
import Navbar from './Components/Navbar/navbar';
import Clients from './Sections/Clients/clients';
import Hero from './Sections/Hero/hero';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Clients/>
    </div>
  );
}

export default App;
