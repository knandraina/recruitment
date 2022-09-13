import Validator from 'validator';
import isEmpty from "./isEmpty";

const validateCompensation = async (data: any) => {
    let errors: any = {};

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
    

    if (!Validator.isEmail(data.email)) {
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