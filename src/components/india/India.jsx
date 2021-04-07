import React, {useEffect, useState } from "react";

const India=()=>{

  const [data,setdata1]= useState([]);
  
    useEffect(()=>{
          const fetchdata=async()=>{
              const res=await fetch();
              const data=res.json();

          }
    },[]);

    return(
        <div><h1>HI Mnaihs</h1></div>
    )
}

export default India;