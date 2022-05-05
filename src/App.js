import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style/main.scss';

// import Header from './common/Header';
import Home from './pages/Home';
import Bear from './pages/Bear';
import Polygon from './pages/Polygon';

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/bear" element={<Bear/>} />
        <Route path="/polygon" element={<Polygon/>} />
        
      </Routes>
    </>
  );
}

export default App;
