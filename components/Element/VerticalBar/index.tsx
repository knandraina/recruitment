import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Salary',
        },
    },
};

const labels = ['20k-35k', '35k-50k', '50k-65k', '65K-80K', '80K-95K', '95+'];

interface VerticalBarProps {
    compensation: any
}

export function VerticalBar(props: VerticalBarProps) {

    const [items, setItems] = useState({
        labels,
        datasets: [
            {
                label: 'number of entries',
                data: [0, 0, 0, 0, 0, 0],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    })

    useEffect(() => {
        async function fetchData() {

            const results = {
                labels,
                datasets: [
                    {
                        label: 'number of entries',
                        data: props.compensation,
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    },
                ],
            }
            setItems(results)
        }

        fetchData()

    }, [props.compensation])


    return <div className='grid grid-cols-12'>
        <div className='col-start-2 col-span-10 hidden lg:block '>
            <Bar options={options} data={items} height="50px"/>
        </div>
    </div>
}


