import React from 'react'
import { MDBInput, MDBCheckbox, MDBBtn, MDBIcon, MDBRow, MDBCol, MDBInputGroup, MDBTextArea } from 'mdb-react-ui-kit';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function TeacherReg({ TeacherNext, TeacherNextFn }) {


    const[data,changedata]=useState({})
    const[file,changefile]=useState([])
    const [isSubmit,setisSubmit]=useState(false)
    const [formerror,setformerror]=useState({})
    const [temp,settemp]=useState(false)
    const [regSwich, setRegSwitch] = useState(true)


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
          if(!value?.whatsappNumber){
           error.whatsappNumber="whatsappNumber is required"
          }
          else if(!phoneformat.test(value?.whatsappNumber)){
            error.whatsappNumber="*please eneter valid whatsappNumber  format"
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
          if(!value?.DateOfBirth){
           error.DateOfBirth="DateOfBirth is required"
          }
          if(!value?.gender){
           error.gender="gender is required"
          }
          if(!value?.address){
           error.address="address is required"
          }
          if(!value?.cv){
           error.cv="cv is required"
          }
          if(!value?.experienceDescription){
           error.experienceDescription="experienceDescription is required"
          }
          if(!value?.websiteDescription){
           error.academicDescription="academicDescription is required"
          }
          if(!value?.websiteDescription){
           error.websiteDescription="websiteDescription is required"
          }
          if(!value?.password){
           error.password="password is required"
          }
          else if(!passwordformat.test(value?.password)){
           error.password="password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter"
          }
          if(!value?.tutoringTimeDescription){
            error.tutoringTimeDescription="tutoringTimeDescription is required"
           }
           if(!value?.subjectExpertiseDescription){
            error.subjectExpertiseDescription="subjectExpertiseDescription is required"
           }
       
          return error
       

        }



        useEffect(()=>{
    

            console.log(Object.keys(formerror).length, isSubmit);
        
           if(regSwich==true){
        
            if(Object.keys(formerror).length==0 && isSubmit){
                       
                console.log("profiledataaaa===>", data)
              

                     
    if(file){
    
        const data1=new FormData()
        const filename=file.name
        data1.append("cv",filename)
        data1.append("file",file)
        axios.post("http://localhost:3001/teacher/register",data).then((details)=>{
        console.log("append",details)
        })  }
                   

                
                // axios.post(`http://localhost:3001/studentRegister/student`,data).then((resp)=>{
                //     console.log("resp", resp)
                //     if(resp.data.success==true){
                //         setformerror({})
                //         setisSubmit(false)
                //         changedata({})
                //         toast(resp.data.message, {
                //             position: "top-center",
                //             autoClose: 5000,
                //             hideProgressBar: false,
                //             closeOnClick: true,
                //             pauseOnHover: true,
                //             draggable: true,
                //             progress: undefined,
                //             theme: "light",
                //           });
        
                //     }
                // })
                // .catch(err => {
                //     setformerror({})
                //     setisSubmit(false)
                //     changedata({})
                //     console.log(err.response.data.message)
                //     toast(err.response.data.message, {
                //       position: "top-center",
                //       autoClose: 5000,
                //       hideProgressBar: false,
                //       closeOnClick: true,
                //       pauseOnHover: true,
                //       draggable: true,
                //       progress: undefined,
                //       theme: "light",
                //     });
                //   })
              
        
            }
           }},[temp])








    const onchange=(event)=>{
        const name=event.target.name
        const value=event.target.value
        changedata({...data,[name]:value})
      }


      const teachersubmit=(e)=>{
        console.log("data",data);   
          settemp(!temp)
          e.preventDefault()
          console.log("issubmit",isSubmit)
          setformerror(validate(data))
          setisSubmit(true)
}



//    console.log("dataa",data)
    return (
        <>
            {/* Teacher Registration */}
            {!TeacherNext ?
            <form >
                <div className="formcontent3">
                    <MDBRow className='mb-4'>
                        <MDBCol>
                            <MDBInput label='Name' id='formControlSm' type='text' name='name' size='sm' onChange={onchange}   value={data.name || ""}/>
                        </MDBCol>
                        <MDBCol>
                            <MDBInput label='Mobile Number' id='formControlSm' type='text' name='mobileNumber' size='sm' onChange={onchange}  value={data.mobileNumber || ""} />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className='mb-4'>
                        <MDBCol>
                            <MDBInput label='WhatsApp No' id='formControlSm' type='text' name='whatsappNumber' size='sm'  onChange={onchange}   value={data.whatsappNumber || ""}/>
                        </MDBCol>
                        <MDBCol>
                            <MDBInput label='Email' id='formControlSm' type='email'name='email' size='sm' onChange={onchange}  value={data.email || ""} />
                        </MDBCol>

                    </MDBRow>
                    <MDBRow className='mb-4'>
                        <MDBCol>
                            <MDBInput label='Date Of Birth' id='formControlSm' type='date' name='DateOfBirth'  size='sm' onChange={onchange}   value={data.DateOfBirth || ""}/>
                        </MDBCol>
                        <MDBCol>
                            <select id="selector" name='gender' onChange={onchange}  value={data.gender || ""}>
                                <option value="volvo">Gender</option>
                                <option value="saab">Male</option>
                                <option value="mercedes">Female</option>
                                <option value="audi">Other</option>
                            </select>

                        </MDBCol>

                    </MDBRow>

                    <MDBInput label='Password' id='formControlSm' type='password' className='mb-3' value={data.password || ""} size='sm' name='password' onChange={onchange} />

                    <MDBInput label='Communication Address' id='TextArea' rows={2} size='sm' name='address' onChange={onchange}  value={data.address || ""}/>
                    <p id='descText'>What topics are you passionate about teaching? Which ages of learners do you want to work with? What experience or expertise do you have in these subject areas? It’s fine to share high-level topics here. *</p>
                    <MDBInput label='Description' id='TextArea' rows={2} size='sm' name='passionateTeachingDescription' onChange={onchange}  value={data.passionateTeachingDescription || ""} />
                    <div>
                        <input type="file" id="resume" class="sr-only" name='cv' onChange={(e)=>{changefile(e.target.files[0]); changedata({...data,cv:e.target.files[0].name})}}
                            aria-label="Resume"   />
                        <label for="resume" class="btn" id='resbtnStyle'
                            aria-hidden="true"><MDBIcon fas icon="cloud-upload-alt" /><nbsp></nbsp> Upload Your CV</label>
                    </div>
                    <button id='RegBtn2' onClick={TeacherNextFn}>Next</button>
                </div>
                </form > : <>
                    {/* Teacher Registration Next page */}
                    <form >
                    <div className="formcontent3next">
                        <p id='descText'>
                            Please list all of the experience you have teaching or working with youth, whether as a professional, a volunteer, or in your personal life. Our teachers come from a variety of professional backgrounds - share anything you think we should know! Be specific with how long you’ve worked with youth, the subjects you’ve taught, and the ages of learners you’ve worked with. * </p >
                        <MDBInput label='Communication Address' id='TextArea2' rows={2} size='sm' name='experienceDescription'  onChange={onchange}  value={data.experienceDescription || ""}/>
                        <p id='descText'>
                            Please list any academic degrees, teaching credentials (current or expired), professional training, or other relevant professional certifications you hold. We do not require degrees to teach on Educom Online tutoring platform- include anything that will help us learn more about your background. Please include the year, subject, and state or institution. *
                        </p>
                        <MDBInput label='Communication Address' id='TextArea2' rows={2} size='sm' name='academicDescription' onChange={onchange}   value={data.academicDescription || ""}/>
                        <p id='descText'>
                            (Optional) Online profiles: do you have a professional website, Facebook page, or LinkedIn profile that helps describe your experience and expertise? Share it with us here
                        </p>
                        <MDBInput label='Communication Address' id='TextArea2' rows={2} size='sm'  name='websiteDescription' onChange={onchange}  value={data.websiteDescription || ""}/>
                        <p id='descText'>
                            Which is the best time that you would choose for Online tutoring? (Please mention AM or PM along with the time in Indian Standard Time)
                        </p>
                        <MDBInput label='Communication Address' id='TextArea2' rows={2} size='sm'  name='tutoringTimeDescription' onChange={onchange}  value={data.tutoringTimeDescription || ""}/>
                        <p id='descText'>
                            You can provide any link that shows us your expertise on the subject you choose (It can be a Drive Link, Link to a Youtube video of your's or an Article you have published)
                        </p>
                        <MDBInput label='Communication Address' id='TextArea2' rows={2} size='sm' name='subjectExpertiseDescription'  onChange={onchange}  value={data.subjectExpertiseDescription || ""}/>
                        <div id="smbtn2">
                            <button id='RegChange'  onClick={TeacherNextFn}>Back</button>
                            <button id='activeRegChange' onClick={teachersubmit}>Submit</button>

                        </div>

                    </div>
                    </form>
                </>
            }
        </>
    )
}
