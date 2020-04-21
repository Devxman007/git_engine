import React from 'react';
import Users from './components/users/Users'
import Navbar from './components/partials/Navbar'
import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <div className="container mt-2">
     <Users/>
     </div>

    </div>
  );
}

export default App;
