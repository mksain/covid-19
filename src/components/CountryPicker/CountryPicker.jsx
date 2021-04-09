import { useEffect, useState } from "react";
import React from "react";
import {NativeSelect,FormControl} from "@material-ui/core";
import "./CountryPicker.css";
import {fetchCountries} from "../../api";

const CountryPicker=({handleCountryChange})=>{

const [fetchedCountries,setfetchedCountries]=useState([]);
const [loading, setLoading] = useState([false]);


useEffect(()=>{
    const fetchAPI=async()=>{
        try {
            setfetchedCountries(await fetchCountries());
            setLoading(false);
        } catch (error) {
            setLoading(true);
        }
       
    }
   

    fetchAPI();
},[setfetchedCountries]);

if (loading) {
    return <h2>Loading...</h2>;
  }

    return(
       
        <FormControl className="formControl">
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="">Global</option>

                {fetchedCountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;