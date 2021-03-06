import React, { useEffect, useState } from "react";
import {Line,Bar} from "react-chartjs-2";
import "./Charts.css";
import {fetchDailyData} from "../../api";
const Charts=({data:{confirmed,deaths,recovered},countrydata})=>{

    const [dailydata,setdailydata]=useState([]);

    useEffect(()=>{
        const fetchAPI=async()=>{
            setdailydata(await fetchDailyData());
        }
       
        fetchAPI();
    },[]);
    


    const lineChart=(
       dailydata.length
       ?(
        <Line
        data={{
            labels:dailydata.map(({date})=> date),
            datasets:[{
                data:dailydata.map(({confirmed})=>confirmed),
                label:'Infected',
                borderColor:'#3333ff',
                fill:true,
            },{
                
                    data:dailydata.map(({deaths})=>deaths),
                    label:'Deaths',
                    borderColor:'red',
                    backgroundColor:'rgba(255,0,0,0.5)',
                    fill:true,
            }],
        }}
        />):null
    );

    console.log(confirmed,recovered,deaths);
    const barChart=(
        confirmed
        ?(
            <Bar
             data={{
               labels:['Infected','Recovered','Deaths'],
               datasets:[{
                   label:'People',
                   backgroundColor:[
                       'rgba(0,0,255,0.5)',
                       'rgba(0,255,0,0.5)',
                       'rgba(255,0,0,0.5)',
                   ],
                   data:[confirmed.value,recovered.value,deaths.value]
               }]
             }}
             options={{
                 legend:{display:false},
                 title:{display:true,text:`Current state in ${countrydata}`}
             }}
            />
        ):null
    )

    return(
        <div className="container">
            {countrydata ? barChart:lineChart}
        </div>
    )
}

export default Charts;