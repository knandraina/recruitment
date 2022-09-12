import Compensation from "../models/compensation"

export const retrieveData = async (index: any) => {
    const res = await Compensation.find({}).populate('company');
    const uniqueValue = await findUniqueValues(res);
    const { uniqueDepartment, uniqueGender, uniqueRole } = uniqueValue;

    const responseRole = await checkRole(uniqueRole, index);

    if (!responseRole) {
        const responseDepartment = await checkDepartment(uniqueDepartment, index);
        if (!responseDepartment) {
            const responseGender = await checkGender(uniqueGender, index);
            return retrieveGender(index)
        }
        return retrieveDepartment(index)
    }

    return retrieveRole(index)
}

const retrieveRole = async (response: any) => {
    const res = await Compensation.find({ category_role: response, approved: true }).populate('company') 
        return {
            compensation: JSON.parse(JSON.stringify(res)),
            category_role: response,
        }
}

const retrieveGender = async (response: any) => {
    const responseUpperCase = response.charAt(0).toUpperCase() + response.slice(1);
    const res = await Compensation.find({ gender: responseUpperCase, approved: true }).populate('company')
        return {
            compensation: JSON.parse(JSON.stringify(res)),
            gender: response,
        }
}

const retrieveDepartment = async (response: any) => {
    const res = await Compensation.find({ department_lower_case: response, approved: true }).populate('company')
   
        return {
            compensation: JSON.parse(JSON.stringify(res)),
            department: res[0].department,
        }
}

const checkRole = async (uniqueRole: any, response: any) => {
    if (uniqueRole.indexOf(response) > -1) {
        return true
    }
    return false
}

const checkGender = async (uniqueGender: any, response: any) => {
    const responseUpperCase = response.charAt(0).toUpperCase() + response.slice(1);
    if (uniqueGender.indexOf(responseUpperCase) > -1) {
        return true
    }
    return false
}

const checkDepartment = async (uniqueDepartment: any, response: any) => {
    if (uniqueDepartment.indexOf(response) > -1) {
        return true
    }
    return false
}

const findUniqueValues = async (response: any) => {

    const uniqueDepartment = response.map((item: any) => item.department_lower_case)
        .filter((value: any, index: any, self: any) => self.indexOf(value) === index);

    const uniqueGender = response.map((item: any) => item.gender)
        .filter((value: any, index: any, self: any) => self.indexOf(value) === index);

    const uniqueRole = response.map((item: any) => item.category_role)
        .filter((value: any, index: any, self: any) => self.indexOf(value) === index);


    return {
        uniqueDepartment,
        uniqueGender,
        uniqueRole
    }
}