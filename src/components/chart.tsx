import React from 'react';
import axios from 'axios'
import { Bar } from 'react-chartjs-2';
import styles from '../styles/stylesheet';
import 'rc-slider/assets/index.css';
import {useRef, useState, useEffect} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import Slider from 'rc-slider';

let dataArray;

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


export const options = {
  scaleShowGridLines: false,
  showScale: false,
  maintainAspectRatio: true,
  plugins: {
    legend: {
     
    },

    title: {
      display: true,
      text: '',
    },
  },
};

let apicall = async () => {
 
  var config = {
    method: 'get',
    url: 'http://localhost:5000/',
    headers: { }
  };
  
  await axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    console.log(typeof(response?.data));
    dataArray = response.data
  })
  .catch(function (error) {
    console.log(error);
  });
    // console.log(typeof(response));
    console.log(typeof(dataArray));
    const propertyValues = Object.values(dataArray);
    console.log(propertyValues[0], 'property');
  
  }

  apicall();

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Revenue',
      data: labels.map(() => Math.floor(Math.random() * (5000 - 500 + 1) + 200)),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Gross Sales',
      data: labels.map(() => Math.floor(Math.random() * (5000 - 500 + 1) + 200)),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Expenses',
      data: labels.map(() => Math.floor(Math.random() * (5000 - 500 + 1) + 200)),
      backgroundColor: 'lightgreen',
    },
  ],
};

export default function Chart() {

  

  let apicallpost = async (one, two) => {
 
    // var config = {
    //   method: 'post',
    //   url: `localhost:5000/?title=${two}&stats=${one}`,
    //   headers: { }
    // };
    const test = await axios.post(`http://localhost:5000/?title=${one}&stats=${two}`); 

    console.log(test)
      // console.log(typeof(response));
      // console.log(typeof(dataArray));
      // const propertyValues = Object.values(dataArray);
      // console.log(propertyValues, 'wth'); 

    }
const [myInput, setInput] = useState(0)
const [change, handleChange] = useState('')
const [toggle, setToggle] = useState(false);

useEffect(() => {
console.log('use')
 }, [toggle])

  const node = useRef(null);
  return (
  <>
  <br /><br />
  <div style= {{margin: '20px'}}>

  <Bar height={85} width={300} options={options} data={data} />
  </div><div>
  
 <Slider style={{width: 300, margin: "auto"}} onChange={(value1) => setInput(value1)} min={1} max={200} />

 
         <div style={{textAlign: 'center', lineHeight: 1}}>
         {myInput} <br />
         <input type="text" 
         onChange={(e)=> {handleChange(e.target.value)}}/>
         <br />
         {change} 
  <br />

  <button style={{borderRadius: '1em', margin: '2px'}} onClick={() => {apicallpost(change, myInput)}}>Add</button>
  <button style={{borderRadius: '1em'}} onClick={() => {apicallpost(change, myInput)}}>Delete</button>

  </div>
    </div>
  <br />
</>)
}
