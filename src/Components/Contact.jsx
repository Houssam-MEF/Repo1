import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "../style.css"


export default function Contact(){

    const {contacts} = useSelector(state=>({
        ...state.Reducer1
    }))

    const dispatch = useDispatch();

    const addC = ()=>{
        dispatch({
            type:"ADD",
            payload:[nom,tel,ville]
        })
    }

    const [nom, setNom] = useState("");
    const [tel, setTel] = useState("");
    const [ville, setVille] = useState("");


    let arrConts = contacts;

    const search = (city)=>{
        arrConts.map((el)=>{
            if (el.ville === ville){
                console.log(el);
            }
        })
    }
    
    
    
    
    
    
    return(
        <div>
        <h1 >
            Contacts
        </h1>
        <label htmlFor='nom'>Nom & Prènom : </label>
        <input className='val' type="text" value={nom} onChange={(e)=>{setNom(e.target.value)}} />
        <br />
        <label htmlFor="tel">N° de téléphone : </label>
        <input className='val' type="tel" value={tel} onChange={(e)=>{setTel(e.target.value)}}/>
        <br />
        <label htmlFor="ville">Ville : </label>
        <select className='val' name='Villes' value={ville} onChange={(e)=>{setVille(e.target.value)}}>
            <option value="">--Chooisissez une ville--</option>
            <option value="Tanger" >Tanger</option>
            <option value="Tetouan" >Tetouan</option>
            <option value="Casa" >Casa</option>
        </select>
        <br />
        <input className='add' type="button" value="Ajouter" onClick={addC} />

        <hr />


        <hr />
        
        
        
        </div>
    )
}
