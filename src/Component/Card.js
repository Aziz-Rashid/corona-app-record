import React,{useEffect,useState} from 'react';
import './card.css'
import {  Route } from 'react-router-dom'
import Country from './Country'
import axios from 'axios'
import Button from '@material-ui/core/Button';
export default function Card() {
  const [cases,setcases] = useState('')
  const [show,setshow] = useState(false)
    useEffect(() =>{
        const fetchdata = async () =>{
          const {data: {deaths,active,recovered}} = await axios.get('https://corona.lmao.ninja/v2/all')
          const allrecord = {
            death: deaths,
            actives: active,
            cas: recovered
          }
          setcases(allrecord)
        }
        fetchdata()
      },[])
     const handler = () =>{
        setshow(!show)
      }
    return (
      <div>
        <div className="flex">
            <div className="a d">
            
                <div>
                    <h1 className="case active">{cases.actives}</h1>
                    <h1 className="name one">Global Confirmed</h1>
                </div>
            </div>
            <div className="a b">
                <div>
                    <h1 className="case cas">{cases.cas}</h1>
                    <h1 className="name  two">Global Recovered</h1>
                </div>
            </div>
            <div className="a h">
                <div>
                <h1 className="case three">{cases.death}</h1>
                <h1 className="name">Global Deaths</h1>
                </div>
            </div>
            
        </div>
        <div className="center">
        <Button variant="contained" onClick={handler} color="primary" disableElevation >
      Click here to show All Countries Data
    </Button>
        <Route>
          {show === true ? <Country path="/Home" component={Country} />: ""} 
          </Route>
          </div>
        </div>
    );
}
