import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css'
import { MDBInput, MDBCheckbox, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FcGoogle, FcFacebook } from "react-icons/fc";

export default function Login() {
    const [logindata, setlogindata] = useState({})
    const [formerrors, setformerrors] = useState({})
    const [IsSubmit, setIsSubmit] = useState(false)
    const [temp, settemp] = useState(false)

    const collectlogindata = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setlogindata({
            ...logindata,
            [name]: value
        })
        console.log("logindata===>", logindata);
    }

    const loginvalidate = (value) => {
        const errors = {};

        var emailformat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

        if (!value.email) {
            errors.email = "*plese enter the username"

        }
        else if ((!emailformat.test(value.email))) {
            errors.email = "*plese enter a valid email"

        }

        if (!value.password) {
            errors.password = "*plese enter the password to login"

        }

        return errors;

    }
    useEffect(() => {
        if (Object.keys(formerrors).length === 0 && IsSubmit) {
            axios.post('http://localhost:3001/login/loginrouter', logindata)

                .then(resp => {
                    console.log(resp)
                    toast(resp.data.message, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    if (resp.data.success == true) {
                        setformerrors({})
                        setIsSubmit(false)
                        setlogindata({})
                    }
                })
                .catch(err => {
                    setformerrors({})
                    setIsSubmit(false)

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


    }, [temp])
    const profilelogin = (e) => {
        e.preventDefault()
        console.log("gfdfdddddddddd");
        settemp(!temp)
        setformerrors(loginvalidate(logindata))
        setIsSubmit(true)
    }
    return (
        <div>
            <>
                <div className="bgContent">
                    <div className="header">
                        <div className="bodyMain"  >
                            <div className="bodyForm"  >
                               <img src="/iconn.svg"/>

                            </div>
                            <div className="bodyAdd"  >
                                {/* <MDBIcon className='ms-1' fab icon='twitter' size='2x' id='iConMain' /> */}

                                <div className="formcontent">
                                    <form onSubmit={profilelogin}>
                                        <div id='iConText'>Login to your Account</div>
                                        <div id='iConSubText'><p>BetaSymbol embodies the concept of new-age learningby providing education through digital platform.</p></div>
                                        <span className='span'>{formerrors?.email}</span>
                                        <MDBInput wrapperClass='mb-3' value={logindata.email || ""} type='email' label='Email' id='formControlDefault' name="email" onChange={collectlogindata} />
                                        <span className='span'>{formerrors?.password}</span>
                                        <MDBInput wrapperClass='mb-3' type='password' value={logindata.password || ""} label='Password' id='formControlDefault' name="password" onChange={collectlogindata} />
                                        
                                        <div className="d-flex justify-content-between mx-.5 mb-4 mt-2" id='ForgData'>
                                            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />

                                        </div>
                                        <div className='login-btn-pass'>
                                            <MDBBtn className="mb-2 w-10 pl-100 " size='md'>

                                                <div className='login-btn' onClick={profilelogin}>
                                                    Login
                                                </div>
                                            </MDBBtn>
                                            <a href="!#" className='login-for-pass'>Forgot password?</a>
                                        </div>
                                        <div className='login-buttons'>
                                            <div className='login-text'>Login with Social media</div>
                                            <div className='login-social-media'>
                                                <div className='login-social-media-icons'>
                                                    <FcGoogle className="mx-2" size='16px' />
                                                    Google
                                                </div>
                                                <div className='login-social-media-icons'>

                                                    <MDBIcon fab icon="facebook-f" style={{ color: "rgb(43, 62, 138)" }} />&nbsp;
                                                    Facebook
                                                </div>
                                                <div className='login-social-media-icons'   ><MDBIcon fab icon="twitter" style={{ color: "rgb(74, 189, 235)" }} />&nbsp;
                                                    Twitter</div>
                                            </div>
                                        </div>



                                        <div className='text-center' id='FootData'>
                                            <p>
                                                Dont have an account  ? <a href='/register'>Create here.</a>
                                            </p>
                                        </div>
                                    </form>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>
            <ToastContainer />
        </div>
    )
}
