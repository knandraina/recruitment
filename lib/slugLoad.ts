import Compensation from "../models/compensation"

export const buildPath = async () => {

    // two parameters

    const response = await Compensation.find({ approved: true }).populate('company')

    const resultsDepartment = response.map((data: any) => {
        return {
            params: {
                country: 'france',
                department: data.department_lower_case
            }
        }
    })

    const resultsGender = response.map((data: any) => {
        return {
            params: {
                country: 'france',
                department: data.gender.toLowerCase()
            }
        }
    })

    const resultsRole = response.map((data: any) => {
        return {
            params: {
                country: 'france',
                department: data.category_role
            },
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



    // three parameters

    const resultsDepartmentGender = response.map((data: any) => {
        return {
            params: {
                country: 'france',
                department: data.department_lower_case,
                role: data.gender.toLowerCase()
            }
        }
    })

    let answerDepartmentGender: Array<string> = [];

    resultsDepartmentGender.forEach((x: any) => {
        if (!answerDepartmentGender.some(y => JSON.stringify(y) === JSON.stringify(x))) {
            answerDepartmentGender.push(x)
        }
    })

    const resultsRoleGender = response.map((data: any) => {
        return {
            params: {
                country: 'france',
                department: data.category_role,
                role: data.gender.toLowerCase()
            }
        }
    })


    let answerRoleGender: Array<string> = [];

    resultsRoleGender.forEach((x: any) => {
        if (!answerRoleGender.some(y => JSON.stringify(y) === JSON.stringify(x))) {
            answerRoleGender.push(x)
        }
    })

    const resultsDepartmentRole = response.map((data: any) => {
        return {
            params: {
                country: 'france',
                department: data.department_lower_case,
                role: data.category_role
            }
        }
    }) 

    let answerDepartmentRole: Array<string> = [];

    resultsDepartmentRole.forEach((x: any) => {
        if (!answerDepartmentRole.some(y => JSON.stringify(y) === JSON.stringify(x))) {
            answerDepartmentRole.push(x)
        }
    })

    return {
        answerDepartment: answerDepartment.concat(answerRole, answerGender),
        answerDepartmentRole: answerRoleGender.concat(answerDepartmentGender, answerDepartmentRole),
        answerDepartmentGender, 
        answerDepartmentRoles: answerDepartmentRole,
        answerRoleGender
    }
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

