import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import navbar from "./commponents/navbar"
import './App.css';
import hero from "./Home/hero";

function App() {
  return (
  <Router> 
      <navbar/>
      <Routes>
        <Route path='/' element={<hero/>} />
      </Routes>
   </Router>
 
  );
}

export default App;
