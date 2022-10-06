import _ from 'lodash';


const interval = [{ range: '10000-35000', j: 0 }, { range: '35000-50000', k: 0 }, { range: '50000-65000', l: 0 }, { range: '65000-80000', m: 0 }, { range: '80000-95000', n: 0 }, { range: '95000+', o: 0 }];


export const main = async (compensation: any) => {
    const getAllInterval = await buildInterval(compensation);
    const flatIntervalResult = getAllInterval.flat(2);
    const uniqueValue = await unique(flatIntervalResult, ['range', 'j']);
    const sumOfSalariesInInterval = _.map(_.countBy(uniqueValue, "range"), (val, key) => ({ range: key, total: val }))
    sumOfSalariesInInterval.forEach(data => {
        data.total = data.total - 1
    })

    return sumOfSalariesInInterval.map(data => {
        return data.total
    })

}

const buildInterval = async (compensation: any) => {
    return compensation.map((item: any) => {
        return interval.map((data: any) => {
            if (item.revenue >= 10000 && item.revenue < 35000) {
                return {
                    range: data.range,
                    j: data.j += 1
                }
            } else if (item.revenue >= 35000 && item.revenue < 50000) {
                return {
                    range: data.range,
                    j: data.k += 1
                }
            } else if (item.revenue >= 50000 && item.revenue < 65000) {
                return {
                    range: data.range,
                    j: data.l += 1
                }
            } else if (item.revenue >= 65000 && item.revenue < 80000) {
                return {
                    range: data.range,
                    j: data.m += 1
                }
            } else if (item.revenue >= 80000 && item.revenue < 95000) {
                return {
                    range: data.range,
                    j: data.n += 1
                }
            } else if (item.revenue >= 95000) {
                return {
                    range: data.range,
                    j: data.o += 1
                }
            }
        })
    })
}





async function unique(arr: any, keyProps: any) {
    const kvArray = arr.map((entry: any) => {
        const key = keyProps.map((k: any) => entry[k]).join('|');
        return [key, entry];
    });
    const map = new Map(kvArray);
    return Array.from(map.values());
}

