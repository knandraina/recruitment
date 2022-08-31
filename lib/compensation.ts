import Validator from 'validator';
import isEmpty from "./isEmpty";

const validateCompensation = async (data: any) => {
    let errors: any = {};

    data.revenue = isEmpty(data.revenue) ? data.revenue : "";
    data.bonus = isEmpty(data.bonus) ? data.bonus : "";
    data.stock_option = isEmpty(data.stock_option) ? data.stock_option : "";
    data.gender = isEmpty(data.gender) ? data.gender : "";
    data.years_in_company = isEmpty(data.years_in_company) ? data.years_in_company : "";
    data.years_of_experience = isEmpty(data.years_of_experience) ? data.years_of_experience : "";
    data.seniority = isEmpty(data.seniority) ? data.seniority : "";
    data.place_of_work = isEmpty(data.place_of_work) ? data.place_of_work : "";
    data.office_setup = isEmpty(data.office_setup) ? data.office_setup : "";
    data.contract = isEmpty(data.contract) ? data.contract : "";
    data.name = isEmpty(data.name) ? data.name : "";
    data.role = isEmpty(data.role) ? data.role : "";
    data.company_size = isEmpty(data.company_size) ? data.company_size : "";
    data.company_stage = isEmpty(data.company_stage) ? data.company_stage : "";
    data.industry = isEmpty(data.industry) ? data.industry : "";
    data.technology_used = isEmpty(data.technology_used) ? data.technology_used : "";
    data.anonymous = isEmpty(data.anonymous) ? data.anonymous : "";
    data.email = isEmpty(data.email) ? data.email : "";


    if (Validator.isEmpty(data.name)) {
        errors.name = 'Company Name is required'
    }

    if (Validator.isEmpty(data.revenue)) {
        errors.revenue = 'Revenue is required'
    }

    if (Validator.isEmpty(data.bonus)) {
        errors.bonus = ' Bonus is required, please enter 0 if none'
    }

    if (Validator.isEmpty(data.stock_option)) {
        errors.stock_option = ' Stock Option is required, please enter 0 if none'
    }

    if (Validator.isEmpty(data.years_in_company)) {
        errors.years_in_company = 'Years in company is required.'
    }

    if (Validator.isEmpty(data.years_of_experience)) {
        errors.years_of_experience = 'Years of experience is required.'
    }

    if (Validator.isEmail(data.email)) {
        errors.email = 'Enter a valid email'
    }

    if (Validator.isEmpty(data.place_of_work)) {
        errors.place_of_work = 'Place of work is required'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

export default validateCompensation;