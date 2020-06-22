import React, { useState,useEffect } from 'react';
import { Bar,defaults } from 'react-chartjs-2';

// defaults.global.animation = true;
export const Chart = () => {

    const [chatData, setChartData] = useState({});
    const chart = () => {
        setChartData({
            labels: ['aghd','jkkd','bjks','bnkdd','jjjd'],
            datasets: [
              {
                label: "level of thiccness",
                data: [23,29,40,50,60],
                backgroundColor: ["rgba(75, 192, 192, 0.6)"],
                borderWidth: 4
              }
            ]
          });

    }

    useEffect(() => {
        chart()
    }, [])



    return (
        <div>
            <Bar data={chatData}></Bar>
        </div>
    )
}
