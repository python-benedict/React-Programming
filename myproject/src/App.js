import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
import Profile from './components/profile';
import Counter from './components/counter';
import Destruc from './components/destruction';
import Destruc1 from './components/destructuring1';
function App() {
  return (
    <div className="App">
      <Destruc name="Emmanu"></Destruc>
      <Destruc1 name="Prince" age="23"></Destruc1>
    </div>
  );
}

export default App;
