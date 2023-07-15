import { Clients } from "./components/Clients";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Works from "./components/works";
import Reviews from "./components/Reviews";
import Services from "./components/services";
import Footer from "./components/Footer";

function App() {

  return (
     <div>
        <Header/>
        <Hero/>
        <Clients />
        <Works />
        <Reviews />
        <Services />
        <Footer />
     </div>
  );
   
};

export default App;
