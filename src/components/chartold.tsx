import React from 'react';
import { Bar } from 'react-chartjs-2';
import styles from '../styles/stylesheet';
import axios from 'axios'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

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

  let dataArray = [];
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
    console.log(propertyValues, 'wth');
  
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
  return (
  <>
  <div style= {{}}>
  <Bar height={110} width={300} options={options} data={data} />
  </div>

</>)
}
