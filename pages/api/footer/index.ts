// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../middleware/connectDB';

import Compensation from '../../../models/compensation';


async function handler(req: NextApiRequest, res: NextApiResponse) {

    const response = req.body.res;
    if (!response.length || response.length === 1) {
        const results = await Compensation.distinct('department');
        res.status(200).json({ post: results })
    } else {
        response.shift();
        const resultsString = response.join()
        const resultsDepartment = await Compensation.distinct('department');
        res.status(200).json({ post: resultsDepartment })
    }



}

export default connectDB(handler);