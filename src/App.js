import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import FirstScr from './components/FirstScr';
import Analyze from './components/Analyze';
import Analyzecompleted from './components/Analyze_complete';
import styled from 'styled-components';
import styles from './BackScreen.module.css';
import {BrowserRouter, Switch, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <div><Sidebar /></div>
        <div className={styles.BackScreen}>
          <BrowserRouter>
                <Routes>
                  <Route path='/' element={<FirstScr />} />
                  <Route path='/analyze' element={<Analyze />} />
                  <Route path='/analyze_comp' element={<Analyzecompleted />} />
               </Routes>
          
          </BrowserRouter>
          
         
        </div>
      
    </div>
  );
}

export default App;
