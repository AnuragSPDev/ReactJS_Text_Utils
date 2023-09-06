// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import PropTypes from 'prop-types'


function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light' ){
      setMode('dark');
      document.body.style.backgroundColor = '#02456b';
      document.body.style.color = 'white';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <Navbar title='TextUtils' about='About Us' mode={mode} toggleMode={toggleMode} />
      <Textform heading='User Input' mode={mode} />
      {/* <About /> */}
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'Text Utils',
  about: 'About',
}

Textform.propTypes = {
  heading: PropTypes.string.isRequired
}

Textform.defaultProps = {
  heading: 'Please Enter User Input Below'
}

export default App;
