const _ = require("lodash");
import { quantile } from "simple-statistics";

export async function metricsCompensation(response: any) {
    const compensation = await response.map((data: any) => {
        return data.revenue
    })
    let meanCompensation = _.mean(compensation)

    const orderCompensation = await compensation.sort(function (a: number, b: number) {
        return a - b;
    });

    let medianCompensation = await median(orderCompensation);
    let seventhPercentileCompensation = await seventhPercentile(orderCompensation)
    let ninetythPercentileCompensation = await ninetythPercentile(orderCompensation)


    meanCompensation = (Math.trunc(meanCompensation)).toLocaleString('fr-FR', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0 
    })

    
    medianCompensation = (Math.trunc(medianCompensation/1000)).toLocaleString('fr-FR', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0 
    })
    
    const formatSeventhPercentileCompensation = (Math.trunc(seventhPercentileCompensation/1000)).toLocaleString('fr-FR', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0 
    })

    const formatNinetythPercentileCompensation = (Math.trunc(ninetythPercentileCompensation/1000)).toLocaleString('fr-FR', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0 
    })

    return {
        medianCompensation,
        meanCompensation,
        seventhPercentileCompensation: formatSeventhPercentileCompensation,
        ninetythPercentileCompensation: formatNinetythPercentileCompensation
    }
}

const seventhPercentile = async (orderCompensation: Array<number>) => {
    return quantile(orderCompensation, 0.75);
}

const ninetythPercentile = async (orderCompensation: Array<number>) => {
    return quantile(orderCompensation, 0.9);
}

async function median(values: Array<any>) {
    if (values.length === 0) throw new Error("No inputs");

    values.sort(function (a, b) {
        return a - b;
    });

    var half = Math.floor(values.length / 2);

    if (values.length % 2)
        return values[half];

    return (values[half - 1] + values[half]) / 2.0;
}