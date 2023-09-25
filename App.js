import logo from './logo.svg';
import Counter from './Counter';
import ChangeTextColor from './ChangeTextColor'
import ArrayOfObjs from './ArrayOfObjs';
import Digital from './Digital';
import DigitalClock from './DigitalClock';
import ViewItems from './ViewItems';
import './App.css';

function App() {
  return (
    <div className="App">
      {/*<Counter />*/}
      {/*<ChangeTextColor/>*/}
      <Digital/>
      <DigitalClock/>
      <ViewItems/>
      
    </div>
  );
}

export default App;
