const _ = require("lodash");

export async function metricsCompensation(response: any) {
    const compensation = await response.map((data: any) => {
        return data.revenue
    })
    const meanCompensation = _.mean(compensation)

    const orderCompensation = await compensation.sort(function (a: number, b: number) {
        return a - b;
    });

    const medianCompensation = await median(orderCompensation);

    return {
        medianCompensation,
        meanCompensation
    }
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