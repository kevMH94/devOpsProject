import logo from './logo.svg';
import './App.css';
import County from './components/County'
import data from './json/Data.json';
import styles from './components/styles.css'

function App() {
  return (
    <div className="appDiv">
      <header> Ireland Awaits ...</header>
      <div >
      <County/>
      </div>
    </div>
  );
}

export default App;
