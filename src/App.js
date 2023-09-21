import './App.css';
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import Projects from './components/Projects/Projects.js';
import Experience from './components/Experience/Experience.js';
import Contact from './components/Contact/Contact.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Home id="home" />
      <Experience id="experience"/>
      <Projects id="projects"/>
      <Contact id="contact"/>
      <Footer />
    </div>
  );
}

export default App;
