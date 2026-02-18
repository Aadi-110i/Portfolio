import { BrowserRouter } from "react-router-dom";
import { About, Contact, Hero, Navbar, Projects, Skills } from "./components";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <CustomCursor />
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>
          <About />
          <Skills />
          <Projects />
          <div className='relative z-0'>
            <Contact />
          </div>
        </div>
      </SmoothScroll>
    </BrowserRouter>
  );
}

export default App;
