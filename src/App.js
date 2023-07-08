import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Contact from './routes/Contact';
import Test from './routes/Test';
import { useState } from 'react';
import Submit from './routes/Submit';
import Error_404 from './routes/Error_404';
import Error_500 from './routes/Error_500';

function App() {
  const [finalScore, setFinalScore] = useState();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test" element={<Test  final={setFinalScore}/>} />
          <Route path="/submit" element={<Submit final={finalScore} />} />
          <Route path="/error_500" element={<Error_500 />} />
          <Route path="*" element={<Error_404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
