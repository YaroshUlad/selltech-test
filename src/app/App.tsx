import React from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';

import { Form } from '../components/form/Form';

const App = (): React.ReactElement => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Form />} />
      <Route
        path="/notification"
        element={<div style={{ margin: '60px auto' }}>CHECK CONSOLE LOG</div>}
      />
    </Routes>
  </div>
);

export default App;
