import NavBar from './components/NavBar';
import Pizza from './pages/Pizza';
// import Home from './components/Home';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Cart from './pages/Cart';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {

  return (
    <>
      <NavBar />

      <Pizza />
      {/* <Home /> */}


      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Cart /> */}
      <Footer />
    </>
  )
}

export default App;