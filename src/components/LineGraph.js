import React, { useContext, useEffect } from 'react'
import { Bar } from 'react-chartjs-2';
import { Context } from "../Context";

const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
}

const LineGraph = ({ country }) => {
    const { individual,getCountry } = useContext(Context)

    useEffect(() => {
        getCountry(country)
    }, [country])

    const data = {
        labels: ['Confirmed', 'Recovered', 'Death'],
        datasets: [
            {
            label: 'See Visuals',
            data: [individual.confirmed?.value, individual.recovered?.value, individual.deaths?.value],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1,
            },
        ],
    };

    return(
        <>
            <Bar data={data} options={options} />
        </>
)}

export default LineGraph;