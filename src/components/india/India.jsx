import React, {useEffect, useState } from "react";

const India=()=>{

  const [datas,setdata1]= useState([]);
  
  const url='https://api.covid19india.org/data.json';

    useEffect(()=>{
          const fetchdata=async()=>{
           
              const res=await fetch(url);
              const dataa=await res.json();
              setdata1(dataa.statewise);
             

          }
          fetchdata();
    },[]);

    console.log(datas);

    return(
        <div className="container-fluid">

          <h2 className="mt-3 mb-5 text-danger">COVID-19 LIVE UPDATES OF THE INDIA</h2>
            
    <table className="table ">
  <thead >
    <tr>
      <th scope="col">LastUpdatetime</th>
      <th scope="col">State</th>
      <th scope="col">Confirmed</th>
      <th scope="col">Active</th>
      <th scope="col">Recovered</th>
      <th scope="col">Deaths</th>
    </tr>
  </thead>
  
  <tbody>
      {datas.slice(1,datas.length).map(items=>(
        
        <tr key={items.id}>
       <td>{items.lastupdatedtime}</td>
       <th scope="row">{items.state}</th>
       <td className="">{items.confirmed}</td>
       <td className="text-warning">{items.active}</td>
       <td className="text-success">{items.recovered}</td>
       <td className="text-danger">{items.deaths}</td>
      </tr>
      ))}
    </tbody>

</table>
        </div>
    )
}

export default India;