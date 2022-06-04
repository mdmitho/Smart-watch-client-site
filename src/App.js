import logo from './logo.svg';
import './App.css';
import Home from './components/Pages/Home/Home';
import Header from './components/Pages/Home/Header/Header';
import Footer from './components/Pages/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Pages/Login/Login';
import { Toaster } from 'react-hot-toast';
import SignUp from './components/Pages/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer></Footer>
      <Toaster />
    </div>
  );
}

export default App;
