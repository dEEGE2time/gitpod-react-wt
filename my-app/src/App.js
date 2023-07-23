import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import FunctionalGreeting from './components/FunctionalGreeting';
import StatefulGreeting from './components/StatefulGreeting';
import EventsFunctional from './components/EventsFunctional';
import EventsClass from './components/EventsClass';
import LineBreaks from './components/LineBreaks';

function App() {
  return (
    <div className="App">
      <LineBreaks lesson='Components'/>
      <StatefulGreeting greeting="I'm a stateful class component!" name="dEEGE" />
      <FunctionalGreetingWithProps greeting="nice to meet you!" name="dEEGE" age="99" />
      <LineBreaks lesson='Events'/>
      <EventsFunctional />
      <EventsClass />
    </div>
  );
}

export default App;
