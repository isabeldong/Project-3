import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
import React from 'react';

ChartJS.register(BarElement, CategoryScale, LinearScale);

function SpendingSummary({ transactions }) {
  const categoryTotals = {};

  transactions.forEach(transaction => {
    const cat = transaction.category || '기타'; // category가 없으면 '기타'
    if (!categoryTotals[cat]) {
      categoryTotals[cat] = 0;
    }
    categoryTotals[cat] += Number(transaction.price);
  });

  const data = {
    labels: Object.keys(categoryTotals),
    datasets: [{
      label: '카테고리별 총 지출',
      data: Object.values(categoryTotals),
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    }]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      }
    }
  };

  return (
    <div style={{ width: '80%', margin: '30px auto' }}>
      <h2>📊 카테고리별 지출 요약</h2>
      <Bar data={data} options={options} />
    </div>
  );
}

export default SpendingSummary;
