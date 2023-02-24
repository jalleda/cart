import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './componets/Details';
import Main from './componets/Main';
import Nav from './componets/Nav';


function App() {
  return (
    <div >
      <Router>
        <Nav></Nav>
        <Routes>
          <Route path='/home' element={<Main></Main>}></Route>
          <Route path="des/:id" element={<Details/>}></Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
