import React from 'react'
import {Link} from 'react-router-dom';
function Menu() {
  function Logout()
  {
    
    localStorage.removeItem("token");
    window.location.assign("/Login");
  }
  return (
    
    <div className='Menu'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/contact">Contact Us</Link>
        </li>
        
      </ul>
      <ul className="navbar-nav navba-nav-right">
    <li>
        <table className="text-end">
                <tr>
                    <td>
                     
                    {(localStorage.getItem("token")!==null)?<Link className="nav-link active" aria-current="page" onClick={Logout}>Logout</Link>:<Link className="nav-link active" aria-current="page" to="/Login">Login</Link>}
                    
                    </td>
                </tr>
        </table>
        
       
        
    </li>
   
</ul>
    </div>
  </div>  
</nav>
    </div>
  )
}

export default Menu
