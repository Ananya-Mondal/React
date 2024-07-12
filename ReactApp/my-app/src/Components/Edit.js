import React,{ useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios';
function Edit() {
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
    

    useEffect(() => {
        //setId(localStorage.getItem("Id"));
        Axios.get("http://localhost/api/users/"+localStorage.getItem("Id"),{
            headers: {
              'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
          })
            .then((response) => {
                if (response.status === 200) {
                    setname(response.data.name);
                    setAddress(response.data.address1);
                    setCity(response.data.city);
                    setState(response.data.state);
                    setPincode(response.data.pinCode);
                    setPhone(response.data.phone);
                    setemail(response.data.email);
                    setpassword(response.data.password);
                    setGender(response.data.gender);
                    
                }



            },
                (error) => {

                    console.log(error);


                }

            )
    }, []);

    function FormSubmit(){
        
        Axios.put("http://localhost/api/Users/"+localStorage.getItem("Id"), {"id": localStorage.getItem("Id"),"name":name,"email":email,"password":password,"address1":address1,"city":city,"state":state,"Pincode":Pincode,"Phone":Phone,"Gender":Gender},
            {
                headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
              }
            }
            )
            .then((response) => {
                console.log(response.status);
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
                Edit
            </h1>
            <div className="col-auto">
               
                    <div className="row mb-3">
                        <label  className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" value={name} name="name" onChange={(e)=>setname(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label  className="col-sm-2 col-form-label">Address</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="address1" value={address1} onChange={(e)=>setAddress(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label  className="col-sm-2 col-form-label">City</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="city" value={city} onChange={(e)=>setCity(e.target.value)} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label  className="col-sm-2 col-form-label">State</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="state" value={state} onChange={(e)=>setState(e.target.value)} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label  className="col-sm-2 col-form-label">Pincode</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="Pincode" value={Pincode} onChange={(e)=>setPincode(e.target.value)} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label  className="col-sm-2 col-form-label">Phone</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="Phone" value={Phone} onChange={(e)=>setPhone(e.target.value)} />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label  className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" name="email" value={email} onChange={(e)=>setemail(e.target.value)} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label  className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" name="passeord" value={password} onChange={(e)=>setpassword(e.target.value)} />
                        </div>
                    </div>
                    <fieldset className="row mb-3">
                        <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="Gender" id="gridRadios1" value="Male" checked={Gender==='Male'} onChange={(e)=>{setGender(e.target.value)}} />
                                <label className="form-check-label">
                                Male
                                </label>
                              
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="Gender" id="Gender" value="Female" checked={Gender==='Female'}  onChange={(e)=>{setGender(e.target.value)}} />
                                <label className="form-check-label">
                                Female
                                </label>
                                
                            </div>

                        </div>
                    </fieldset>

                    <div className='text-danger'>{error}</div>
                    <button className="btn btn-primary" onClick={FormSubmit}>Save</button>  | <Link to="/Users"><button className="btn btn-primary">Back</button></Link>
               
            </div>
        </div>
    )
}

export default Edit
