import React,{ useState } from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios';
function Create() {
    const [name, setname] = useState("");
    const [address1, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [Pincode, setPincode] = useState("");
    const [Phone, setPhone] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [Gender, setGender] = useState("");
    const [error, setError] = useState("");

    function FormSubmit(){
        console.log(Gender);
        Axios.post("http://localhost/api/Users", {"name":name,"email":email,"password":password,"address1":address1,"city":city,"state":state,"Pincode":Pincode,"Phone":Phone,"Gender":Gender},
            {
                headers: {
                  'Authorization': `Bearer ${localStorage.getItem("token")}`
                },
            }

            )
            .then((response) => {
                if (response.status === 201) {
                   
                    window.location.assign("/Users");
                }

            },
                (error) => {

                    if (error.response.status === 404) {
                        setError("Unable to create");
                    }


                }
            );

    }
    return (
        <div className='container text-center my-3'>
            <h1>
                Create
            </h1>
            <div class="col-auto">
               
                    <div class="row mb-3">
                        <label  class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" value={name} name="name" onChange={(e)=>setname(e.target.value)}/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label  class="col-sm-2 col-form-label">Address</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" name="address1" value={address1} onChange={(e)=>setAddress(e.target.value)}/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label  class="col-sm-2 col-form-label">City</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" name="city" value={city} onChange={(e)=>setCity(e.target.value)} />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label  class="col-sm-2 col-form-label">State</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" name="state" value={state} onChange={(e)=>setState(e.target.value)} />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label  class="col-sm-2 col-form-label">Pincode</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" name="Pincode" value={Pincode} onChange={(e)=>setPincode(e.target.value)} />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label  class="col-sm-2 col-form-label">Phone</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" name="Phone" value={Phone} onChange={(e)=>setPhone(e.target.value)} />
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label  class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control" name="email" value={email} onChange={(e)=>setemail(e.target.value)} />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label  class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" name="passeord" value={password} onChange={(e)=>setpassword(e.target.value)} />
                        </div>
                    </div>
                    <fieldset class="row mb-3">
                        <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
                        <div class="col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="Gender" id="gridRadios1" value="Male"  onChange={(e)=>setGender(e.target.value)} />
                                <label class="form-check-label" for="gridRadios1">
                                    Male
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="Gender" id="Gender" value="Female" onChange={(e)=>setGender(e.target.value)} />
                                <label class="form-check-label" for="gridRadios2">
                                    Female
                                </label>
                            </div>

                        </div>
                    </fieldset>

                    <div className='text-danger'>{error}</div>
                    <button class="btn btn-primary" onClick={FormSubmit}>Save</button>  | <Link to="/Users"><button class="btn btn-primary">Back</button></Link>
               
            </div>
        </div>
    )
}

export default Create
