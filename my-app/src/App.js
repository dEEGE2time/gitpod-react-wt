import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import FunctionalGreeting from './components/FunctionalGreeting';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
      <StatefulGreeting greeting="I'm a stateful class component!" name="dEEGE" />
      <FunctionalGreetingWithProps greeting="nice to meet you!" name="dEEGE" age="99" />
    </div>
  );
}

export default App;
