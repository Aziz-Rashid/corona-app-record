import React, { useEffect,useState } from 'react'
import {country} from './Api'
import './card.css'



export default function Form({handler}) {
    const [countryname,setcountryname] = useState([])
    useEffect(() => {
        const countries = async () =>{
            setcountryname(await country())
        }
        countries()
    },[setcountryname]);
    return (
        <div>
            <select onChange={(e) => handler(e.target.value)} className="selectbar">
            <option >Pick your Country</option>
                {countryname.map((item,id) =>(
                    <option value={item} key={id}>{item}</option>
                ))}
            </select>
        </div>
    )
}
