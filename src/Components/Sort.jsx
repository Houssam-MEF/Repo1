import React from 'react'
import { useSelector, useDispatch } from 'react-redux';


export default function Sort() {

    const {contacts} = useSelector(state=>({
        ...state.Reducer1
    }))


  return (
    
      <div>
        <br />
        <ul>
        {
            contacts.map((el)=>{

                return (
                    <>
                <div className='container' style={{border:"1px solid"}}>
            
                <li key={el.id} >
                    <label htmlFor="name">{el.name}  {el.phone}. </label>
                    </li>
                </div>
                </> 
            )
        })
        }
        </ul>    
    </div>
  )
}
