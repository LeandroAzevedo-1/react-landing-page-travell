import './App.css';
// Import images
import Travel_01 from './assets/travel-01.jpg'
import Travel_02 from './assets/travel-02.jpg'
import Travel_03 from './assets/travel-03.jpg'
import Footer from './components/Footer';
// Component create 
import Home from './components/Home'
import Navbar from './components/Navbar';
import Slider from './components/Slider';

// Navbar links
const navbarLinks = [
  {url: "#", title: "Home"},
  {url: "#", title: "Trips"},
  {url: "#", title: "Rewards"}
]
function App() {
  return (
    <div>
      <Navbar navbarLinks={navbarLinks}/>
      <Home imagesSrc={Travel_01}/> 
      <Slider 
      imageSrc={Travel_02} 
      title={"Be an explore!"}
      subtitle={"Our platform offers a wide variety of unique travel locations!"}
      />
      <Slider  
      title={"Memories for a lifetime!"}
      subtitle={"Vour dream vocation is only a fow clicks away."}
      imageSrc={Travel_03}
      flipped={true} //Validation condition else do component
      />
      <Footer imagSrc={Travel_01}/>
    </div>
  ) 
}

export default App;
