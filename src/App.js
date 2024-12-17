
import { BrowserRouter as Router, Routes,  Route} from 'react-router-dom';
import NavbarSc from "./commponents/NavbarSc";
import './App.css';
import Landing from './Home/sections/Landing';
import FooterSc from './commponents/FooterSc';

function App() {
  return (
  <Router> 
      <NavbarSc/>
     
      <Routes>
        <Route path='/' element={<Landing/>} />
      </Routes>

      <FooterSc/>

   </Router>
 
  );
}

export default App;
