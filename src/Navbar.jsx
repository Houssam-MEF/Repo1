import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
import 'bootstrap/dist/css/bootstrap.css';
import { useSelector, useDispatch } from 'react-redux';


export default function Navbar() {

  const dispatch = useDispatch();

  const sortC = ()=>{
      dispatch({
          type:"SORT",
      })
  }

  return (
    <>
    <br />
    <div>
      <nav>
        <h5>
    <Link to="/" style={{color:"black", margin:"5px 12px"}}> All Contacts  </Link>
        </h5>
        <h5>
    <Link to="/Contact" style={{color:"black", margin:"5px 12px"}}> Ajouter Contact</Link>
        </h5>
        <h5>
    <Link to="/Sort" style={{color:"black", margin:"5px 12px"}} onClick={sortC()}>Trier </Link>
        </h5>
      </nav>
    </div>
    </>
  )
}
