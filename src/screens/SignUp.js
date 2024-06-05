import React, { useState } from 'react'
import { API_BASE_URL } from '../config/constant'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function SignUp() {

    const navigate = useNavigate();
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const alertPlaceholder = document.getElementById('alertMsg')
    const alertFunction = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
    }

    const signup = (event) => {
        event.preventDefault();


        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const reqData = {
            name: fname+' '+lname,
            email: email,
            phone: phone,
            password: password
        }

        axios.post(`${API_BASE_URL}/users`, reqData, config)
        .then((response) => {
            //console.log(response)
            alertFunction("Registration Successful, Please Login!", 'success')
            setEmail("")
            setFname("")
            setLname("")
            setPhone("")
            setPassword("")

        })
        .catch((err) => {console.log(err)})
    }

    return (
        <div className="container">
            <h3 className="text-center text-uppercase py-4">Create an Account</h3>
            <div id="alertMsg"></div>
            <div className="mx-auto contact-form-container text-muted shadow-sm rounded p-4 lh-2">
                <form onSubmit={(event) => signup(event)}>
                    <div className="mb-3">
                        <label htmlFor="firstname" className="form-label">First name</label>
                        <input value={fname} onChange={(e) => setFname(e.target.value)} type="text" className="form-control" id="firstname" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastname" className="form-label">Last name</label>
                        <input value={lname} onChange={(e) => setLname(e.target.value)} type="text" className="form-control" id="lastname" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Contact number</label>
                        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" className="form-control" id="phone" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" required/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="password" required/>
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">Signup</button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default SignUp
