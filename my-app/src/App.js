// import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
// import FunctionalGreeting from './components/FunctionalGreeting';
import StatefulGreeting from './components/StatefulGreeting';
import EventsFunctional from './components/EventsFunctional';
import EventsClass from './components/EventsClass';
import LineBreaks from './components/LineBreaks';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import NestingComponents from './components/NestingComponents';
import MethodsAsPropsParent from './components/MethodsAsPropsParent';
import RenderingLists from './components/RenderingLists';
import LifeCyclesCDM from './components/LifeCyclesCDM';

function App() {
  return (
    <div className="App">
      {/* <LineBreaks lesson='Components'/>
      <StatefulGreeting greeting="I'm a stateful class component!" name="dEEGE" />
      <FunctionalGreetingWithProps greeting="nice to meet you!" name="dEEGE" age="99" />
      <LineBreaks lesson='Events'/>
      <EventsFunctional />
      <EventsClass />
      <LineBreaks lesson='Conditional Rendering' />
      <ConditionalRenderingClass />
      <ConditionalRenderingFunctional connected={true}/>
      <LineBreaks lesson='Nesting Components'/>
      <NestingComponents />
      <LineBreaks lesson='Methods as props'/>
      <MethodsAsPropsParent />
      <LineBreaks lesson='Rendering Lists'/>
      <RenderingLists /> */}
      {/* <LineBreaks lesson='Methods Lifecycle'/> */}
      <LifeCyclesCDM />
    </div>
  );
}

export default App;
