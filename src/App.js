import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from './components/main';
import Three from './components/three/three'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/galeria" element={<Three />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
