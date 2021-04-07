import React from "react";
import washingHandImg from "../../images/wash_hand.png";
import coverMouhthImg from "../../images/cover-mouth.png";
import avoidContactImg from "../../images/avoid-contact.png";
import stayHomeImg from "../../images/stayHome.png";
import stayInformedImg from "../../images/stayInformed.png";
import medicalSeekImg from "../../images/medicalSeek.png";
import "./cause.css";

const cause=()=>{
   return(
       <div className="container">
           <div className="section_header text-center">
             <h2>6 Steps Prevention Against Coronavirus</h2>
           </div>
        <div className="row mt-5">
           <div className="col-lg-6 col-md-6 col-12">   
              <div className="row">
                 <div className="col-lg-4 col-md-4 col-12"> 
                    <figure>
                        <img src={washingHandImg} className="" width="150px" height="100px"alt="covidimage"/>
                    </figure>
                 </div>
                 <div className="col-lg-8 col-md-8 col-12 middle">
                   <p>Wash your hands regularly for 20 seconds with soap and water
                       or alcohal-based hand rub
                   </p>
                 </div>
              </div>
           </div>

           <div className="col-lg-6 col-md-6 col-12">   
              <div className="row">
                 <div className="col-lg-4 col-md-4 col-12"> 
                    <figure>
                        <img src={coverMouhthImg} className="" width={150} height={100} alt="covidimage"/>
                    </figure>
                 </div>
                 <div className="col-lg-8 col-md-8 col-12 middle">
                   <p>Cover your nose and mouth with a disposable tissue or
                       flexed elbow when you cough or sneeze
                   </p>
                 </div>
              </div>
           </div>

           <div className="col-lg-6 col-md-6 col-12">   
              <div className="row">
                 <div className="col-lg-4 col-md-4 col-12"> 
                    <figure>
                        <img src={avoidContactImg} className="" width={150} height={100} alt="covidimage"/>
                    </figure>
                 </div>
                 <div className="col-lg-8 col-md-8 col-12 middle">
                   <p>Avoid close contact (1 meter or 3 feet) with people who are unwell
                   </p>
                 </div>
              </div>
           </div>

           <div className="col-lg-6 col-md-6 col-12">   
              <div className="row">
                 <div className="col-lg-4 col-md-4 col-12"> 
                    <figure>
                        <img src={stayHomeImg} className="" width={150} height={100} alt="covidimage"/>
                    </figure>
                 </div>
                 <div className="col-lg-8 col-md-8 col-12 middle">
                   <p>Stay home and safe-isolate from others in the household if you feel
                       unwell
                   </p>
                 </div>
              </div>
           </div>

           <div className="col-lg-6 col-md-6 col-12">   
              <div className="row">
                 <div className="col-lg-4 col-md-4 col-12"> 
                    <figure>
                        <img src={stayInformedImg} className="" width={150} height={100} alt="covidimage"/>
                    </figure>
                 </div>
                 <div className="col-lg-8 col-md-8 col-12 middle">
                   <p>Stay informed by watching news & follow the recommended practices
                   </p>
                 </div>
              </div>
           </div>

           <div className="col-lg-6 col-md-6 col-12">   
              <div className="row">
                 <div className="col-lg-4 col-md-4 col-12"> 
                    <figure>
                        <img src={medicalSeekImg} className="" width={150} height={100} alt="covidimage"/>
                    </figure>
                 </div>
                 <div className="col-lg-8 col-md-8 col-12 middle">
                   <p>if you have fever, cough and difficulty breathing seek medical care early
                   </p>
                 </div>
              </div>
           </div>
        </div>
       
       </div>
   )
}

export default cause;