import type { NextApiRequest, NextApiResponse } from 'next';

import connectDB from '../../../middleware/connectDB';
import Compensation from '../../../models/compensation';

import throat from "throat"

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const response = await Compensation.find({})
    const results = await Promise.all(response.map(throat(1, items => {
        return update(items)
    })))

    res.status(200).json(results);

}

const update = async (items: any) => {
    return Compensation.findByIdAndUpdate(items._id, { $set: { approved: true } }, { new: true })
}

export default connectDB(handler);