import Compensation from "../models/compensation"
import { findUniqueValues } from "./slugLoad";

export const retrieveData = async (index: any, res: any) => {
    const uniqueValue = await findUniqueValues(res);
    const { uniqueDepartment, uniqueRole } = uniqueValue;

    const responseRole = await checkRole(uniqueRole, index);

    if (!responseRole) {
        const responseDepartment = await checkDepartment(uniqueDepartment, index);
        if (!responseDepartment) {
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


const checkDepartment = async (uniqueDepartment: any, response: any) => {
    if (uniqueDepartment.indexOf(response) > -1) {
        return true
    }
    return false
}
