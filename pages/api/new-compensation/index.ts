import type { NextApiRequest, NextApiResponse } from 'next';

import connectDB from '../../../middleware/connectDB';
import Company from '../../../models/company';
import Compensation from '../../../models/compensation';

var Airtable = require('airtable');
var base = new Airtable({ apiKey: 'keyEhtbC8BEcOHnfU' }).base('appkuQ9Rzvw0sjelz');

async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {

        const {
            revenue,
            bonus,
            stock_option,
            gender,
            years_in_company,
            years_of_experience,
            seniority,
            place_of_work,
            office_setup,
            contract,
            name,
            role,
            company_size,
            company_stage,
            industry,
            technology_used,
            anonymous,
            feedback_job_form,
            solution_tested,
            email
        } = req.body

        const response = await addNewCompensation(
            revenue,
            bonus,
            stock_option,
            gender,
            years_in_company,
            years_of_experience,
            seniority,
            place_of_work,
            office_setup,
            contract,
            name,
            technology_used,
            role,
            company_size,
            company_stage,
            industry,
            anonymous,
            feedback_job_form,
            solution_tested)
        

        await base('Table 1').create({
            feedback_job_form,
            solution_tested,
            email
        })
        res.status(200).json({ response })
    } catch (error) {
        console.log(error);
    }


}


async function addNewCompensation(
    revenue: string,
    bonus: string,
    stock_option: string,
    gender: string,
    years_in_company: string,
    years_of_experience: string,
    seniority: string,
    place_of_work: string,
    office_setup: string,
    contract: string,
    name: string,
    technology_used: any,
    role: string,
    company_size: string,
    company_stage: string,
    industry: string,
    anonymous: string,
    feedback_job_form: string,
    solution_tested: any) {
    const company = await createCompany(name,
        company_size,
        company_stage,
        industry
    );
    const compensation = await createCompensation(
        company, 
        revenue,
        bonus,
        stock_option,
        gender,
        years_in_company,
        years_of_experience,
        seniority,
        place_of_work,
        office_setup,
        contract,
        role,
        anonymous,
        technology_used,
        );

    const res = await linkCompensationToCompany(compensation._id, company._id)
    return compensation
}


async function linkCompensationToCompany(compensationId: any, companyId: any) {
    return Company.findByIdAndUpdate(companyId, { $push: { compensation: compensationId } }, { new: true })
}

async function createCompany(
    name: string,
    company_size: string,
    company_stage: string,
    industry: string,
) {
    const company = await Company.findOne({ unique_name: name.toLowerCase() });
    if (!company) {
        const results = await Company.create({
            name: name,
            unique_name: name.toLowerCase(),
            company_size: company_size,
            company_stage: company_stage,
            industry: industry
        })

        return results;
    }
    return company;
}

async function createCompensation(
    company: any, 
    revenue: string,
    bonus: string,
    stock_option: string,
    gender: string,
    years_in_company: string,
    years_of_experience: string,
    seniority: string,
    place_of_work: string,
    office_setup: string,
    contract: string,
    role: string,
    anonymous: string,
    technology_used: any,
) {

    const compensation = await Compensation.create({
        revenue: parseInt(revenue),
        bonus: parseInt(bonus),
        stock_option: parseInt(stock_option),
        role: role,
        gender,
        years_in_company: years_in_company,
        years_of_experience: years_of_experience,
        seniority,
        place_of_work,
        office_setup,
        technology_used: technology_used.join(),
        contract: contract,
        anonymous: anonymous === 'true',
        company: company._id,
        department: undefined,
        department_lower_case: undefined,
        category_role: role
    })
    return compensation;
}

export default connectDB(handler);