import React, { useEffect, useContext } from 'react'
import { Pie } from '@reactchartjs/react-chart.js'
import { Context } from "../Context";


const ChartPie = () => {
    const { state,getData } = useContext(Context)

    useEffect(() => {
        getData()
    }, [])


    const data = {
        labels: ['Confirmed', 'Recovered', 'Death'],
        datasets: [
          {
            label: 'Covid',
            data: [state.confirmed?.value, state.recovered?.value, state.deaths?.value],
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
      }

    return (
        <div>
            <Pie height="50" data={data} />
        </div>
    )
}

export default ChartPie
