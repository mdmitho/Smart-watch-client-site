import logo from './logo.svg';
import './App.css';
import Home from './components/Pages/Home/Home';
import Header from './components/Pages/Home/Header/Header';
import Footer from './components/Pages/Footer/Footer';

function App() {
  return (
    <div className="App">
  <Header></Header>
  <Home></Home>
     <Footer></Footer>
    </div>
  );
}

export default App;
