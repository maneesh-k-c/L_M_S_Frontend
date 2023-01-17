import React, { useState } from 'react'
import './regpage.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBInput, MDBCheckbox, MDBBtn, MDBIcon, MDBRow, MDBCol, MDBInputGroup, MDBTextArea } from 'mdb-react-ui-kit';
import StudentReg from './StudentReg';
import ParentReg from './ParentReg';
import TeacherReg from './TeacherReg';

export default function LoginPage() {
    const [regSwich, setRegSwitch] = useState({
        role: "student",
    })
    const [TeacherNext,setTeacherNext]=useState(false)
    const TeacherNextFn=()=>{
        setTeacherNext(!TeacherNext)
    }
   
    console.log(regSwich);

    const form = () => {
        switch (regSwich.role) {
            case 'student':
                return <StudentReg />;
            case 'parent':
                return <ParentReg />;
            case 'teacher':
                return <TeacherReg TeacherNextFn={TeacherNextFn} TeacherNext={TeacherNext}/>;


        }
    }


    return (
        <>


            <div className="bgContent">
                <div className="header">
                    <div className="bodyMain"  >
                        <div className="bodyForm"  >
                            <div className="textbx">
                                <p id='RegHead'>New Registration</p>
                                {
                                    (regSwich.role != "teacher") ?
                                        <>
                                            <p id='RegHead2'>BetaSymbol embodies the concept of new-age learning
                                                by providing education through digital platform</p>
                                        </> : <>
                                            <p id='RegHeadTeacher'>We congratulate you on taking the effort to apply for this online tutors recruitment form. Thank you for contacting embodies the concept of new-age learning which grants more autonomy to aspiring learners, more contemporary approaches to educators and a comprehensive growth to the education sector. This is the platform to give you an opportunity to register as teachers for online tutoring on payment basis as per the company rules and regulations</p>
                                        </>
                                }
                            </div>

                            <img src="/undraw_Beach_day_cser(1).svg" alt="" className="imgDiv" />

                        </div>
                        <div className="bodyAdd"  >
                            {TeacherNext?"":<>
                            <div className="btnsection">
                                <div id='iConText'>Join Beta Symbol as</div>
                                <div id="smbtn">
                                    <button id={regSwich.role == "student" ? 'activeRegChange' : 'RegChange'} onClick={() => { setRegSwitch({ ...regSwich, role: "student" }) }}>Student</button>
                                    <button id={regSwich.role == "parent" ? 'activeRegChange' : 'RegChange'} onClick={() => { setRegSwitch({ ...regSwich, role: "parent" })}}>Parent</button>
                                    <button id={regSwich.role == "teacher" ? 'activeRegChange' : 'RegChange'} onClick={() => { setRegSwitch({ ...regSwich, role: "teacher" }) }}>Teacher</button>
                                </div>
                            </div>
                               </>} 

                            {form()}
                            
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
