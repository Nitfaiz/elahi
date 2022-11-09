import React from 'react'
import { Link } from 'react-router-dom'
// import { Link, Navigate } from "react-router-dom";
// import "../components/Sidebar/login.css"
import TextField from "@material-ui/core/TextField";


export default function Login() {
    return (
        <>

            <div className='loginMain'>
                <div >
                    <form className='loginSub'>

                    <h1 className='loginh1'>Register Here !</h1>
                    <TextField style={{border :"6px"}} id="outlined-basic" label="First Name" variant="outlined" />
                    <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                    <TextField style={{border :"6px"}} id="outlined-basic" label="Email" variant="outlined" />
                    <TextField id="outlined-basic" label="Password" variant="outlined" />


                    <button className='loginbutton' type='submit' >Submit</button>
                    <span className="first">
                                Already a member? <Link to="/" className="sign_up_link">Sign in</Link>
                            </span>
                    </form>


                </div>

            </div>






        </>
    )
}
