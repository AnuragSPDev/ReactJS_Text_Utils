// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import PropTypes from 'prop-types'
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    // To make alert disapper itself after 3 seconds
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const toggleMode = () => {
    console.log(`Current mode is: ${mode}`);
    // if (mode === 'light') {
    if (mode === 'light' || mode === 'aqua' || mode === 'lime') {
      setMode('blue');
      document.body.style.backgroundColor = '#02456b';
      document.body.style.color = 'white';
      showAlert('Blue Mode Enabled', 'success')
    } else if (mode === 'blue' || mode === 'aqua' || mode === 'lime') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light Mode Enabled', 'success')
    }
  }


  const toggleAquaTheme = () => {
    // if (mode === 'light') {
    if (mode === 'light' || mode === 'blue' || mode === 'lime') {
      setMode('aqua');
      document.body.style.backgroundColor = '#42d7ca';
      document.body.style.color = '#c13b3b';
      showAlert('Aqua Mode Enabled', 'success')
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light Mode Enabled', 'success')
    }
  }

  const toggleLimeTheme = () => {
    // if (mode === 'light') {
    if (mode === 'light' || mode === 'aqua' || mode === 'blue') {
      setMode('lime');
      document.body.style.backgroundColor = '#32a850';
      document.body.style.color = '#c13b3b';
      showAlert('Lime Mode Enabled', 'success')
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light Mode Enabled', 'success')
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
    // <>
    //   <Router>
    //     <Navbar title='TextUtils' about='About Us' mode={mode} toggleMode={toggleMode} aquaMode={toggleAquaTheme}
    //       limeMode={toggleLimeTheme} />
    //     <Alert alert={alert} />  <Routes>
    //       <Route path="/about" element={<About />} />
    //       <Route path="/" element={<Textform heading='User Input' mode={mode} showAlert={showAlert} />} />
    //     </Routes>
    //   </Router>
    // </>
    <>
      <Navbar title='TextUtils' about='About Us' mode={mode} toggleMode={toggleMode} aquaMode={toggleAquaTheme}
        limeMode={toggleLimeTheme} />
      <Alert alert={alert} />
      {/* <About /> */}
      <Textform heading='User Input' mode={mode} showAlert={showAlert} />
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
