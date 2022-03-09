// import logo from './logo.svg';
import './App.css';
import Header from './compenent/header';
import Main from './compenent/main';
import Footer from './compenent/footer';
import Login from './compenent/login';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
          <Header/>
          <Routes>
            <Route exact path='/' element={<Main/>}></Route>
             <Route path='/login' element={<Login/>} ></Route>
          </Routes>
          <Footer/>
    </div>
    </BrowserRouter>

  );
}

export default App;
