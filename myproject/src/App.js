import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
import Profile from './components/profile';
function App() {
  return (
    <div className="App">
      <Hello></Hello>
      <Message></Message>
      <Profile name="Osei Sefa">
        <h3>Heeyy there what's up</h3>
      </Profile>
    </div>
  );
}

export default App;
