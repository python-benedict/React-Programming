import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
import Profile from './components/profile';
function App() {
  return (
    <div className="App">
      <Hello/>
      <Message name="Kwabena Sefa Kobby"/>
      <Profile name="Osei Sefa"/>
    </div>
  );
}

export default App;
