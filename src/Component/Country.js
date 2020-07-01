import React, { useState,useEffect } from 'react'
import './card.css'
import axios from 'axios'
import Columns from 'react-columns'
import './Country.css'
export default function Country( ) {
    const [countries,setcountry] = useState([])

  useEffect(() =>{
    const fetchdata = async () =>{
      const {data} = await axios.get('https://corona.lmao.ninja/v2/countries')
     
      setcountry(data)
    }
    fetchdata()
  },[])
    const filter = (e) => {
        setsearch(e.target.value)
    }
    const [search, setsearch] = useState('')
    const filtersearch = countries.filter(item =>{
        return search !== "" ? item.country.toLowerCase().includes(search.toLowerCase()): item
    })
    const country = filtersearch.map((data, i) => {
        return (
            <div key={i} className="country">
               <img className="imge" src={data.countryInfo.flag} alt="" />  
                <div className="describe">
                    <p>{data.country}</p>
                    <p>Cases: {data.cases}</p>
                    <p>Deaths: {data.deaths}</p>
                    <p>Recovered: {data.recovered}</p>
                    <p>TodayCases: {data.todayCases}</p>
                    <p>TodayDeaths: {data.todayDeaths}</p>
                    <p>Active: {data.active}</p>
                    <p>Critical: {data.critical}</p>
                </div>
            </div>
        )
    })
    var queries = [{
        coloumns: 1,
        query: 'min-width: 700px'
    }, {
        columns: 2,
        query: 'min-width: 1000px'
    }]
    
    return (
        <div>
            <input className="search"  onChange={filter} type="text" placeholder="Search Country" />
            <Columns queries={queries}>{country}</Columns>
        </div>
    )
}
