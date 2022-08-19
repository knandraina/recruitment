import type { NextApiRequest, NextApiResponse } from 'next';

import connectDB from '../../../middleware/connectDB';
import Company from '../../../models/company';
import Compensation from '../../../models/compensation';

import throat from 'throat'
import Airtable from 'airtable';
const base = new Airtable({ apiKey: 'key2knILbrmA57fj9' }).base('appPg7q7Ya8Av1SRr');



async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        // const database = await base('Sheet1').select({
        //     maxRecords: 200,
        //     view: "Grid view"
        // }).all();

        // const new_value = await Promise.all(database.map(throat(1, items => {
        //     return addingData(items.fields)
        // })))
        const response = await updateField()
        res.status(200).json({ response })
    } catch (error) {
        console.log(error);
    }


}


async function updateField() {
    const compensation = await Compensation.find();
    return Promise.all(compensation.map(throat(1, items => {
        return update(items)
    })))

}

const update = async (data: any) => {
    return Compensation.findByIdAndUpdate(data._id, {
        $set: {
            department_lower_case: data.department.toLowerCase()
        }
    },{new: true})
}

async function addingData(items: any) {
    const company = await createCompany(items);
    const compensation = await createCompensation(company, items);
    return compensation
}

async function createCompany(items: any) {
    const company = await Company.findOne({ unique_name: items.company.toLowerCase() });
    if (!company) {
        const results = await Company.create({
            name: items.company,
            unique_name: items.company.toLowerCase(),
            company_size: items.company_size,
            company_stage: items.stage,
            industry: items.industry
        })

        return results;
    }
    return company;
}

async function createCompensation(company: any, items: any) {
    const compensation = await Compensation.create({
        revenue: items.revenue,
        bonus: items.bonus,
        stock_option: items.stock_option,
        role: items.role,
        category_role: items.Category,
        gender: items.sex,
        years_in_company: items.years_in_company,
        years_of_experience: items.total_years,
        seniority: items.seniority,
        place_of_work: items.city,
        department: items.department,
        office_setup: items.office,
        technology_used: items.tech_used,
        contract: items.contract,
        anonymous: items.anonymous,
        company: company._id
    })
    return compensation;
}

export default connectDB(handler);