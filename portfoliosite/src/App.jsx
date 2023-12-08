
import React from 'react';
import Main from './components/Main';
import AboutMe from './components/AboutMe';
import Projects from './components/Header'; // Import the Projects component

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className='body'>
      <Router>
        <Routes>
        <Route
              exact
              path="/"
              element={<Main />}
           />
         <Route
           path="/AboutMe"
          element={<AboutMe />}
          />

        </Routes>
      </Router>
    </div>
  );
}

export default App;