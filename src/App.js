import './App.css';
import Cards from "./components/cards/Cards.jsx";
import Charts from "./components/Charts/Charts";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import { useEffect, useState } from 'react';
import coronaImage from "./images/corona_image.png";
import Cause from "./components/precautions/cause";
import Header from "./components/Header/header.jsx"

function App() {

  const [data,setdata]=useState([]);
  const [countrydata,setcountrydata]=useState("");
  const [loading, setLoading] = useState([false]);
  const url='https://covid19.mathdro.id/api';

 useEffect(()=>{
        const fetchdata = async()=>{

          let changeableUrl=url;

          if(countrydata){
            changeableUrl=`${url}/countries/${countrydata}`;
          }

          setLoading(true);
          const res=await fetch(changeableUrl);
          const dataa=await res.json();
          setdata(dataa);
          setLoading(false);
        }
      
        fetchdata();
 },[countrydata]);

const handleCountryChange = async(country)=>{
  
   setcountrydata(country);
   
 }

 console.log(data);
 console.log(countrydata);
  return (
    <div className="container">
     <Header/>
      <img className="image" src={coronaImage} alt="covid-19"/>
     
      <Cards data={data} loading={loading}/>
      <CountryPicker handleCountryChange={handleCountryChange}/>
      <Charts data={data} countrydata={countrydata}/>
      <Cause />
    </div>
  );
}

export default App;
