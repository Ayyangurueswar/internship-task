import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import FlashCards from './components/FlashCards';
import Mathematics from './components/Mathematics';
import Relations from './components/Relations';
import Breadcrumbs from './components/Breadcrumbs';

function App() {
  return (
    <Router>
      <div className="App mx-20">
        <Header />
        <Breadcrumbs />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/flashcard' element={<FlashCards />} />
          <Route path='/flashcard/maths' element={<Mathematics />} />
          <Route path='/flashcard/maths/relations' element={<Relations />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
