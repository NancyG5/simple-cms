import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DummyChart = () => {
  const expenses = [
    { category: 'Housing expenses', planned: 1000, actual: 1050 },
    { category: 'Food', planned: 400, actual: 450 },
    { category: 'Transportation', planned: 300, actual: 320 },
    { category: 'Health and medicine', planned: 200, actual: 180 },
    { category: 'Clothing and footwear', planned: 150, actual: 160 },
    { category: 'Entertainment', planned: 200, actual: 220 },
  ]

  const data = {
    labels: expenses.map((expense) => expense.category),
    datasets: [
      {
        label: `Actual Expenses $`,
        data: expenses.map((expense) => expense.actual),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  
  return(
  //  <div className='some-chart'>Some chart</div>
  <div className='dummy-chart'>
      <h1>Expense Structure</h1>
      <Pie data={data} />
    </div>
  )
}

export default DummyChart;

