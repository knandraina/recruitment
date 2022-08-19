// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../middleware/connectDB';

import Compensation from '../../models/compensation';


async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await Compensation.aggregate([{ $sample: { size: 10 } }]);
  const randomResponse = await Compensation.populate(response, { path: "company" })


  res.status(200).json({post: randomResponse})
}

export default connectDB(handler);