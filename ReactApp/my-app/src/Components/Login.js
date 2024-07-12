import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios';

function Login() {


    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [error, setError] = useState("");




    function handleSubmit(event) {
        
        event.preventDefault();
        
            Axios.post("http://localhost/api/Users/Login", { "email": email, "password": password })
            .then((response) => {
            
                if (response.status === 200) {
                    localStorage.setItem("token", response.data.token);
                    window.location.assign("/Users");
                }

            },
                (error) => {

                    if (error.response.status === 404) {
                        setError("Invalid Login");
                    }


                }
            );



    };

    return (

        <div>
            <div class="position-absolute bottom-50 end-50">
                <table>
                    <tr>
                        <td>
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        </td>
                        <td>
                            <input type="email" className="form-control" name="email" placeholder="name@example.com" value={email} onChange={(e) => setemail(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="inputPassword6" className="col-form-label">Password</label>
                        </td>
                        <td>
                            <input type="password" name="password" className="form-control" aria-describedby="passwordHelpInline" value={password} onChange={(e) => setpassword(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>

                        </td>
                        <td>
                            <input class="btn btn-primary" type="submit" value="Login" onClick={(e)=>handleSubmit(e)} />

                        </td>
                    </tr>
                    <tr>
                        <td>

                        </td>
                        <td>
                            <div className='text-danger'>{error}</div>
                            <Link class="link-underline-primary" aria-current="page" to="/Create">Sign Up</Link>

                        </td>
                    </tr>
                </table>
            </div>
        </div>


    )
}

export default Login
