import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary' style={{backgroundImage:'linear-gradient(#121569, grey)'}}>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center' style={{backgroundImage: 'linear-gradient(to right bottom, rgb(204 131 131), #b0a3ff)'}}>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        {/*<Tech />
         <Works />
        <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
