import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import "../style.css";

export default function AllContacts() {

    const style = {
        
    }

    const {contacts} = useSelector(state=>({
        ...state.Reducer1
    }))

    const liste = contacts.map((el)=>{
        return el;
    });

    
    

    const dispatch = useDispatch();

    const delC = (idx)=>{
        dispatch({
            type:"DEL",
            payload:idx
        })
    }

    const [ville, setVille] = useState();
    
//     const src = (e)=>{
//         console.log(ville);
//         setVille(e.target.value);
//         let arrConts = contacts;
        
//         if (ville != ""){
//             arrConts.filter((el)=>{
//                 if (el.ville == ville){
//                     return el;
//                 }
//             })
//         }
//         console.log(ville);
//         toto(arrConts);
//     }

//     const toto =(par)=>{

//         alert("toto");

// }


// const src = (e)=>{
//     setVille(e.target.value);
//     liste.filter((el)=>{
//         if (el.ville == ville){
//             return el;
//         }
//     })
//     let temp = liste.map((el)=>{
       
//     return temp;

// // document.querySelector("ul").innerText = temp;
//     console.log(ville);
// }



  return (
    <>

    <br />
    <br />


    <select name='Villes' value={ville} onChange={(e)=>{setVille(e.target.value)}}>
            <option value="">--Chooisissez une ville--</option>
            <option value="Tanger" >Tanger</option>
            <option value="Tetouan" >Tetouan</option>
            <option value="Casa" >Casa</option>
        </select>
        <br />
        <br />



        <ul>
        {
            contacts.map((el)=>{

                return (
                    <>
                <div className='container' style={{border:"1px solid"}}>
            
                <li key={el.id} >
                    <label htmlFor="name">{el.name}  {el.phone}. </label>
                    <input className='del' type="button" value="Supprimer" onClick={()=>{delC(el.id)}} />
                    </li>
                </div>
                </> 
            )
        })
        }
        </ul>       
        
    </>
  )
}



