import Compensation from "../models/compensation"

const post = [{ "_id": "62fbc24eb2659f54508993df", "revenue": 61000, "company": { "_id": "62fbc24eb2659f54508993cd", "name": "Algolia", "unique_name": "algolia", "company_size": "500-1000", "company_stage": "Startup", "__v": 0, "compensation": ["62fbc24eb2659f54508993cf", "62fbc24eb2659f54508993dc", "62fbc24eb2659f54508993df", "62fbc251b2659f545089949e"] }, "bonus": 3000, "stock_option": 0, "role": "Software Engineer, Frontend", "category_role": "Software Engineer", "gender": "Male", "years_in_company": 4, "years_of_experience": 4, "seniority": "Senior", "place_of_work": "Paris", "office_setup": "Hybrid", "technology_used": "JS; React", "contract": "Full-Time", "anonymous": false, "department": "Paris", "__v": 0, "department_lower_case": "paris", "approved": true }, { "_id": "62fbc250b2659f545089946b", "revenue": 49998, "company": { "_id": "62fbc250b2659f5450899469", "name": "SoundHound", "unique_name": "soundhound", "company_size": "100-500", "company_stage": "Traditional Foreign Company", "__v": 0, "compensation": ["62fbc250b2659f545089946b"] }, "bonus": 0, "stock_option": 27559, "role": "Software Engineer", "category_role": "Software Engineer", "gender": "Male", "years_in_company": 1, "years_of_experience": 1, "seniority": "Associate / Junior", "place_of_work": "Paris", "office_setup": "Hybrid", "technology_used": "C/C++, Python, LUA, Javascript", "contract": "Full-Time", "anonymous": false, "department": "Paris", "__v": 0, "department_lower_case": "paris", "approved": true }, { "_id": "62fbc24eb2659f54508993ca", "revenue": 125000, "company": { "_id": "62fbc24eb2659f54508993c8", "name": "Microsoft (USA)", "unique_name": "microsoft (usa)", "company_size": "5000+", "company_stage": "Traditional Foreign Company", "__v": 0, "compensation": ["62fbc24eb2659f54508993ca"] }, "bonus": 35000, "stock_option": 250000, "role": "Senior Developer Advocate Engineer", "category_role": "Software Engineer", "gender": "Female", "years_in_company": 2, "years_of_experience": 7, "seniority": "Senior", "place_of_work": "France", "office_setup": "Remote", "technology_used": "Microsoft Azure", "contract": "Full-Time", "anonymous": false, "department": "Paris", "__v": 0, "department_lower_case": "paris", "approved": true }, { "_id": "62fbc253b2659f5450899543", "revenue": 36000, "company": { "_id": "62fbc24db2659f54508993b4", "name": "Linxo", "unique_name": "linxo", "company_size": "100-500", "company_stage": "Traditional Company", "__v": 0, "compensation": ["62fbc24db2659f54508993b6", "62fbc253b2659f5450899543"] }, "bonus": 0, "stock_option": 0, "role": "Fullstack developer", "category_role": "Software Engineer", "gender": "Male", "years_in_company": 0.3, "years_of_experience": 3, "seniority": "Associate / Junior", "place_of_work": "Aix-en-Provence", "office_setup": "Office", "technology_used": "Typescript", "contract": "Full-Time", "anonymous": false, "department": "Bouches-du-Rhone", "__v": 0, "department_lower_case": "bouches-du-rhone", "approved": true }, { "_id": "62fbc250b2659f545089944d", "revenue": 88816, "company": { "_id": "62fbc24fb2659f5450899443", "name": "Apple", "unique_name": "apple", "company_size": "5000+", "company_stage": "Traditional Foreign Company", "__v": 0, "compensation": ["62fbc250b2659f5450899445", "62fbc250b2659f545089944d"] }, "bonus": 8623, "stock_option": 68983, "role": "Software Engineer", "category_role": "Software Engineer", "gender": "Female", "years_in_company": 4, "years_of_experience": 14, "seniority": "Senior", "place_of_work": "Paris", "office_setup": "Remote", "technology_used": "java, cassandra, kafka", "contract": "Full-Time", "anonymous": false, "department": "Paris", "__v": 0, "department_lower_case": "paris", "approved": true }, { "_id": "62fbc24fb2659f5450899418", "revenue": 144000, "company": { "_id": "62fbc24fb2659f5450899416", "name": "Stripe", "unique_name": "stripe", "company_size": "5000+", "company_stage": "Traditional Foreign Company", "__v": 0, "compensation": ["62fbc24fb2659f5450899418"] }, "bonus": 43000, "stock_option": 0, "role": "Solutions Architect", "category_role": "Software Architect", "gender": "Male", "years_in_company": 0, "years_of_experience": 12, "seniority": "Senior", "place_of_work": "Paris", "office_setup": "Remote", "technology_used": "Web Development (Front-End)", "contract": "Full-Time", "anonymous": false, "department": "Paris", "__v": 0, "department_lower_case": "paris", "approved": true }, { "_id": "62fbc253b2659f545089953e", "revenue": 48000, "company": { "_id": "62fbc252b2659f54508994de", "name": "Amadeus", "unique_name": "amadeus", "company_size": "5000+", "company_stage": "ESN", "__v": 0, "compensation": ["62fbc252b2659f54508994e0", "62fbc253b2659f545089953e"] }, "bonus": 2500, "stock_option": 1000, "role": "software engineer", "category_role": "Software Engineer", "gender": "Male", "years_in_company": 6, "years_of_experience": 6, "seniority": "Intermediate", "place_of_work": "Sophia Antipolis", "office_setup": "Hybrid", "technology_used": "C++", "contract": "Full-Time", "anonymous": false, "department": "Alpes-Maritimes", "__v": 0, "department_lower_case": "alpes-maritimes", "approved": true }, { "_id": "63048b244b35f181ce5c65e8", "revenue": 35000, "company": { "_id": "63048b244b35f181ce5c65e6", "name": "Makina Corpus", "unique_name": "makina corpus", "company_size": "10-100", "company_stage": "ESN", "industry": "ESN", "compensation": ["63048b244b35f181ce5c65e8"], "__v": 0 }, "bonus": 0, "stock_option": 0, "role": "Django, Python, Ansible, Docker", "category_role": "Software Engineer", "gender": "Male", "years_in_company": 1, "years_of_experience": 1, "seniority": "Intermediate", "place_of_work": "Toulouse", "office_setup": "Hybrid", "technology_used": "false", "contract": "Full-Time", "anonymous": false, "department": "Paris", "department_lower_case": "paris", "approved": true, "__v": 0 }, { "_id": "62fbc24bb2659f545089931d", "revenue": 46000, "company": { "_id": "62fbc24bb2659f545089931b", "name": "Kaiman", "unique_name": "kaiman", "company_size": "10-100", "__v": 0, "compensation": ["62fbc24bb2659f545089931d"] }, "bonus": 0, "stock_option": 0, "role": "Développeur Java", "category_role": "Software Engineer", "gender": "Male", "years_in_company": 7, "years_of_experience": 7, "seniority": "Senior", "place_of_work": "Aix en Provence", "office_setup": "Remote", "technology_used": "Java", "contract": "Full-Time", "anonymous": true, "department": "Bouches-du-Rhone", "__v": 0, "department_lower_case": "bouches-du-rhone", "approved": true }, { "_id": "62fbc24fb2659f5450899406", "revenue": 65000, "company": { "_id": "62fbc24fb2659f5450899404", "name": "Meritis", "unique_name": "meritis", "company_size": "500-1000", "company_stage": "ESN", "__v": 0, "compensation": ["62fbc24fb2659f5450899406"] }, "bonus": 0, "stock_option": 0, "role": "Architecte logiciel", "category_role": "AdminSys", "gender": "Male", "years_in_company": 1, "years_of_experience": 11, "seniority": "Lead", "place_of_work": "Aix en Provence", "office_setup": "Remote", "technology_used": "Java, JS, C#, python, Azure, AWS, ...", "contract": "Full-Time", "anonymous": false, "department": "Bouches-du-Rhone", "__v": 0, "department_lower_case": "bouches-du-rhone", "approved": true }]

export const retrieveData = async (response: any) => {
    const res = await Compensation.find({}).populate('company');
    if (response.length === 1) {
        const countryData = await retrieveCountryData();
        return countryData;
    }
    else if (response.length === 2) {
        return checkingElementTwoLength(response, res, response.length);
    } else if (response.length === 3) {
        return checkingElementThreeLength(response, res, response.length);
    } else if (response.length === 4) {
        return retrieveDepartmentRoleGender(response, response.length)
    }

    return {
        compensation: post
    }

}

const checkingElementTwoLength = async (response: any, database: any, length: number) => {
    const responseUniqueValue = await findUniqueValues(database);
    const { uniqueDepartment, uniqueGender, uniqueRole } = responseUniqueValue;

    const responseDepartment = await checkDepartment(uniqueDepartment, response, length)

    if (!responseDepartment) {
        const responseGender = await checkGender(uniqueGender, response, length);
        if (!responseGender) {
            const responseRole = await checkRole(uniqueRole, response, length);
            if (!responseRole) {
                return {
                    compensation: post
                }
            }
            return retrieveRole(response, length)
        }
        return retrieveGender(response, length);
    }

    return retrieveDepartment(response, length)

}

const checkingElementThreeLength = async (response: any, database: any, length: number) => {
    const responseUniqueValue = await findUniqueValues(database);
    const { uniqueDepartment, uniqueGender, uniqueRole } = responseUniqueValue;

    const responseDepartmentGender = await checkDepartmentGender(uniqueDepartment, uniqueGender, response, length);
    if (!responseDepartmentGender) {
        const responseDepartmentRole = await checkDepartmentRole(uniqueDepartment, uniqueRole, response, length);
        if (!responseDepartmentRole) {
            const responseRoleGender = await checkRoleGender(uniqueRole, uniqueGender, response, length);

            // if (!responseRoleGender) {
            //     console.log('on y est ou pas du tout ')
            //     return retrieveDepartmentRoleGender(response, length)
            // }
            return retrieveRoleGender(response, length)
        }
        return retrieveDepartmentRole(response, length)
    }
    return retrieveDepartmentGender(response, length)
}

const retrieveDepartmentRoleGender = async (database: any, length: number) => {

    const responseUpperCase = database[length - 1].charAt(0).toUpperCase() + database[length - 1].slice(1);
    const response = await Compensation.find({ department_lower_case: database[length - 3], category_role: database[length - 2], gender: responseUpperCase, approved: true }).populate('company')
    if (response.length) {
        return {
            compensation: JSON.parse(JSON.stringify(response)),
            department_lower_case: database[length - 3],
            category_role: database[length - 2],
            gender: database[length - 1],
            fake_data: false
        }
    } else {
        return {
            compensation: post,
            department_lower_case: database[length - 3],
            category_role: database[length - 2],
            gender: database[length - 1],
            fake_data: true
        }
    }

}

const retrieveDepartmentGender = async (database: any, length: number) => {
    const responseUpperCase = database[length - 1].charAt(0).toUpperCase() + database[length - 1].slice(1);
    const response = await Compensation.find({ department_lower_case: database[length - 2], gender: responseUpperCase, approved: true }).populate('company')
    if (response.length) {
        return {
            compensation: JSON.parse(JSON.stringify(response)),
            department_lower_case: database[length - 2],
            gender: database[length - 1],
            fake_data: false
        }
    } else {
        return {
            compensation: post,
            department_lower_case: database[length - 3],
            category_role: database[length - 2],
            gender: database[length - 1],
            fake_data: true
        }
    }

}

const retrieveDepartmentRole = async (database: any, length: number) => {
    const response = await Compensation.find({ department_lower_case: database[length - 2], category_role: database[length - 1], approved: true }).populate('company')
    if (response.length) {
        return {
            compensation: JSON.parse(JSON.stringify(response)),
            department_lower_case: database[length - 2],
            category_role: database[length - 1],
            fake_data: false
        }
    } else {
        return {
            compensation: post,
            department_lower_case: database[length - 3],
            category_role: database[length - 2],
            gender: database[length - 1],
            fake_data: true
        }
    }

}

const retrieveRoleGender = async (database: any, length: number) => {
    const responseUpperCase = database[length - 1].charAt(0).toUpperCase() + database[length - 1].slice(1);
    const response = await Compensation.find({ category_role: database[length - 2], gender: responseUpperCase, approved: true }).populate('company')
    if (response.length) {
        return {
            compensation: JSON.parse(JSON.stringify(response)),
            category_role: database[length - 2],
            gender: database[length - 1],
            fake_data: false
        }
    } else {
        return {
            compensation: post,
            department_lower_case: database[length - 3],
            category_role: database[length - 2],
            gender: database[length - 1],
            fake_data: true

        }
    }

}

const checkRoleGender = async (uniqueRole: any, uniqueGender: any, database: any, length: number) => {
    const responseUpperCaseLatter = database[length - 1].charAt(0).toUpperCase() + database[length - 1].slice(1);
    const responseUpperCaseEarlier = database[length - 2].charAt(0).toUpperCase() + database[length - 2].slice(1);
    if (uniqueRole.indexOf(database[length - 1]) > -1 || uniqueRole.indexOf(database[length - 2]) > -1) {
        if (uniqueGender.indexOf(responseUpperCaseLatter) > -1 || uniqueGender.indexOf(responseUpperCaseEarlier) > -1) {
            return true
        }
        return false
    }
    return false
}

const checkDepartmentGender = async (uniqueDepartment: any, uniqueGender: any, database: any, length: number) => {
    const responseUpperCaseLatter = database[length - 1].charAt(0).toUpperCase() + database[length - 1].slice(1);
    const responseUpperCaseEarlier = database[length - 2].charAt(0).toUpperCase() + database[length - 2].slice(1)
    if (uniqueDepartment.indexOf(database[length - 1]) > -1 || uniqueDepartment.indexOf(database[length - 2]) > -1) {
        if (uniqueGender.indexOf(responseUpperCaseEarlier) > -1 || uniqueGender.indexOf(responseUpperCaseLatter) > -1) {
            return true
        }
        return false
    }
    return false;
}

const checkDepartmentRole = async (uniqueDepartment: any, uniqueRole: any, database: any, length: number) => {
    if (uniqueDepartment.indexOf(database[length - 1]) > -1 || uniqueDepartment.indexOf(database[length - 2]) > -1) {
        if (uniqueRole.indexOf(database[length - 1]) > -1 || uniqueRole.indexOf(database[length - 2]) > -1) {
            return true
        }
    }
    return false;
}

const retrieveCountryData = async () => {
    const res = await Compensation.find({ approved: true }).populate("company")
    if (res.length) {
        return { compensation: JSON.parse(JSON.stringify(res)), fake_data: false }
    } else {
        return { compensation: post, fake_data: true }
    }

}

const retrieveRole = async (response: any, length: number) => {
    const res = await Compensation.find({ category_role: response, approved: true }).populate('company')
    if (res.length) {
        return {
            compensation: JSON.parse(JSON.stringify(res)),
            category_role: response[length - 1],
            fake_data: false
        }
    } else {
        return {
            compensation: post,
            category_role: response[length - 1],
            fake_data: true
        }
    }
}

const retrieveGender = async (response: any, length: number) => {
    const responseUpperCase = response[length - 1].charAt(0).toUpperCase() + response[length - 1].slice(1);
    const res = await Compensation.find({ gender: responseUpperCase, approved: true }).populate('company')
    if (res.length) {
        return {
            compensation: JSON.parse(JSON.stringify(res)),
            gender: response[length - 1],
            fake_data: false

        }
    } else {
        return {
            compensation: post,
            gender: response[length - 1],
            fake_data: true
        }
    }
}

const retrieveDepartment = async (response: any, length: number) => {
    const res = await Compensation.find({ department_lower_case: response[1], approved: true }).populate('company')
    if (res.length) {
        return {
            compensation: JSON.parse(JSON.stringify(res)),
            department_lower_case: response[length - 1],
            fake_data: false
        }
    } else {
        return {
            compensation: post,
            department_lower_case: response[length - 1],
            fake_data: true
        }
    }

}

const checkRole = async (uniqueRole: any, response: any, length: number) => {
    if (uniqueRole.indexOf(response[length - 1]) > -1) {
        return true
    }
    return false
}

const checkGender = async (uniqueGender: any, response: any, length: number) => {
    const responseUpperCase = response[length - 1].charAt(0).toUpperCase() + response[length - 1].slice(1);
    if (uniqueGender.indexOf(responseUpperCase) > -1) {
        return true
    }
    return false
}

const checkDepartment = async (uniqueDepartment: any, response: any, length: number) => {
    if (uniqueDepartment.indexOf(response[length - 1]) > -1) {
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