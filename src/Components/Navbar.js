import React from 'react';
import PropTypes from 'prop-types'
//import { Link } from 'react-router-dom';

export default function Navbar(props){       

      return (
        <>
        <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" style={{fontSize:25 ,fontWeight:"bold"}}>{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href= "#">Home</a>
        </li>
         <li className="nav-item">
          <a className="nav-link" href= "/about">About</a>
        </li> */}
      </ul>
      
      {/* Search Box */}
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-success" type="submit">Search</button>
      </form> */}

      <div className="btn-group mx-4" role="group">
        <button className="btn" onClick={props.bgclrfn1} style={{fontSize:12, fontWeight: 'bold', color:"white", background:"#175873"}}></button>
        <button className="btn" onClick={props.bgclrfn2} style={{fontSize:12, fontWeight: 'bold', color:"white",background:"#2B7C85"}}></button>
        <button className="btn" onClick={props.bgclrfn3} style={{fontSize:12, fontWeight: 'bold', color:"white",background:"#0C1446"}}></button>
        
      </div> 
 
      <div className={`form-check form-switch text-${props.Mode==='light'? 'dark':'light'}`}>
        <input className="form-check-input"  onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark-Mode</label>
      </div>

    </div>
  </div>
</nav>
</>
    )
}

Navbar.propTypes = { title: PropTypes.string.isRequired }

// Specifies the default values for props:
Navbar.defaultProps = {
    title: 'TEXT COUNTER'
  };