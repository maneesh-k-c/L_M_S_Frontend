import React from 'react'
import { MDBInput, MDBCheckbox, MDBBtn, MDBIcon, MDBRow, MDBCol, MDBInputGroup, MDBTextArea } from 'mdb-react-ui-kit';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



export default function StudentReg() {
    
    const [data,setdata]=useState({})
    const [isSubmit,setisSubmit]=useState(false)
    const [formerror,setformerror]=useState({})
    const [temp,settemp]=useState(false)
    const [regSwich, setRegSwitch] = useState(true)
   const navigate=useNavigate()
    const validate =(value)=>{
        if(regSwich==true)
        
            console.log("value",value.name)
            const error={}
            var phoneformat = /^\d{10}$/;
            var emailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            var passwordformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
        
          if(!value?.name){
           error.name="name is required"
          }
          if(!value?.parentName){
           error.parentName="parentName is required"
          }
          if(!value?.email){
           error.email="email is required"
          }
          else if(!emailformat.test(value?.email)){
           error.email="*please eneter valid email format"
          }
          if(!value?.mobileNumber){
           error.mobileNumber="mobileNumber is required"
          }
          else if(!phoneformat.test(value?.mobileNumber)){
           error.mobileNumber="*please eneter valid mobileNumber  format"
          }
          if(!value?.dob){
           error.dob="dob is required"
          }
          if(!value?.nationality){
           error.nationality="nationality is required"
          }
          if(!value?.countryOfResidence){
           error.countryOfResidence="countryOfResidence is required"
          }
          if(!value?.curriculam){
           error.curriculam="curriculam is required"
          }
          if(!value?.grade){
           error.grade="grade is required"
          }
          if(!value?.courses){
           error.courses="courses is required"
          }
          if(!value?.timeSlot){
           error.timeSlot="timeSlot is required"
          }
          if(!value?.password){
           error.password="password is required"
          }
          else if(!passwordformat.test(value?.password)){
           error.password="password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter"
          }
       
          return error
       

        }


        useEffect(()=>{
    

            console.log(Object.keys(formerror).length, isSubmit);
        
           if(regSwich==true){
        
            if(Object.keys(formerror).length==0 && isSubmit){
                       
                console.log("profiledataaaa===>", data)
              
                
                axios.post(`http://localhost:3001/studentRegister/student`,data).then((resp)=>{
                    console.log("resp", resp)
                    if(resp.data.success==true){
                        setformerror({})
                        setisSubmit(false)
                        setdata({})
                        navigate('/successform')
        
                    }
                })
                .catch(err => {
                    setformerror({})
                    setisSubmit(false)
                    setdata({})
                    console.log(err.response.data.message)
                    toast(err.response.data.message, {
                      position: "top-center",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                    });
                  })
              
        
            }
           }},[temp])

       
           const onchange =(event)=>{

            const name=event.target.name
            const value=event.target.value
           setdata({...data,[name]:value})
         
               }
    
    
               const parentonchange =(event)=>{
    
                const name=event.target.name
                const value=event.target.value
               setdata({...data,[name]:value})
             
                   }           
    
            const studentregister=(e)=>{
                     console.log("data",data);   
                settemp(!temp)
                e.preventDefault()
                console.log("issubmit",isSubmit)
                setformerror(validate(data))
                setisSubmit(true)
       }
    




    return (
        <div>
            <div className="formcontent2">
                <form onSubmit={studentregister}>
                <MDBRow className='mb-4'>
                    <MDBCol>
                 
                    <MDBInput label='Name' id='formControlSm' type='text' size='sm' name='name' value={data.name || ""} onChange={onchange}/>
                    <span className='span'>{formerror?.name}</span>
                    </MDBCol>
                    <MDBCol>
                    <MDBInput label='Parent Name' id='formControlSm' type='text' size='sm' name='parentName' value={data.parentName || ""} onChange={onchange} />
                    <span className='span'>{formerror?.parentName}</span>
                    </MDBCol>
                </MDBRow>
                <MDBRow className='mb-4'>
                    <MDBCol>
                    <MDBInput label='Mobile Number' id='formControlSm' type='text' size='sm' name='mobileNumber' value={data.mobileNumber || ""} onChange={onchange} />
                    <span className='span'>{formerror?.mobileNumber}</span>
                    </MDBCol>
                    <MDBCol>
                    <MDBInput label='Date Of Birth' id='formControlSm' type='date' size='sm' name='dob' value={data.dob || ""} onChange={onchange}/>
                    </MDBCol>

                </MDBRow>
                <MDBRow className='mb-4'>
                    <MDBCol>
                    <select id="selector" name='nationality' value={data.nationality || ""} onChange={onchange}>
                            <option value="volvo">Nationality</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </MDBCol>
                    <MDBCol>
                    <select id="selector" name='countryOfResidence' value={data.countryOfResidence || ""} onChange={onchange}>
                            <option value="volvo" id='SelectorMainText'>Country Of Residence</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </MDBCol>
                </MDBRow>
                <MDBRow className='mb-4'>
                    <MDBCol>
                    <select id="selector" name='curriculam' value={data.curriculam || ""} onChange={onchange}>
                            <option value="volvo">Carriculam</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </MDBCol>
                    <MDBCol>
                    <select id="selector" name='grade' value={data.grade || ""} onChange={onchange}>
                            <option value="volvo">Grade/Level</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </MDBCol>
                </MDBRow>
                <MDBRow className='mb-4'>
                    <MDBCol>
                    <select id="selector" name='courses' value={data.courses || ""} onChange={onchange}>
                            <option value="volvo">Courses</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </MDBCol>
                    <MDBCol>
                    <select id="selector" name='timeSlot' value={data.timeSlot || ""} onChange={onchange}>
                            <option value="volvo">Time Slot</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </MDBCol>
                </MDBRow>
                <MDBRow className='mb-4'>
                    <MDBCol>
                    <MDBInput label='Email' id='formControlSm' type='email' size='sm' value={data.email || ""}  name='email' onChange={onchange}/>
                    </MDBCol>
                    <MDBCol>
                    <MDBInput label='Password' id='formControlSm' type='password' value={data.password || ""} size='sm' name='password' onChange={onchange} />
                    </MDBCol>
                </MDBRow>
                <button id='RegBtn2' >Register Now</button>
                <div id='RegFootText'>
                    <p>
                        Already an Account,Login Your Account <a href='#!'>Click here</a>
                    </p>
                </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}
