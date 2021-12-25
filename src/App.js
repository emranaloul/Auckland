import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './pages/main'
import Footer from './pages/footer'
import {Navbar} from 'react-bootstrap'
function App() {
  return (
    <div className="App">
     <Header/>
     <Main/>
     <Footer/>
     <Navbar>
      <p className="footer"> <a href="#">Privacy Policy</a>
      &copy; 2021 GrabOne Limited</p>
     </Navbar>
    </div>
  );
}

export default App;
