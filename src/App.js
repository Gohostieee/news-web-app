import logo from './logo.svg';
import waves from './waves-1.svg';
import wavesBody from './waves-body-2.svg'
import './App.css';

function App() {
  return (
      <div className="App">
          <img src={waves} className='flip wave' alt="logo" />

          <header className="App-header">
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <body>
        <img src={wavesBody} className='background-image' alt="logo" />

        <div className="circle" id="lowerleft">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        </body>
      </div>
  );
}

export default App;
