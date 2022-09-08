import BackToTop from './components/backToTop/BackToTop.jsx';
import Header from './components/header/Header.jsx';
import Hero from './components/hero/Hero.jsx';
import Preloader from './components/preloader/Preloader.jsx';
import Footer from './components/footer/Footer.jsx';
import Cta from './components/cta/Cta.jsx';
import PeepManager from './components/peepManager/PeepManager.jsx';

function App() {
  return (
    <div className="App">
      <Preloader />
      <Header />
      <Hero />
      <PeepManager />
      <Cta />
      <Footer />
      <BackToTop />
    </div>
  );

}

export default App;
