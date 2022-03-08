import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar/NavBar';
import  Caarousel from './component/NavBar/Carousel';
import Comt from './component/NavBar/commentaire';
import Footer from './component/footer';






function App() {
  return (
    <div className="App">
      <header >
        <NavBar/>
        
        <Caarousel/>

        <Comt/>
        
        <Footer/>
      </header>
    
    </div>
  );
}

export default App;
