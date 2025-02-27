// components/QuestionAnalysis.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const QuestionAnalysis = ({ correctAnswers, totalQuestions }) => {
  const incorrectAnswers = totalQuestions - correctAnswers;

  const data = {
    labels: ['Correct', 'Incorrect'],
    datasets: [
      {
        data: [correctAnswers, incorrectAnswers],
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  return (
    <div style={{ maxWidth: '300px', margin: 'auto' }}>
      <h3>Question Analysis</h3>
      <Doughnut data={data} />
      <p>
        You scored {correctAnswers} question{correctAnswers !== 1 ? 's' : ''} correct out of {totalQuestions}.
      </p>
    </div>
  );
};

export default QuestionAnalysis;
