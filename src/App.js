import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import FirstScr from './components/FirstScr';
import styled from 'styled-components';
import styles from './BackScreen.module.css';

function App() {
  return (
    <div className="App">
     <div><Sidebar /></div>
        <div className={styles.BackScreen}>
          <FirstScr></FirstScr>
        </div>
      
    </div>
  );
}

export default App;
