import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';
import Project from './components/pages/Project';
import Projects from './components/pages/Projects';

function App() {
  return (

    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route element={<Home />} exact path='/' />
          <Route element={<Projects />} path='/projects' />
          <Route element={<NewProject />} path='/newproject' />
          <Route element={<Company />} path='/company' />
          <Route element={<Contact />} path='/contact' />
          <Route element={<Project />} path='/project/:id' />
        </Routes>
      </Container>
      <Footer />
    </Router>

  );
}

export default App;
