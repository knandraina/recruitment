
import Compensation from "../models/compensation"
import { findUniqueValues } from '../lib/slugLoad'


export async function loadData(params: any) {
    // Call an external API endpoint to get posts
    const res = await Compensation.find({ approved: true }).populate("company")
    const uniqueValue = await findUniqueValues(res);
    const { uniqueDepartment,
        uniqueGender,
        uniqueRole } = uniqueValue


    if (Object.keys(params).length === 1) {
        return {compensation: JSON.parse(JSON.stringify(res))};
    } else if (Object.keys(params).length === 2) {
        const response = await retrieveDataWithTwoArg(params);
        const responseRole = await checkRole(uniqueRole, Object.values(params)[1]);
        if (!responseRole) {
            const responseDepartment = await checkDepartment(uniqueDepartment, Object.values(params)[1])
            if (!responseDepartment) {
                return {
                    compensation: response,
                    gender: Object.values(params)[1]
                }
            }
            return {
                compensation: response,
                department: response[0].department,
                city_link_department: response[0].city_linked_to_department_language

            }
        }
        return {
            compensation: response,
            role: Object.values(params)[1]
        }
    } else if (Object.keys(params).length === 3) {
        const secondObject: any = Object.values(params)[2];
        const secondObjectUpper = secondObject.charAt(0).toUpperCase() + secondObject.slice(1);
        const response = await retrieveDataWithThreeArg(params);
        const responseRole = await checkRole(uniqueRole, Object.values(params)[2], Object.values(params)[1]);
        const responseDepartment = await checkDepartment(uniqueDepartment, Object.values(params)[2], Object.values(params)[1]);
        const responseGender = await checkGender(uniqueGender, secondObjectUpper);
        if (responseRole && responseDepartment) {

            return {
                compensation: response,
                department: response[0].department,
                role: Object.values(params)[2],
                city_link_department: response[0].city_linked_to_department_language
            }

        } else if (responseRole && responseGender) {

            return {
                compensation: response,
                role: Object.values(params)[1],
                gender: secondObject
            }

        } else if (responseDepartment && responseGender) {

            return {
                compensation: response,
                department: response[0].department,
                gender: secondObject,
                city_link_department: response[0].city_linked_to_department_language
            }

        }

    } else {

        const { department, role, gender } = params
        const genderUpperCase = gender.charAt(0).toUpperCase() + gender.slice(1);

        const res = await Compensation.find({ department_lower_case: department, category_role: role, gender: genderUpperCase, approved: true }).populate('company')

        return {
            compensation: JSON.parse(JSON.stringify(res)),
            city_link_department: JSON.parse(JSON.stringify(res[0].city_linked_to_department_language))
        }
    }
}

const retrieveDataWithThreeArg = async (arg: any) => {

    const secondObject: any = Object.values(arg)[2];
    const secondObjectUpper = secondObject.charAt(0).toUpperCase() + secondObject.slice(1);
    const firstObject = Object.values(arg)[1]

    const res = await Compensation.find({
        $and: [{ approved: true },
        {
            $or: [{ gender: secondObjectUpper }, { category_role: secondObject }]
        }, {
            $or: [{ department_lower_case: firstObject }, { category_role: firstObject }
            ]
        }
        ]
    }).populate('company');

    return JSON.parse(JSON.stringify(res))
}

const retrieveDataWithTwoArg = async (arg: any) => {

    const secondObject: any = Object.values(arg)[1];
    const secondObjectUpper = secondObject.charAt(0).toUpperCase() + secondObject.slice(1);

    const res = await Compensation.find({
        $or:
            [{ gender: secondObjectUpper }, { department_lower_case: secondObject }, { category_role: secondObject }],
        $and: [{ approved: true }]
    }).populate('company');

    return JSON.parse(JSON.stringify(res))
}

export async function loadDepartmentData() {

    const res = await Compensation.find({ approved: true })

    const response = await res.map(data => {
        return {
            params: {
                country: 'france',
                department: data.department_lower_case,
                role: data.category_role,
                gender: data.gender.toLowerCase(),
            }
        }
    })

    return response
}


const checkRole = async (uniqueRole: any, response: any, secondResponse?: any) => {

    if (secondResponse) {
        if (uniqueRole.indexOf(response) > -1 || uniqueRole.indexOf(secondResponse) > -1) {
            return true
        }
        return false
    }
    if (uniqueRole.indexOf(response) > -1) {
        return true
    }
    return false
}

const checkGender = async (uniqueGender: any, response: any, secondResponse?: any) => {

    if (secondResponse) {
        if (uniqueGender.indexOf(response) > -1 || uniqueGender.indexOf(secondResponse) > -1) {
            return true
        }
        return false
    }

    if (uniqueGender.indexOf(response) > -1) {
        return true
    }
    return false
}

const checkDepartment = async (uniqueDepartment: any, response: any, secondResponse?: any) => {

    if (secondResponse) {
        if (uniqueDepartment.indexOf(response) > -1 || uniqueDepartment.indexOf(secondResponse) > -1) {
            return true
        }
        return false
    }

    if (uniqueDepartment.indexOf(response) > -1) {
        return true
    }
    return false
}
