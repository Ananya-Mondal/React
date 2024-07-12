import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios';

function Users() {
    /*const [Users,setUsers]=useState("");
    const getUser = () => {
        Axios.get("http://localhost/api/users")
        .then((response)=>{
            if(response.status===200)
                {
                    setUsers(response.data);
                    console.log(Users);
                }
            
        },
        (error)=>{
            
                    console.log(error);
                

        }
    ); 
       
       fetch("http://localhost/api/users/1")
       .then((response)=> response.json())
       .then((data)=>{
            setName(data.name);
        });
       
    };*/
    
    const [apiUsers, setApiUsers] = useState([]);
    //Axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
    
    useEffect(() => {
        
        Axios.get("http://localhost/api/users",{
            headers: {
              'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
          })
            .then((response) => {
                if (response.status === 200) {
                    setApiUsers(response.data);
                    console.log(apiUsers);

                }



            },
                (error) => {

                    console.log(error);


                }

            )
    },[]);

    const setID=(id)=>
    {

        
        //Axios.defaults.headers.post['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        Axios.delete("http://localhost/api/users/"+id,{
            headers: {
              'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
          })
            .then((response) => {
                if (response.status === 204) {
                    window.location.assign("/Users");
                    console.log("Deleted"+id);

                }



            },
                (error) => {

                    console.log(error);


                }

            )
    }

    function FunEdit(id)
    {
        
        localStorage.setItem("Id",id);
        window.location.assign("/Edit");
    }
    return (
        <div className='container text-center my-3'>
            <h1>
                Users
            </h1>
      
            <div className="col-auto">
                <Link to="/Create"><button type="button" class="btn btn-primary">Create</button></Link>
            </div>
            <table class="table table-success table-striped">
                <thead>
                    <tr>
                        <th>
                            Id
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Address
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {apiUsers.map((data) => {
                        return (
                            <tr>
                                <td>
                                    {data.id}
                                </td>
                                <td>
                                    {data.name}
                                </td>
                                <td>
                                    {data.address1}
                                </td>

                                <td>
                                    <button type="button" class="btn btn-primary" onClick={()=>FunEdit(data.id)}>Edit</button> |  <button type="button" class="btn btn-danger" onClick={()=>setID(data.id)}>Delete</button>

                                </td>

                            </tr>
                        )
                    })}

                </tbody>
            </table>

        </div>
    )
}

export default Users