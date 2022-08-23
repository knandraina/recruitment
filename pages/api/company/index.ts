import type { NextApiRequest, NextApiResponse } from 'next';

import connectDB from '../../../middleware/connectDB';
import Company from '../../../models/company';
import Compensation from '../../../models/compensation';

import throat from "throat"

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const response = await Compensation.find({})
    const results = await Promise.all(response.map(throat(1, items => {
        return update(items)
    })))
    //     const responseCompany = await (await Compensation.find().populate("company"));

    //     const response = await Promise.all(responseCompany.map(throat(1, (items: any) => {
    //         return linkCompensationToCompany(items)
    //     })))
    res.status(200).json(results);
    // }
    // const linkCompensationToCompany = async (items: any) => {
    //     return Company.findByIdAndUpdate(items.company._id, { $push: { compensation: items._id } }, { new: true });
}

const update = async (items: any) => {
    return Compensation.findByIdAndUpdate(items._id, { $set: { approved: true } }, { new: true })
}

export default connectDB(handler);