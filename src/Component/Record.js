import React, { useEffect, useState } from 'react';
import './card.css'
import Form from './Form'
import { fetchData } from './Api'
import Countup from 'react-countup'
import { Bar } from 'react-chartjs-2';
import Button from '@material-ui/core/Button';

export default function Card() {
  const [data, setdata] = useState({})
  const [count, setcount] = useState('')
  var { confirmed, deaths, recovered } = data
  const [show, setshow] = useState(false)
  const handler = () => {
    setshow(!show)
  }

  const barChart = (
    confirmed ? (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [confirmed.value, recovered.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${count}` },
        }}
      />
    ) : null
  );


  useEffect(() => {
    const fdata = async () => {
      const { confirmed, deaths, recovered } = await fetchData()
      const modifyingdata = {
        confirmed,
        deaths,
        recovered
      }
      return setdata(modifyingdata)
    }
    fdata()
  }, [])
  const changehandler = async (country) => {
    const fdata = await fetchData(country)
    setdata(fdata)
    setcount(country)
  }
  if (confirmed === undefined) {
    return <h1 style={{ margin: '200px' }}> Loading .......</h1>
  }
  return (
    <div>
      <div>
        <div className="flex">
          <div className="a d">
            <div>
              <h1 className="case active"><Countup className="a" start={0} end={confirmed.value} duration={3.5} separator=',' /></h1>
              <h1 className="name one">{count} Confirmed</h1>
            </div>
          </div>
          <div className="a b">
            <div>
              <h1 className="case cas"><Countup className="a" start={0} end={recovered.value} duration={3.5} separator=',' /></h1>
              <h1 className="name  two">{count} Recovered</h1>
            </div>
          </div>
          <div className="a h">
            <div>
              <h1 className="case three"><Countup className="a" start={0} end={deaths.value} duration={3.5} separator=',' /></h1>
              <h1 className="name">{count}  Deaths</h1>
            </div>
          </div>

        </div>
        <Form dat={data} handler={changehandler} />
      </div>
      <div className="buttont">
        <Button className="buttont" variant="contained" onClick={handler} color="primary" disableElevation >
          Click here to see Bar chart
    </Button>
        {show === true ? barChart : ""}

      </div>
    </div>
  );
}
