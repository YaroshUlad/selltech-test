import React from 'react';

import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';

import { Form } from '../components/form/Form';

const App = (): React.ReactElement => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Form />} />
      <Route
        path="/notification"
        element={
          <div style={{ margin: '60px auto' }}>
            <div>CHECK CONSOLE LOG</div>
            <NavLink to="/">back to form</NavLink>
          </div>
        }
      />
    </Routes>
  </div>
);

export default App;
