import './App.css';
import { Route, Routes, BrowserRouter as Router, Navigate } from "react-router-dom";
import Bienvenida from "./pages/Bienvenida/Bienvenida.jsx"
import Projects from "./pages/Projects/Projects.jsx"
import Menu from './components/menu/menu';
import Resume from './pages/Resume/Resume.jsx';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <>
    <Menu></Menu>
    <Router> 
        <Routes>
                  <Route path="/" element={<Bienvenida></Bienvenida>} />
                  <Route path="/projects" element={<Projects></Projects>} />
                  <Route path="/resume" element={<Resume></Resume>} />
                  <Route path="/contact" element={<Contact></Contact>} />
        </Routes>
    </Router>
    </>

  );
}

export default App;
