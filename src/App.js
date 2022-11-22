import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar/NavBar';

import React from 'react';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {action,orginals,trending,romance} from '../src/url';
import ReactPlayer from 'react-player'
function App() {
  return (
    <>
  
    <NavBar/>
    <Banner/>
    <RowPost genre={trending}/>
    <RowPost title='Netflix Orginals'  isSmall genre={action} />
    <RowPost title='Action' isSmall genre={orginals}/>
    <RowPost title='Romance'  isSmall genre={romance} />
    <RowPost title='Action' isSmall genre={orginals}/>
    <RowPost title='Action' isSmall genre={orginals}/>
    <RowPost title='Netflix Orginals'  isSmall genre={action} />
    <RowPost title='Action' isSmall genre={orginals}/>

    </>
  );
}

export default App;
