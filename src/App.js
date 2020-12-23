import logo from './assets/img/logo.svg';
import './assets/css/App.css';
import Clock from './views/Clock';
import Main from './views/Main';
import Footer from "./views/Footer"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
        {/*<Clock date={ new Date() } />*/}
        <Clock />
      </header>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
