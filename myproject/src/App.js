import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
import Profile from './components/profile';
function App() {
  return (
    <div className="App">
      <Hello/>
      <Message/>
      <Profile name="Osei Sefa"/>
    </div>
  );
}

export default App;
