import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Contact from './routes/Contact';
import Test from './routes/Test';
import { useState } from 'react';
import Submit from './routes/Submit';

function App() {
  const [finalScore, setFinalScore] = useState();
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test" element={<Test  final={setFinalScore}/>} />
          <Route path="/submit" element={<Submit final={finalScore} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
