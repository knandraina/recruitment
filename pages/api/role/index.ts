import type { NextApiRequest, NextApiResponse } from 'next';

import connectDB from '../../../middleware/connectDB';
import Compensation from '../../../models/compensation';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const response = await Compensation.find().distinct('category_role')
    res.status(200).json(response);
}

export default connectDB(handler);