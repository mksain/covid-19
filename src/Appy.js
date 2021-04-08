import './App.css';
import App from "./App"
import Header from "./components/Header/header.jsx"
import {Route, Switch} from "react-router-dom";
import India from "./components/india/India";
import Error from "./components/Error";
import Footer from "./components/Footer";

function Appy() {

  
  return (
    <div className="container mb-0">
      <Header/>
     <Switch>
   
         <Route exact path="/" component={App}/>
         <Route exact path="/indiadetail" component={India}/>
         <Route component={Error}/>
     </Switch>
     <Footer/>
     

    </div>
  );
}

export default Appy;
