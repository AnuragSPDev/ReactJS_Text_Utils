// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import PropTypes from 'prop-types'
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    // TO make alert disapper itself after 3 seconds
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'light' ){
      setMode('dark');
      document.body.style.backgroundColor = '#02456b';
      document.body.style.color = 'white';
      showAlert('Dark Mode Enabled', 'success')
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
    <>
      <Navbar title='TextUtils' about='About Us' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <Textform heading='User Input' mode={mode} showAlert={showAlert} />
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
