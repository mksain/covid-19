import './App.css';
import App from "./App"
import Header from "./components/Header/header.jsx"
import { BrowserRouter as Router, Route } from "react-router-dom";
import India from "./components/india/India";

import Footer from "./components/Footer";

function Appy() {

  
  return (
    <div className="container mb-0">
      
     <Router>
     <Header/>
   
         <Route exact path="/" component={App}/>
         <Route exact path="/indiadetail" component={India}/>
         <Route exact path="/covid-19" component={App}/>
         
     </Router>
     <Footer/>
    </div>
  );
}

export default Appy;
