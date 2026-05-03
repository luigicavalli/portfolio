import { Hero }       from './components/sections/Hero/Hero';
import { About }      from './components/sections/About/About';
import { Navbar }     from './components/layout/Navbar/Navbar';
import { Footer }     from './components/layout/Footer/Footer';
import { Contact }    from './components/sections/Contact/Contact';
import { Projects }   from './components/sections/Projects/Projects';
import { Experience } from './components/sections/Experience/Experience';


function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
}

export default App;
