import React from 'react';
import axios from 'axios'
import { Bar } from 'react-chartjs-2';
import styles from '../styles/stylesheet';
import '../App.css';
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
import { setDatasets } from 'react-chartjs-2/dist/utils';

let dataArray = [];




ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


export default function Chart() {

  const [sliderInput, setSliderInput] = useState(0)
  const [text, changeText] = useState('')
  const [toggle, setToggle] = useState(false)
  const [Stats, setStats] = useState(null)
  const [dataReturn, setDataReturn] = useState([])
  const [heighty, setheighty] = useState(window.innerHeight);
  const [widthy, setWidthy] = useState(window.innerWidth)

window.addEventListener('resize', handleResize);
  function handleResize() {
    const { innerWidth: width, innerHeight: height } = window;
    setWidthy(width); setheighty(height);
  } 

  useEffect(() => {
    apicall();
   
     }, [])

const options = {
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
    console.log(JSON.stringify(response?.data).slice(0, 100), '...response. if backend disabled, returns empty array');
    console.log(typeof(response?.data), ' -response data type');
    dataArray = response?.data
  })
  .catch(function (error) {
    console.log(error);
  });
    console.log(typeof(dataArray), ' -data Array type');
    const propertyValues = Object.values(dataArray);
    dataArray = propertyValues;
  console.log(dataArray, 'new Data Array')

  setDataReturn(dataArray);
  }

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', "October", "November", "December"];

let arrayOfStats = [];
let arrayOfExpenses = []
let arrayOfSales = []
let arrayOfTitles = []

const mapToData = () => {

  console.log(dataReturn, 'data returned. if backend disabled, math.random is used for chart data.')

for (let i in dataArray){

  arrayOfStats.push(dataArray[i]?.stats) 
  arrayOfExpenses.push(dataArray[i]?.expenses)
  arrayOfSales.push(dataArray[i]?.sales)
  arrayOfTitles.push(dataArray[i]?.title)

}

console.log(arrayOfStats, 'stats')
console.log(arrayOfExpenses, 'exp')
console.log(arrayOfSales, 'sales')
console.log(arrayOfTitles, 'titles')

  }


  mapToData();
  const thing = [];
  for(let i in dataArray){
    thing.push({revenue: arrayOfStats[i], expenses: arrayOfExpenses[i], sales: arrayOfSales[i], titles: arrayOfTitles[i]})
  }
  // console.log(thing[0]?.titles, 'data')
  

const data = {
  labels,
  datasets: [
    {
      label: 'Revenue',
      data: labels.map((i, z) => thing[z]?.titles == i ? thing[z]?.revenue:  Math.floor(Math.random() * (5000 - 500 + 1) + 200)), 
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Gross Sales',
      data: labels.map((i, z) => thing[z]?.titles == i ? thing[z]?.sales: Math.floor(Math.random() * (5000 - 500 + 1) + 200)), 
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Expenses',
      data: labels.map((i, z) => thing[z]?.titles == i ? thing[z]?.expenses:  Math.floor(Math.random() * (5000 - 500 + 1) + 200)), 
      backgroundColor: 'lightgreen',
    },
  ],
};

  let apicallpost = async (one, two) => {
    const test = await axios.post(`http://localhost:5000/?title=${one}&stats=${two}`); 
    console.log(test)
    }

    console.log(heighty, widthy, 'height and width')

  return (
  <>
  <br /><br />
  <div id="chartId" style= {{padding: widthy > 1050 ? '140px': 0, marginTop: widthy > 1050 ? '-150px':"30px"}}>

  <Bar  options={options} data={data} /> {widthy < 900 ? <br/> : null}
  </div><div>
  
 {/* <Slider style={{width: 300, margin: "auto"}} onChange={(value1) => setSliderInput(value1)} min={1} max={200} /> */}

         <div style={{textAlign: 'center', lineHeight: 1.1, color: 'white'}}>
{/*           
         {sliderInput} <br />
         <input type="text" 
         onChange={(e)=> {changeText(e.target.value)}}/>
         <br />
         {text} 
  <br /> */}

  {/* <button className='crudButtons' onClick={() => {apicallpost(text, sliderInput)}}>Add</button>
  <button className='crudButtons' onClick={() => {  console.log("apicallpost(text, sliderInput)")}}>Delete</button> */}

  </div>
    </div>
  <br />
</>)
}
