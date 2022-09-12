import Compensation from "../models/compensation"

export const buildPath = async () => {
    const response = await Compensation.find({approved: true}).populate('company')
    const resultsDepartment = response.map((data: any) => {
        return {
            params: {
                country: 'france',
                index: data.department_lower_case
            }
        }
    })

    const resultsGender = response.map((data: any) => {
        return {
            params: {
                country: 'france',
                index: data.gender.toLowerCase()
            }
        }
    })

    const resultsRole = response.map((data: any) => {
        return {
            params: {
                country: 'france',
                index: data.category_role
            }
        }
    })

    let answerDepartment: Array<string> = [];

    resultsDepartment.forEach((x: any) => {
        if (!answerDepartment.some(y => JSON.stringify(y) === JSON.stringify(x))) {
            answerDepartment.push(x)
        }
    })

    let answerRole: Array<string> = [];

    resultsRole.forEach((x: any) => {
        if (!answerRole.some(y => JSON.stringify(y) === JSON.stringify(x))) {
            answerRole.push(x)
        }
    })

    let answerGender: Array<string> = [];

    resultsGender.forEach((x: any) => {
        if (!answerGender.some(y => JSON.stringify(y) === JSON.stringify(x))) {
            answerGender.push(x)
        }
    })

    return answerDepartment.concat(answerRole,answerGender)

}

export const findUniqueValues = async (response: any) => {

    const uniqueDepartment = response.map((item: any) => item.department_lower_case)
        .filter((value: any, index: any, self: any) => self.indexOf(value) === index)

    const uniqueGender = response.map((item: any) => item.gender)
        .filter((value: any, index: any, self: any) => self.indexOf(value) === index)

    const uniqueRole = response.map((item: any) => item.category_role)
        .filter((value: any, index: any, self: any) => self.indexOf(value) === index)

    return {
        uniqueDepartment,
        uniqueGender,
        uniqueRole
    }
}

