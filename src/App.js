import logo from './logo.svg';
import './App.css';
import AnalogClock from './Components/AnalogClock'
import DateComponent from './Components/DateComponent';

function App() {
  return (
    <div>
      <div className="App-header"><DateComponent/><AnalogClock/></div>
      
    </div>
  );
}

export default App;
